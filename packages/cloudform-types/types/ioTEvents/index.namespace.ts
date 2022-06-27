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

import * as _0 from './input'
import * as _1 from './alarmModel'
import * as _2 from './detectorModel'

export namespace IoTEvents {
  export const Input = _0.R
  export const AlarmModel = _1.R
  export const DetectorModel = _2.R

  export type Input = _0.R
  export type AlarmModel = _1.R
  export type DetectorModel = _2.R

  export namespace Input {
    export type Attribute = _0.Attribute
    export type InputDefinition = _0.InputDefinition
  }
  export namespace AlarmModel {
    export type AlarmRule = _1.AlarmRule
    export type DynamoDBv2 = _1.DynamoDBv2
    export type AssetPropertyTimestamp = _1.AssetPropertyTimestamp
    export type IotTopicPublish = _1.IotTopicPublish
    export type AssetPropertyValue = _1.AssetPropertyValue
    export type IotEvents = _1.IotEvents
    export type Payload = _1.Payload
    export type InitializationConfiguration = _1.InitializationConfiguration
    export type Sns = _1.Sns
    export type AlarmCapabilities = _1.AlarmCapabilities
    export type Sqs = _1.Sqs
    export type AlarmAction = _1.AlarmAction
    export type Firehose = _1.Firehose
    export type SimpleRule = _1.SimpleRule
    export type AcknowledgeFlow = _1.AcknowledgeFlow
    export type DynamoDB = _1.DynamoDB
    export type Lambda = _1.Lambda
    export type AssetPropertyVariant = _1.AssetPropertyVariant
    export type IotSiteWise = _1.IotSiteWise
    export type AlarmEventActions = _1.AlarmEventActions
  }
  export namespace DetectorModel {
    export type SetTimer = _2.SetTimer
    export type ResetTimer = _2.ResetTimer
    export type IotEvents = _2.IotEvents
    export type TransitionEvent = _2.TransitionEvent
    export type IotSiteWise = _2.IotSiteWise
    export type DynamoDB = _2.DynamoDB
    export type Firehose = _2.Firehose
    export type ClearTimer = _2.ClearTimer
    export type State = _2.State
    export type Event = _2.Event
    export type Sns = _2.Sns
    export type OnExit = _2.OnExit
    export type Sqs = _2.Sqs
    export type DetectorModelDefinition = _2.DetectorModelDefinition
    export type IotTopicPublish = _2.IotTopicPublish
    export type Action = _2.Action
    export type AssetPropertyTimestamp = _2.AssetPropertyTimestamp
    export type DynamoDBv2 = _2.DynamoDBv2
    export type OnInput = _2.OnInput
    export type AssetPropertyVariant = _2.AssetPropertyVariant
    export type SetVariable = _2.SetVariable
    export type Payload = _2.Payload
    export type OnEnter = _2.OnEnter
    export type AssetPropertyValue = _2.AssetPropertyValue
    export type Lambda = _2.Lambda
  }
}
