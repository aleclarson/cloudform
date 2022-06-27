/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class KeyMap {
    Name?: Value<string>
    ObjectTypeKeyList?: List<ObjectTypeKey>

    constructor(properties: KeyMap) {
        Object.assign(this, properties)
    }
}

export class FieldMap {
    Name?: Value<string>
    ObjectTypeField?: ObjectTypeField

    constructor(properties: FieldMap) {
        Object.assign(this, properties)
    }
}

export class ObjectTypeField {
    Source?: Value<string>
    Target?: Value<string>
    ContentType?: Value<string>

    constructor(properties: ObjectTypeField) {
        Object.assign(this, properties)
    }
}

export class ObjectTypeKey {
    FieldNames?: List<Value<string>>
    StandardIdentifiers?: List<Value<string>>

    constructor(properties: ObjectTypeKey) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    DomainName: Value<string>
    ObjectTypeName?: Value<string>
    AllowProfileCreation?: Value<boolean>
    Description?: Value<string>
    EncryptionKey?: Value<string>
    ExpirationDays?: Value<number>
    Fields?: List<FieldMap>
    Keys?: List<KeyMap>
    Tags?: List<ResourceTag>
    TemplateId?: Value<string>
}

class ObjectType extends ResourceBase<Properties> {
    static KeyMap = KeyMap
    static FieldMap = FieldMap
    static ObjectTypeField = ObjectTypeField
    static ObjectTypeKey = ObjectTypeKey

    constructor(properties: Properties) {
        super('AWS::CustomerProfiles::ObjectType', properties)
    }
}
export { ObjectType as R }
