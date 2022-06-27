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

import * as _0 from './userProfile'
import * as _1 from './volume'
import * as _2 from './app'
import * as _3 from './elasticLoadBalancerAttachment'
import * as _4 from './instance'
import * as _5 from './layer'
import * as _6 from './stack'

export namespace OpsWorks {
  export const UserProfile = _0.R
  export const Volume = _1.R
  export const App = _2.R
  export const ElasticLoadBalancerAttachment = _3.R
  export const Instance = _4.R
  export const Layer = _5.R
  export const Stack = _6.R

  export type UserProfile = _0.R
  export type Volume = _1.R
  export type App = _2.R
  export type ElasticLoadBalancerAttachment = _3.R
  export type Instance = _4.R
  export type Layer = _5.R
  export type Stack = _6.R

  export namespace App {
    export type DataSource = _2.DataSource
    export type SslConfiguration = _2.SslConfiguration
    export type EnvironmentVariable = _2.EnvironmentVariable
    export type Source = _2.Source
  }
  export namespace Instance {
    export type BlockDeviceMapping = _4.BlockDeviceMapping
    export type TimeBasedAutoScaling = _4.TimeBasedAutoScaling
    export type EbsBlockDevice = _4.EbsBlockDevice
  }
  export namespace Layer {
    export type ShutdownEventConfiguration = _5.ShutdownEventConfiguration
    export type VolumeConfiguration = _5.VolumeConfiguration
    export type Recipes = _5.Recipes
    export type LifecycleEventConfiguration = _5.LifecycleEventConfiguration
    export type LoadBasedAutoScaling = _5.LoadBasedAutoScaling
    export type AutoScalingThresholds = _5.AutoScalingThresholds
  }
  export namespace Stack {
    export type StackConfigurationManager = _6.StackConfigurationManager
    export type RdsDbInstance = _6.RdsDbInstance
    export type Source = _6.Source
    export type ChefConfiguration = _6.ChefConfiguration
    export type ElasticIp = _6.ElasticIp
  }
}
