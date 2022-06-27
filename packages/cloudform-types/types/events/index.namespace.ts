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

import * as _0 from './endpoint'
import * as _1 from './apiDestination'
import * as _2 from './rule'
import * as _3 from './archive'
import * as _4 from './connection'
import * as _5 from './eventBusPolicy'
import * as _6 from './eventBus'

export namespace Events {
  export const Endpoint = _0.R
  export const ApiDestination = _1.R
  export const Rule = _2.R
  export const Archive = _3.R
  export const Connection = _4.R
  export const EventBusPolicy = _5.R
  export const EventBus = _6.R

  export type Endpoint = _0.R
  export type ApiDestination = _1.R
  export type Rule = _2.R
  export type Archive = _3.R
  export type Connection = _4.R
  export type EventBusPolicy = _5.R
  export type EventBus = _6.R

  export namespace Endpoint {
    export type Secondary = _0.Secondary
    export type ReplicationConfig = _0.ReplicationConfig
    export type EndpointEventBus = _0.EndpointEventBus
    export type RoutingConfig = _0.RoutingConfig
    export type FailoverConfig = _0.FailoverConfig
    export type Primary = _0.Primary
  }
  export namespace Rule {
    export type SageMakerPipelineParameter = _2.SageMakerPipelineParameter
    export type BatchRetryStrategy = _2.BatchRetryStrategy
    export type PlacementConstraint = _2.PlacementConstraint
    export type HttpParameters = _2.HttpParameters
    export type BatchArrayProperties = _2.BatchArrayProperties
    export type BatchParameters = _2.BatchParameters
    export type RunCommandParameters = _2.RunCommandParameters
    export type DeadLetterConfig = _2.DeadLetterConfig
    export type NetworkConfiguration = _2.NetworkConfiguration
    export type RunCommandTarget = _2.RunCommandTarget
    export type CapacityProviderStrategyItem = _2.CapacityProviderStrategyItem
    export type InputTransformer = _2.InputTransformer
    export type SqsParameters = _2.SqsParameters
    export type RetryPolicy = _2.RetryPolicy
    export type PlacementStrategy = _2.PlacementStrategy
    export type Target = _2.Target
    export type KinesisParameters = _2.KinesisParameters
    export type SageMakerPipelineParameters = _2.SageMakerPipelineParameters
    export type Tag = _2.Tag
    export type RedshiftDataParameters = _2.RedshiftDataParameters
    export type EcsParameters = _2.EcsParameters
    export type AwsVpcConfiguration = _2.AwsVpcConfiguration
  }
  export namespace Connection {
    export type ConnectionHttpParameters = _4.ConnectionHttpParameters
    export type ApiKeyAuthParameters = _4.ApiKeyAuthParameters
    export type AuthParameters = _4.AuthParameters
    export type BasicAuthParameters = _4.BasicAuthParameters
    export type Parameter = _4.Parameter
    export type OAuthParameters = _4.OAuthParameters
    export type ClientParameters = _4.ClientParameters
  }
  export namespace EventBusPolicy {
    export type Condition = _5.Condition
  }
  export namespace EventBus {
    export type TagEntry = _6.TagEntry
  }
}
