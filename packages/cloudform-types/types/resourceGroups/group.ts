/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TagFilter {
    Key?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: TagFilter) {
        Object.assign(this, properties)
    }
}

export class Query {
    ResourceTypeFilters?: List<Value<string>>
    StackIdentifier?: Value<string>
    TagFilters?: List<TagFilter>

    constructor(properties: Query) {
        Object.assign(this, properties)
    }
}

export class ConfigurationParameter {
    Name?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: ConfigurationParameter) {
        Object.assign(this, properties)
    }
}

export class ConfigurationItem {
    Type?: Value<string>
    Parameters?: List<ConfigurationParameter>

    constructor(properties: ConfigurationItem) {
        Object.assign(this, properties)
    }
}

export class ResourceQuery {
    Type?: Value<string>
    Query?: Query

    constructor(properties: ResourceQuery) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name: Value<string>
    Description?: Value<string>
    ResourceQuery?: ResourceQuery
    Tags?: List<ResourceTag>
    Configuration?: List<ConfigurationItem>
    Resources?: List<Value<string>>
}

class Group extends ResourceBase<Properties> {
    static TagFilter = TagFilter
    static Query = Query
    static ConfigurationParameter = ConfigurationParameter
    static ConfigurationItem = ConfigurationItem
    static ResourceQuery = ResourceQuery

    constructor(properties: Properties) {
        super('AWS::ResourceGroups::Group', properties)
    }
}
export { Group as R }
