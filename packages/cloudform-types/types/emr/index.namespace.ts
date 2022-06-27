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

import * as _0 from './instanceGroupConfig'
import * as _1 from './securityConfiguration'
import * as _2 from './cluster'
import * as _3 from './studioSessionMapping'
import * as _4 from './instanceFleetConfig'
import * as _5 from './step'
import * as _6 from './studio'

export namespace EMR {
  export const InstanceGroupConfig = _0.R
  export const SecurityConfiguration = _1.R
  export const Cluster = _2.R
  export const StudioSessionMapping = _3.R
  export const InstanceFleetConfig = _4.R
  export const Step = _5.R
  export const Studio = _6.R

  export type InstanceGroupConfig = _0.R
  export type SecurityConfiguration = _1.R
  export type Cluster = _2.R
  export type StudioSessionMapping = _3.R
  export type InstanceFleetConfig = _4.R
  export type Step = _5.R
  export type Studio = _6.R

  export namespace InstanceGroupConfig {
    export type AutoScalingPolicy = _0.AutoScalingPolicy
    export type Configuration = _0.Configuration
    export type MetricDimension = _0.MetricDimension
    export type SimpleScalingPolicyConfiguration = _0.SimpleScalingPolicyConfiguration
    export type ScalingRule = _0.ScalingRule
    export type CloudWatchAlarmDefinition = _0.CloudWatchAlarmDefinition
    export type EbsBlockDeviceConfig = _0.EbsBlockDeviceConfig
    export type ScalingAction = _0.ScalingAction
    export type ScalingTrigger = _0.ScalingTrigger
    export type VolumeSpecification = _0.VolumeSpecification
    export type EbsConfiguration = _0.EbsConfiguration
    export type ScalingConstraints = _0.ScalingConstraints
  }
  export namespace Cluster {
    export type ComputeLimits = _2.ComputeLimits
    export type SpotProvisioningSpecification = _2.SpotProvisioningSpecification
    export type BootstrapActionConfig = _2.BootstrapActionConfig
    export type StepConfig = _2.StepConfig
    export type EbsBlockDeviceConfig = _2.EbsBlockDeviceConfig
    export type ManagedScalingPolicy = _2.ManagedScalingPolicy
    export type CloudWatchAlarmDefinition = _2.CloudWatchAlarmDefinition
    export type KeyValue = _2.KeyValue
    export type VolumeSpecification = _2.VolumeSpecification
    export type InstanceFleetProvisioningSpecifications = _2.InstanceFleetProvisioningSpecifications
    export type InstanceGroupConfig = _2.InstanceGroupConfig
    export type KerberosAttributes = _2.KerberosAttributes
    export type Application = _2.Application
    export type Configuration = _2.Configuration
    export type ScriptBootstrapActionConfig = _2.ScriptBootstrapActionConfig
    export type EbsConfiguration = _2.EbsConfiguration
    export type InstanceTypeConfig = _2.InstanceTypeConfig
    export type MetricDimension = _2.MetricDimension
    export type OnDemandProvisioningSpecification = _2.OnDemandProvisioningSpecification
    export type ScalingTrigger = _2.ScalingTrigger
    export type InstanceFleetConfig = _2.InstanceFleetConfig
    export type JobFlowInstancesConfig = _2.JobFlowInstancesConfig
    export type AutoTerminationPolicy = _2.AutoTerminationPolicy
    export type ScalingConstraints = _2.ScalingConstraints
    export type ScalingAction = _2.ScalingAction
    export type SimpleScalingPolicyConfiguration = _2.SimpleScalingPolicyConfiguration
    export type PlacementType = _2.PlacementType
    export type ScalingRule = _2.ScalingRule
    export type AutoScalingPolicy = _2.AutoScalingPolicy
    export type HadoopJarStepConfig = _2.HadoopJarStepConfig
  }
  export namespace InstanceFleetConfig {
    export type Configuration = _4.Configuration
    export type InstanceTypeConfig = _4.InstanceTypeConfig
    export type SpotProvisioningSpecification = _4.SpotProvisioningSpecification
    export type EbsConfiguration = _4.EbsConfiguration
    export type OnDemandProvisioningSpecification = _4.OnDemandProvisioningSpecification
    export type VolumeSpecification = _4.VolumeSpecification
    export type InstanceFleetProvisioningSpecifications = _4.InstanceFleetProvisioningSpecifications
    export type EbsBlockDeviceConfig = _4.EbsBlockDeviceConfig
  }
  export namespace Step {
    export type HadoopJarStepConfig = _5.HadoopJarStepConfig
    export type KeyValue = _5.KeyValue
  }
}
