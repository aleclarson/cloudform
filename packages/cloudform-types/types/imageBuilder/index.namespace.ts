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

import * as _0 from './component'
import * as _1 from './imagePipeline'
import * as _2 from './containerRecipe'
import * as _3 from './imageRecipe'
import * as _4 from './infrastructureConfiguration'
import * as _5 from './distributionConfiguration'
import * as _6 from './image'

export namespace ImageBuilder {
  export const Component = _0.R
  export const ImagePipeline = _1.R
  export const ContainerRecipe = _2.R
  export const ImageRecipe = _3.R
  export const InfrastructureConfiguration = _4.R
  export const DistributionConfiguration = _5.R
  export const Image = _6.R

  export type Component = _0.R
  export type ImagePipeline = _1.R
  export type ContainerRecipe = _2.R
  export type ImageRecipe = _3.R
  export type InfrastructureConfiguration = _4.R
  export type DistributionConfiguration = _5.R
  export type Image = _6.R

  export namespace ImagePipeline {
    export type ImageTestsConfiguration = _1.ImageTestsConfiguration
    export type Schedule = _1.Schedule
  }
  export namespace ContainerRecipe {
    export type ComponentConfiguration = _2.ComponentConfiguration
    export type EbsInstanceBlockDeviceSpecification = _2.EbsInstanceBlockDeviceSpecification
    export type InstanceBlockDeviceMapping = _2.InstanceBlockDeviceMapping
    export type InstanceConfiguration = _2.InstanceConfiguration
    export type TargetContainerRepository = _2.TargetContainerRepository
  }
  export namespace ImageRecipe {
    export type InstanceBlockDeviceMapping = _3.InstanceBlockDeviceMapping
    export type SystemsManagerAgent = _3.SystemsManagerAgent
    export type ComponentConfiguration = _3.ComponentConfiguration
    export type ComponentParameter = _3.ComponentParameter
    export type AdditionalInstanceConfiguration = _3.AdditionalInstanceConfiguration
    export type EbsInstanceBlockDeviceSpecification = _3.EbsInstanceBlockDeviceSpecification
  }
  export namespace InfrastructureConfiguration {
    export type Logging = _4.Logging
    export type S3Logs = _4.S3Logs
    export type InstanceMetadataOptions = _4.InstanceMetadataOptions
  }
  export namespace DistributionConfiguration {
    export type FastLaunchSnapshotConfiguration = _5.FastLaunchSnapshotConfiguration
    export type TargetContainerRepository = _5.TargetContainerRepository
    export type AmiDistributionConfiguration = _5.AmiDistributionConfiguration
    export type Distribution = _5.Distribution
    export type FastLaunchLaunchTemplateSpecification = _5.FastLaunchLaunchTemplateSpecification
    export type ContainerDistributionConfiguration = _5.ContainerDistributionConfiguration
    export type LaunchTemplateConfiguration = _5.LaunchTemplateConfiguration
    export type FastLaunchConfiguration = _5.FastLaunchConfiguration
    export type LaunchPermissionConfiguration = _5.LaunchPermissionConfiguration
  }
  export namespace Image {
    export type ImageTestsConfiguration = _6.ImageTestsConfiguration
  }
}
