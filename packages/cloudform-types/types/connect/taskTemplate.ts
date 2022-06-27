/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
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

export class DefaultFieldValue {
    Id!: FieldIdentifier
    DefaultValue!: Value<string>

    constructor(properties: DefaultFieldValue) {
        Object.assign(this, properties)
    }
}

export class FieldIdentifier {
    Name!: Value<string>

    constructor(properties: FieldIdentifier) {
        Object.assign(this, properties)
    }
}

export class Field {
    Id!: FieldIdentifier
    Description?: Value<string>
    Type!: Value<string>
    SingleSelectOptions?: List<Value<string>>

    constructor(properties: Field) {
        Object.assign(this, properties)
    }
}

export interface TaskTemplateProperties {
    InstanceArn: Value<string>
    Name?: Value<string>
    Description?: Value<string>
    ContactFlowArn?: Value<string>
    Constraints?: {[key: string]: any}
    Defaults?: List<DefaultFieldValue>
    Fields?: List<Field>
    Status?: Value<string>
    ClientToken?: Value<string>
    Tags?: List<ResourceTag>
}

export default class TaskTemplate extends ResourceBase<TaskTemplateProperties> {
    static DefaultFieldValue = DefaultFieldValue
    static FieldIdentifier = FieldIdentifier
    static Field = Field

    constructor(properties: TaskTemplateProperties) {
        super('AWS::Connect::TaskTemplate', properties)
    }
}
