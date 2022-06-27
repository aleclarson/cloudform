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

import * as _0 from './scalingPolicy'
import * as _1 from './autoScalingGroup'
import * as _2 from './scheduledAction'
import * as _3 from './launchConfiguration'
import * as _4 from './lifecycleHook'
import * as _5 from './warmPool'

export namespace AutoScaling {
  export const ScalingPolicy = _0.R
  export const AutoScalingGroup = _1.R
  export const ScheduledAction = _2.R
  export const LaunchConfiguration = _3.R
  export const LifecycleHook = _4.R
  export const WarmPool = _5.R

  export type ScalingPolicy = _0.R
  export type AutoScalingGroup = _1.R
  export type ScheduledAction = _2.R
  export type LaunchConfiguration = _3.R
  export type LifecycleHook = _4.R
  export type WarmPool = _5.R

  export namespace ScalingPolicy {
    export type PredictiveScalingConfiguration = _0.PredictiveScalingConfiguration
    export type CustomizedMetricSpecification = _0.CustomizedMetricSpecification
    export type PredictiveScalingPredefinedMetricPair = _0.PredictiveScalingPredefinedMetricPair
    export type MetricDimension = _0.MetricDimension
    export type TargetTrackingConfiguration = _0.TargetTrackingConfiguration
    export type PredictiveScalingCustomizedScalingMetric = _0.PredictiveScalingCustomizedScalingMetric
    export type PredictiveScalingCustomizedCapacityMetric = _0.PredictiveScalingCustomizedCapacityMetric
    export type MetricStat = _0.MetricStat
    export type MetricDataQuery = _0.MetricDataQuery
    export type StepAdjustment = _0.StepAdjustment
    export type PredictiveScalingCustomizedLoadMetric = _0.PredictiveScalingCustomizedLoadMetric
    export type PredictiveScalingPredefinedLoadMetric = _0.PredictiveScalingPredefinedLoadMetric
    export type PredefinedMetricSpecification = _0.PredefinedMetricSpecification
    export type PredictiveScalingPredefinedScalingMetric = _0.PredictiveScalingPredefinedScalingMetric
    export type PredictiveScalingMetricSpecification = _0.PredictiveScalingMetricSpecification
    export type Metric = _0.Metric
  }
  export namespace AutoScalingGroup {
    export type LaunchTemplateOverrides = _1.LaunchTemplateOverrides
    export type AcceleratorTotalMemoryMiBRequest = _1.AcceleratorTotalMemoryMiBRequest
    export type BaselineEbsBandwidthMbpsRequest = _1.BaselineEbsBandwidthMbpsRequest
    export type VCpuCountRequest = _1.VCpuCountRequest
    export type AcceleratorCountRequest = _1.AcceleratorCountRequest
    export type MetricsCollection = _1.MetricsCollection
    export type InstancesDistribution = _1.InstancesDistribution
    export type TotalLocalStorageGBRequest = _1.TotalLocalStorageGBRequest
    export type LifecycleHookSpecification = _1.LifecycleHookSpecification
    export type LaunchTemplateSpecification = _1.LaunchTemplateSpecification
    export type InstanceRequirements = _1.InstanceRequirements
    export type NetworkInterfaceCountRequest = _1.NetworkInterfaceCountRequest
    export type MixedInstancesPolicy = _1.MixedInstancesPolicy
    export type NotificationConfiguration = _1.NotificationConfiguration
    export type LaunchTemplate = _1.LaunchTemplate
    export type TagProperty = _1.TagProperty
    export type MemoryGiBPerVCpuRequest = _1.MemoryGiBPerVCpuRequest
    export type MemoryMiBRequest = _1.MemoryMiBRequest
  }
  export namespace LaunchConfiguration {
    export type BlockDeviceMapping = _3.BlockDeviceMapping
    export type MetadataOptions = _3.MetadataOptions
    export type BlockDevice = _3.BlockDevice
  }
  export namespace WarmPool {
    export type InstanceReusePolicy = _5.InstanceReusePolicy
  }
}
