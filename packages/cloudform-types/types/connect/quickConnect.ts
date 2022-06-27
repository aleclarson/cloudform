/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
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

export class QueueQuickConnectConfig {
    ContactFlowArn!: Value<string>
    QueueArn!: Value<string>

    constructor(properties: QueueQuickConnectConfig) {
        Object.assign(this, properties)
    }
}

export class QuickConnectConfig {
    QuickConnectType!: Value<string>
    PhoneConfig?: PhoneNumberQuickConnectConfig
    QueueConfig?: QueueQuickConnectConfig
    UserConfig?: UserQuickConnectConfig

    constructor(properties: QuickConnectConfig) {
        Object.assign(this, properties)
    }
}

export class UserQuickConnectConfig {
    ContactFlowArn!: Value<string>
    UserArn!: Value<string>

    constructor(properties: UserQuickConnectConfig) {
        Object.assign(this, properties)
    }
}

export class PhoneNumberQuickConnectConfig {
    PhoneNumber!: Value<string>

    constructor(properties: PhoneNumberQuickConnectConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    InstanceArn: Value<string>
    Name: Value<string>
    Description?: Value<string>
    QuickConnectConfig: QuickConnectConfig
    Tags?: List<ResourceTag>
}

class QuickConnect extends ResourceBase<Properties> {
    static QueueQuickConnectConfig = QueueQuickConnectConfig
    static QuickConnectConfig = QuickConnectConfig
    static UserQuickConnectConfig = UserQuickConnectConfig
    static PhoneNumberQuickConnectConfig = PhoneNumberQuickConnectConfig

    constructor(properties: Properties) {
        super('AWS::Connect::QuickConnect', properties)
    }
}
export { QuickConnect as R }
