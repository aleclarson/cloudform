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

export class SetTimer {
    DurationExpression?: Value<string>
    Seconds?: Value<number>
    TimerName!: Value<string>

    constructor(properties: SetTimer) {
        Object.assign(this, properties)
    }
}

export class ResetTimer {
    TimerName!: Value<string>

    constructor(properties: ResetTimer) {
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

export class TransitionEvent {
    Actions?: List<Action>
    Condition!: Value<string>
    EventName!: Value<string>
    NextState!: Value<string>

    constructor(properties: TransitionEvent) {
        Object.assign(this, properties)
    }
}

export class IotSiteWise {
    AssetId?: Value<string>
    EntryId?: Value<string>
    PropertyAlias?: Value<string>
    PropertyId?: Value<string>
    PropertyValue!: AssetPropertyValue

    constructor(properties: IotSiteWise) {
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

export class Firehose {
    DeliveryStreamName!: Value<string>
    Payload?: Payload
    Separator?: Value<string>

    constructor(properties: Firehose) {
        Object.assign(this, properties)
    }
}

export class ClearTimer {
    TimerName!: Value<string>

    constructor(properties: ClearTimer) {
        Object.assign(this, properties)
    }
}

export class State {
    OnEnter?: OnEnter
    OnExit?: OnExit
    OnInput?: OnInput
    StateName!: Value<string>

    constructor(properties: State) {
        Object.assign(this, properties)
    }
}

export class Event {
    Actions?: List<Action>
    Condition?: Value<string>
    EventName!: Value<string>

    constructor(properties: Event) {
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

export class OnExit {
    Events?: List<Event>

    constructor(properties: OnExit) {
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

export class DetectorModelDefinition {
    InitialStateName!: Value<string>
    States!: List<State>

    constructor(properties: DetectorModelDefinition) {
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

export class Action {
    ClearTimer?: ClearTimer
    DynamoDB?: DynamoDB
    DynamoDBv2?: DynamoDBv2
    Firehose?: Firehose
    IotEvents?: IotEvents
    IotSiteWise?: IotSiteWise
    IotTopicPublish?: IotTopicPublish
    Lambda?: Lambda
    ResetTimer?: ResetTimer
    SetTimer?: SetTimer
    SetVariable?: SetVariable
    Sns?: Sns
    Sqs?: Sqs

    constructor(properties: Action) {
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

export class DynamoDBv2 {
    Payload?: Payload
    TableName!: Value<string>

    constructor(properties: DynamoDBv2) {
        Object.assign(this, properties)
    }
}

export class OnInput {
    Events?: List<Event>
    TransitionEvents?: List<TransitionEvent>

    constructor(properties: OnInput) {
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

export class SetVariable {
    Value!: Value<string>
    VariableName!: Value<string>

    constructor(properties: SetVariable) {
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

export class OnEnter {
    Events?: List<Event>

    constructor(properties: OnEnter) {
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

export class Lambda {
    FunctionArn!: Value<string>
    Payload?: Payload

    constructor(properties: Lambda) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    DetectorModelDefinition: DetectorModelDefinition
    DetectorModelDescription?: Value<string>
    DetectorModelName?: Value<string>
    EvaluationMethod?: Value<string>
    Key?: Value<string>
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
}

class DetectorModel extends ResourceBase<Properties> {
    static SetTimer = SetTimer
    static ResetTimer = ResetTimer
    static IotEvents = IotEvents
    static TransitionEvent = TransitionEvent
    static IotSiteWise = IotSiteWise
    static DynamoDB = DynamoDB
    static Firehose = Firehose
    static ClearTimer = ClearTimer
    static State = State
    static Event = Event
    static Sns = Sns
    static OnExit = OnExit
    static Sqs = Sqs
    static DetectorModelDefinition = DetectorModelDefinition
    static IotTopicPublish = IotTopicPublish
    static Action = Action
    static AssetPropertyTimestamp = AssetPropertyTimestamp
    static DynamoDBv2 = DynamoDBv2
    static OnInput = OnInput
    static AssetPropertyVariant = AssetPropertyVariant
    static SetVariable = SetVariable
    static Payload = Payload
    static OnEnter = OnEnter
    static AssetPropertyValue = AssetPropertyValue
    static Lambda = Lambda

    constructor(properties: Properties) {
        super('AWS::IoTEvents::DetectorModel', properties)
    }
}
export { DetectorModel as R }
