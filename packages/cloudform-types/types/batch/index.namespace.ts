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

import * as _0 from './jobQueue'
import * as _1 from './jobDefinition'
import * as _2 from './schedulingPolicy'
import * as _3 from './computeEnvironment'

export namespace Batch {
  export const JobQueue = _0.R
  export const JobDefinition = _1.R
  export const SchedulingPolicy = _2.R
  export const ComputeEnvironment = _3.R

  export type JobQueue = _0.R
  export type JobDefinition = _1.R
  export type SchedulingPolicy = _2.R
  export type ComputeEnvironment = _3.R

  export namespace JobQueue {
    export type ComputeEnvironmentOrder = _0.ComputeEnvironmentOrder
  }
  export namespace JobDefinition {
    export type Volumes = _1.Volumes
    export type AuthorizationConfig = _1.AuthorizationConfig
    export type ResourceRequirement = _1.ResourceRequirement
    export type Environment = _1.Environment
    export type VolumesHost = _1.VolumesHost
    export type NodeProperties = _1.NodeProperties
    export type RetryStrategy = _1.RetryStrategy
    export type Secret = _1.Secret
    export type NetworkConfiguration = _1.NetworkConfiguration
    export type LogConfiguration = _1.LogConfiguration
    export type ContainerProperties = _1.ContainerProperties
    export type MountPoints = _1.MountPoints
    export type EvaluateOnExit = _1.EvaluateOnExit
    export type Ulimit = _1.Ulimit
    export type LinuxParameters = _1.LinuxParameters
    export type FargatePlatformConfiguration = _1.FargatePlatformConfiguration
    export type Timeout = _1.Timeout
    export type Tmpfs = _1.Tmpfs
    export type NodeRangeProperty = _1.NodeRangeProperty
    export type EfsVolumeConfiguration = _1.EfsVolumeConfiguration
    export type Device = _1.Device
  }
  export namespace SchedulingPolicy {
    export type FairsharePolicy = _2.FairsharePolicy
    export type ShareAttributes = _2.ShareAttributes
  }
  export namespace ComputeEnvironment {
    export type ComputeResources = _3.ComputeResources
    export type LaunchTemplateSpecification = _3.LaunchTemplateSpecification
    export type UpdatePolicy = _3.UpdatePolicy
    export type Ec2ConfigurationObject = _3.Ec2ConfigurationObject
  }
}
