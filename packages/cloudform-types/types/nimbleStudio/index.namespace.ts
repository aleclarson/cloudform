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

import * as _0 from './streamingImage'
import * as _1 from './launchProfile'
import * as _2 from './studioComponent'
import * as _3 from './studio'

export namespace NimbleStudio {
  export const StreamingImage = _0.R
  export const LaunchProfile = _1.R
  export const StudioComponent = _2.R
  export const Studio = _3.R

  export type StreamingImage = _0.R
  export type LaunchProfile = _1.R
  export type StudioComponent = _2.R
  export type Studio = _3.R

  export namespace LaunchProfile {
    export type StreamingSessionStorageRoot = _1.StreamingSessionStorageRoot
    export type StreamConfiguration = _1.StreamConfiguration
    export type StreamConfigurationSessionStorage = _1.StreamConfigurationSessionStorage
  }
  export namespace StudioComponent {
    export type LicenseServiceConfiguration = _2.LicenseServiceConfiguration
    export type ScriptParameterKeyValue = _2.ScriptParameterKeyValue
    export type ActiveDirectoryConfiguration = _2.ActiveDirectoryConfiguration
    export type ActiveDirectoryComputerAttribute = _2.ActiveDirectoryComputerAttribute
    export type StudioComponentConfiguration = _2.StudioComponentConfiguration
    export type StudioComponentInitializationScript = _2.StudioComponentInitializationScript
    export type ComputeFarmConfiguration = _2.ComputeFarmConfiguration
    export type SharedFileSystemConfiguration = _2.SharedFileSystemConfiguration
  }
  export namespace Studio {
    export type StudioEncryptionConfiguration = _3.StudioEncryptionConfiguration
  }
}
