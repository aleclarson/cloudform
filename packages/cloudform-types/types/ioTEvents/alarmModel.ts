/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AlarmRule {
    SimpleRule?: SimpleRule

    constructor(properties: AlarmRule) {
        Object.assign(this, properties)
    }
}

export class DynamoDBv2 {
    Payload?: Payload
    TableName!: Value<string>

    constructor(properties: DynamoDBv2) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyTimestamp {
    OffsetInNanos?: Value<string>
    TimeInSeconds!: Value<string>

    constructor(properties: AssetPropertyTimestamp) {
        Object.assign(this, properties)
    }
}

export class IotTopicPublish {
    MqttTopic!: Value<string>
    Payload?: Payload

    constructor(properties: IotTopicPublish) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyValue {
    Quality?: Value<string>
    Timestamp?: AssetPropertyTimestamp
    Value!: AssetPropertyVariant

    constructor(properties: AssetPropertyValue) {
        Object.assign(this, properties)
    }
}

export class IotEvents {
    InputName!: Value<string>
    Payload?: Payload

    constructor(properties: IotEvents) {
        Object.assign(this, properties)
    }
}

export class Payload {
    ContentExpression!: Value<string>
    Type!: Value<string>

    constructor(properties: Payload) {
        Object.assign(this, properties)
    }
}

export class InitializationConfiguration {
    DisabledOnInitialization!: Value<boolean>

    constructor(properties: InitializationConfiguration) {
        Object.assign(this, properties)
    }
}

export class Sns {
    Payload?: Payload
    TargetArn!: Value<string>

    constructor(properties: Sns) {
        Object.assign(this, properties)
    }
}

export class AlarmCapabilities {
    InitializationConfiguration?: InitializationConfiguration
    AcknowledgeFlow?: AcknowledgeFlow

    constructor(properties: AlarmCapabilities) {
        Object.assign(this, properties)
    }
}

export class Sqs {
    Payload?: Payload
    QueueUrl!: Value<string>
    UseBase64?: Value<boolean>

    constructor(properties: Sqs) {
        Object.assign(this, properties)
    }
}

export class AlarmAction {
    DynamoDB?: DynamoDB
    DynamoDBv2?: DynamoDBv2
    Firehose?: Firehose
    IotEvents?: IotEvents
    IotSiteWise?: IotSiteWise
    IotTopicPublish?: IotTopicPublish
    Lambda?: Lambda
    Sns?: Sns
    Sqs?: Sqs

    constructor(properties: AlarmAction) {
        Object.assign(this, properties)
    }
}

export class Firehose {
    DeliveryStreamName!: Value<string>
    Payload?: Payload
    Separator?: Value<string>

    constructor(properties: Firehose) {
        Object.assign(this, properties)
    }
}

export class SimpleRule {
    InputProperty!: Value<string>
    ComparisonOperator!: Value<string>
    Threshold!: Value<string>

    constructor(properties: SimpleRule) {
        Object.assign(this, properties)
    }
}

export class AcknowledgeFlow {
    Enabled?: Value<boolean>

    constructor(properties: AcknowledgeFlow) {
        Object.assign(this, properties)
    }
}

export class DynamoDB {
    HashKeyField!: Value<string>
    HashKeyType?: Value<string>
    HashKeyValue!: Value<string>
    Operation?: Value<string>
    Payload?: Payload
    PayloadField?: Value<string>
    RangeKeyField?: Value<string>
    RangeKeyType?: Value<string>
    RangeKeyValue?: Value<string>
    TableName!: Value<string>

    constructor(properties: DynamoDB) {
        Object.assign(this, properties)
    }
}

export class Lambda {
    FunctionArn!: Value<string>
    Payload?: Payload

    constructor(properties: Lambda) {
        Object.assign(this, properties)
    }
}

export class AssetPropertyVariant {
    BooleanValue?: Value<string>
    DoubleValue?: Value<string>
    IntegerValue?: Value<string>
    StringValue?: Value<string>

    constructor(properties: AssetPropertyVariant) {
        Object.assign(this, properties)
    }
}

export class IotSiteWise {
    AssetId?: Value<string>
    EntryId?: Value<string>
    PropertyAlias?: Value<string>
    PropertyId?: Value<string>
    PropertyValue?: AssetPropertyValue

    constructor(properties: IotSiteWise) {
        Object.assign(this, properties)
    }
}

export class AlarmEventActions {
    AlarmActions?: List<AlarmAction>

    constructor(properties: AlarmEventActions) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    AlarmModelName?: Value<string>
    AlarmModelDescription?: Value<string>
    RoleArn: Value<string>
    Key?: Value<string>
    Severity?: Value<number>
    AlarmRule: AlarmRule
    AlarmEventActions?: AlarmEventActions
    AlarmCapabilities?: AlarmCapabilities
    Tags?: List<ResourceTag>
}

class AlarmModel extends ResourceBase<Properties> {
    static AlarmRule = AlarmRule
    static DynamoDBv2 = DynamoDBv2
    static AssetPropertyTimestamp = AssetPropertyTimestamp
    static IotTopicPublish = IotTopicPublish
    static AssetPropertyValue = AssetPropertyValue
    static IotEvents = IotEvents
    static Payload = Payload
    static InitializationConfiguration = InitializationConfiguration
    static Sns = Sns
    static AlarmCapabilities = AlarmCapabilities
    static Sqs = Sqs
    static AlarmAction = AlarmAction
    static Firehose = Firehose
    static SimpleRule = SimpleRule
    static AcknowledgeFlow = AcknowledgeFlow
    static DynamoDB = DynamoDB
    static Lambda = Lambda
    static AssetPropertyVariant = AssetPropertyVariant
    static IotSiteWise = IotSiteWise
    static AlarmEventActions = AlarmEventActions

    constructor(properties: Properties) {
        super('AWS::IoTEvents::AlarmModel', properties)
    }
}
export { AlarmModel as R }
