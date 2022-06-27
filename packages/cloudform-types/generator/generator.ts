import * as fs from 'fs'
import { camelCase, forEach, pickBy, map, some, merge, filter } from 'lodash'
import { Response } from 'node-fetch'

const fetch = require('node-fetch')

const SchemaUrls: { [key: string]: string } = {
  'ap-south-1':
    'https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-northeast-3':
    'https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-northeast-2':
    'https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-southeast-1':
    'https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-southeast-2':
    'https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-northeast-1':
    'https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ca-central-1':
    'https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'eu-central-1':
    'https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'eu-west-1':
    'https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'eu-west-2':
    'https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'eu-west-3':
    'https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'sa-east-1':
    'https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'us-east-1':
    'https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'us-east-2':
    'https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'us-west-1':
    'https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'us-west-2':
    'https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
}

type BasicTypeSuffix = 'Type' | 'ItemType'

interface TypeProperties {
  Type?: string
  ItemType?: string
  PrimitiveType?: string
  PrimitiveItemType?: string
  Required: boolean
  UpdateType: string
}

type TypePropertiesMap = { [key: string]: TypeProperties }

interface ResourceType {
  Properties: TypePropertiesMap
}

type ResourceTypeMap = { [key: string]: ResourceType }

interface Schema {
  ResourceSpecificationVersion: string
  ResourceTypes: ResourceTypeMap
  PropertyTypes: ResourceTypeMap
}

function adjustedCamelCase(input: string): string {
  return input === 'IoT' ? 'iot' : camelCase(input)
}

function toFileName(input: string): string {
  return input === 'Index' ? 'indexResource' : camelCase(input)
}

function determineTypeScriptType(
  property: TypeProperties,
  propertyName: string,
  typeSuffix: BasicTypeSuffix
): string | undefined {
  if (property[typeSuffix] === 'List') {
    return `List<${
      property.ItemType === 'List'
        ? 'List<any>'
        : determineTypeScriptType(property, propertyName, 'ItemType')
    }>`
  }
  if (property[typeSuffix] === 'Map') {
    return `{[key: string]: ${
      property.ItemType === 'Map'
        ? 'Record<string, any>'
        : determineTypeScriptType(property, propertyName, 'ItemType')
    }}`
  }
  if (property[typeSuffix] === 'Tag') {
    return 'ResourceTag'
  }
  if (property[typeSuffix]) {
    return innerTypeName('.' + property[typeSuffix])
  }

  if (
    property[typeSuffix === 'Type' ? 'PrimitiveType' : 'PrimitiveItemType'] ===
    undefined
  ) {
    return undefined
  }
  let primitiveType =
    property[
      typeSuffix === 'Type' ? 'PrimitiveType' : 'PrimitiveItemType'
    ]!.toLowerCase()
  if (['json', 'map'].includes(primitiveType)) {
    return '{[key: string]: any}'
  }
  if (['integer', 'double', 'long'].includes(primitiveType)) {
    primitiveType = 'number'
  }
  if (primitiveType === 'timestamp') {
    primitiveType = 'string' // TODO consider Date.toISOString()
  }
  return `Value<${primitiveType}>`
}

function propertiesEntries(
  properties: TypePropertiesMap,
  useNonNullAssertion: boolean = false
): string[] {
  const nonOptionalPostfix = useNonNullAssertion ? '!' : ''
  return filter(
    map(properties, (property: TypeProperties, propertyName: string) => {
      const scriptType = determineTypeScriptType(property, propertyName, 'Type')
      if (scriptType === undefined) {
        // @TODO fix this,
        // In JSON definit in AWS::DataBrew::Recipe.Action -> Properties -> Parameters
        // PrimitiveType is undefined
        return undefined
      }
      return `${propertyName}${
        property.Required ? nonOptionalPostfix : '?'
      }: ${scriptType}`
    }),
    (name): name is string => name !== undefined
  )
}

function isTagList(p: TypeProperties) {
  return (
    p.Type === 'List' && (p.ItemType === 'ResourceTag' || p.ItemType === 'Tag')
  )
}

function hasTags(properties: { [key: string]: TypeProperties }): boolean {
  return !!properties.ResourceTags || some(properties, isTagList)
}

function innerTypeName(innerTypeFullName: string): string {
  const [containingTypeFullName, innerTypeName] = innerTypeFullName.split('.')
  const containingTypeName = containingTypeFullName.split(':').pop()

  if (innerTypeName === containingTypeName) {
    return innerTypeName + 'Inner'
  }

  return innerTypeName
}

function generateInnerClass(
  name: string,
  properties: TypePropertiesMap
): string {
  return `export class ${name} {
${propertiesEntries(properties, true)
  .map(e => `    ${e}`)
  .join('\n')}

    constructor(properties: ${name}) {
        Object.assign(this, properties)
    }
}`
}

function generateInnerType(name: string, type: TypeProperties) {
  return `export type ${name} = ${determineTypeScriptType(type, '_t', 'Type')}`
}

function generateTopLevelClass(
  namespace: string,
  typeName: string,
  properties: TypePropertiesMap,
  innerTypes: ResourceTypeMap
) {
  const canOmitProperties = Object.keys(properties).every(
    prop => !properties[prop].Required
  )

  return `export interface Properties {
${propertiesEntries(properties)
  .map(e => `    ${e}`)
  .join('\n')}
}

class ${typeName} extends ResourceBase<Properties> {
${Object.keys(innerTypes)
  .filter(innerType => !!innerTypes[innerType].Properties)
  .map(innerTypeFullName => {
    const [, innerTypeNameUnsafe] = innerTypeFullName.split('.')
    const innerTypeNameSafe = innerTypeName(innerTypeFullName)
    return `    static ${innerTypeNameUnsafe} = ${innerTypeNameSafe}`
  })
  .join('\n')}

    constructor(properties${canOmitProperties ? '?' : ''}: Properties) {
        super('AWS::${namespace}::${typeName}', properties${
    canOmitProperties ? ' || {}' : ''
  })
    }
}`
}

function isExportableInnerType([innerTypeFullName, innerType]: [string, any]) {
  if (innerTypeFullName.endsWith('.ResourceTag')) {
    // Avoid declaration conflicts.
    // ResourceTag is imported from /types/resource.ts
    return false
  }
  const hasProperties = !!innerType.Properties
  const hasPrimitiveType = !!innerType.PrimitiveType
  const hasPrimitiveItemType = !!innerType.PrimitiveItemType
  const hasType = !!innerType.Type

  return hasProperties || hasPrimitiveType || hasPrimitiveItemType || hasType
}

function generateFile(
  fileHeader: string,
  namespace: string,
  resourceName: string,
  properties: TypePropertiesMap,
  innerTypes: ResourceTypeMap
): void {
  let innerHasTags = false
  const innerTypesTemplates = Object.entries(innerTypes)
    .filter(isExportableInnerType)
    .map(([innerTypeFullName, innerType]) => {
      const resolvedInnerTypeName = innerTypeName(innerTypeFullName)
      if (innerType.Properties) {
        innerHasTags = innerHasTags || hasTags(innerType.Properties)
        return generateInnerClass(resolvedInnerTypeName, innerType.Properties)
      }
      innerHasTags = innerHasTags || isTagList(innerType as any)
      return generateInnerType(resolvedInnerTypeName, innerType as any)
    })

  const resourceImports = ['ResourceBase']
  if (innerHasTags || hasTags(properties)) {
    resourceImports.push('ResourceTag')
  }

  const generatedClass = generateTopLevelClass(
    namespace,
    resourceName,
    properties,
    innerTypes
  )

  const template = `${fileHeader}

import {${resourceImports.join(', ')}} from '../resource'
import {Value, List} from '../dataTypes'

${innerTypesTemplates.join('\n\n')}

${generatedClass}
export { ${resourceName} as R }
`

  if (!fs.existsSync(`./types/${adjustedCamelCase(namespace)}`)) {
    fs.mkdirSync(`./types/${adjustedCamelCase(namespace)}`)
  }

  fs.writeFileSync(
    `./types/${adjustedCamelCase(namespace)}/${toFileName(resourceName)}.ts`,
    template,
    { encoding: 'utf8' }
  )
}

type Resource = {
  typeName: string
  innerTypes: string[]
}

function generateIndexNamespaceFile(
  fileHeader: string,
  namespace: string,
  resources: Resource[]
): void {
  const ident = (i: number) => `_${i.toString(16)}`
  const imports = resources.map(
    (r, i) => `import * as ${ident(i)} from './${toFileName(r.typeName)}'`
  )

  const innerTypes: Record<string, string[]> = {}
  resources.forEach((r, i) => {
    if (r.innerTypes.length)
      innerTypes[r.typeName] = r.innerTypes.map(
        typeName => `export type ${typeName} = ${ident(i)}.${typeName}`
      )
  })

  const template = `${fileHeader}

${imports.join('\n')}

export namespace ${namespace} {
${resources
  .map((r, i) => `  export const ${r.typeName} = ${ident(i)}.R`)
  .join('\n')}

${resources
  .map((r, i) => `  export type ${r.typeName} = ${ident(i)}.R`)
  .join('\n')}

${Object.entries(innerTypes)
  .map(
    ([typeName, innerTypes]) =>
      `  export namespace ${typeName} {\n    ${innerTypes.join('\n    ')}\n  }`
  )
  .join('\n')}
}
`

  fs.writeFileSync(
    `./types/${adjustedCamelCase(namespace)}/index.namespace.ts`,
    template,
    { encoding: 'utf8' }
  )
}

function generateIndexReexportFile(
  fileHeader: string,
  namespace: string
): void {
  const template = `${fileHeader}

import {${namespace}} from './index.namespace'

export default ${namespace}
`

  fs.writeFileSync(
    `./types/${adjustedCamelCase(namespace)}/index.ts`,
    template,
    { encoding: 'utf8' }
  )
}

function generateGrandIndexFile(
  fileHeader: string,
  indexContent: { [key: string]: Resource[] }
): void {
  const lines: string[] = []

  forEach(indexContent, (_, namespace: string) => {
    lines.push(`import ${namespace} from './${adjustedCamelCase(namespace)}'`)
    lines.push(`export {${namespace}}`)
    lines.push('')
  })

  const template = `${fileHeader}

${lines.join('\n')}

export default {
${Object.keys(indexContent)
  .map(t => `  ${t}`)
  .join(',\n')}
}
`

  fs.writeFileSync('./types/index.ts', template, { encoding: 'utf8' })
}

function generateFileHeader(
  regions: string[],
  schemaVersions: { [key: string]: string }
) {
  regions.sort()
  return `/* Generated from: ${regions.map(
    region =>
      `\n * ${region} (${SchemaUrls[region]}), version ${schemaVersions[region]}`
  )}\n */`
}

function generateFilesFromSchema(
  schema: Schema,
  resourceSources: { [key: string]: string[] },
  schemaVersions: { [key: string]: string }
) {
  const regionsUsed = new Set<string>()
  const indexContent: { [key: string]: Resource[] } = {}

  forEach(
    schema.ResourceTypes,
    (resource: ResourceType, resourceFullName: string) => {
      const [, namespace, typeName] = resourceFullName.split('::')
      const properties = resource.Properties || {}

      const fileHeader = generateFileHeader(
        resourceSources[resourceFullName],
        schemaVersions
      )
      resourceSources[resourceFullName].forEach(region =>
        regionsUsed.add(region)
      )

      const resourcePropertyTypes = pickBy(
        schema.PropertyTypes,
        (propertyType: ResourceType, propertyFullName: string) =>
          propertyFullName.startsWith(resourceFullName + '.')
      ) as ResourceTypeMap

      indexContent[namespace] = indexContent[namespace] || []
      indexContent[namespace].push({
        typeName,
        innerTypes: Object.entries(resourcePropertyTypes)
          .filter(isExportableInnerType)
          .map(([name]) => name.slice(name.lastIndexOf('.') + 1))
          .filter(name => name !== typeName),
      })

      generateFile(
        fileHeader,
        namespace,
        typeName,
        properties,
        resourcePropertyTypes
      )
    }
  )

  const indexFileHeader = generateFileHeader([...regionsUsed], schemaVersions)

  forEach(indexContent, (resources: Resource[], namespace: string) => {
    generateIndexNamespaceFile(indexFileHeader, namespace, resources)
    generateIndexReexportFile(indexFileHeader, namespace)
  })

  generateGrandIndexFile(indexFileHeader, indexContent)
}

function generateSchemas() {
  const schemas: { [key: string]: Schema } = {}
  const schemaVersions: { [key: string]: string } = {}
  const resourceSources: { [key: string]: string[] } = {}

  const mergedSchemaPromises = Object.keys(SchemaUrls).map(region => {
    const schemaUrl = SchemaUrls[region]

    return fetch(schemaUrl)
      .then((res: Response) => res.json())
      .then((schema: Schema) => {
        schemas[region] = schema
        schemaVersions[region] = schema.ResourceSpecificationVersion

        forEach(
          schema.ResourceTypes,
          (resource: ResourceType, resourceFullName: string) => {
            if (!resourceSources[resourceFullName]) {
              resourceSources[resourceFullName] = []
            }

            resourceSources[resourceFullName].push(region)
          }
        )
      })
  })

  Promise.all(mergedSchemaPromises)
    .then(() => {
      let mergedSchema: Schema

      Object.keys(SchemaUrls)
        .sort()
        .forEach(region => {
          mergedSchema = merge(mergedSchema || {}, schemas[region])
        })

      generateFilesFromSchema(mergedSchema!, resourceSources, schemaVersions)
    })
    .catch(err => console.error(err))
}

generateSchemas()
