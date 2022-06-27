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

import * as _0 from './alias'
import * as _1 from './build'
import * as _2 from './script'
import * as _3 from './gameServerGroup'
import * as _4 from './fleet'
import * as _5 from './matchmakingConfiguration'
import * as _6 from './matchmakingRuleSet'
import * as _7 from './gameSessionQueue'

export namespace GameLift {
  export const Alias = _0.R
  export const Build = _1.R
  export const Script = _2.R
  export const GameServerGroup = _3.R
  export const Fleet = _4.R
  export const MatchmakingConfiguration = _5.R
  export const MatchmakingRuleSet = _6.R
  export const GameSessionQueue = _7.R

  export type Alias = _0.R
  export type Build = _1.R
  export type Script = _2.R
  export type GameServerGroup = _3.R
  export type Fleet = _4.R
  export type MatchmakingConfiguration = _5.R
  export type MatchmakingRuleSet = _6.R
  export type GameSessionQueue = _7.R

  export namespace Alias {
    export type RoutingStrategy = _0.RoutingStrategy
  }
  export namespace Build {
    export type S3Location = _1.S3Location
  }
  export namespace Script {
    export type S3Location = _2.S3Location
  }
  export namespace GameServerGroup {
    export type TargetTrackingConfiguration = _3.TargetTrackingConfiguration
    export type LaunchTemplate = _3.LaunchTemplate
    export type AutoScalingPolicy = _3.AutoScalingPolicy
    export type InstanceDefinition = _3.InstanceDefinition
  }
  export namespace Fleet {
    export type LocationCapacity = _4.LocationCapacity
    export type CertificateConfiguration = _4.CertificateConfiguration
    export type LocationConfiguration = _4.LocationConfiguration
    export type IpPermission = _4.IpPermission
    export type ServerProcess = _4.ServerProcess
    export type ResourceCreationLimitPolicy = _4.ResourceCreationLimitPolicy
    export type RuntimeConfiguration = _4.RuntimeConfiguration
  }
  export namespace MatchmakingConfiguration {
    export type GameProperty = _5.GameProperty
  }
  export namespace GameSessionQueue {
    export type PlayerLatencyPolicy = _7.PlayerLatencyPolicy
    export type Destination = _7.Destination
    export type FilterConfiguration = _7.FilterConfiguration
    export type PriorityConfiguration = _7.PriorityConfiguration
  }
}
