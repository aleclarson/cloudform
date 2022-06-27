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

import * as _0 from './layerVersion'
import * as _1 from './alias'
import * as _2 from './layerVersionPermission'
import * as _3 from './url'
import * as _4 from './eventInvokeConfig'
import * as _5 from './function'
import * as _6 from './permission'
import * as _7 from './eventSourceMapping'
import * as _8 from './version'
import * as _9 from './codeSigningConfig'

export namespace Lambda {
  export const LayerVersion = _0.R
  export const Alias = _1.R
  export const LayerVersionPermission = _2.R
  export const Url = _3.R
  export const EventInvokeConfig = _4.R
  export const Function = _5.R
  export const Permission = _6.R
  export const EventSourceMapping = _7.R
  export const Version = _8.R
  export const CodeSigningConfig = _9.R

  export type LayerVersion = _0.R
  export type Alias = _1.R
  export type LayerVersionPermission = _2.R
  export type Url = _3.R
  export type EventInvokeConfig = _4.R
  export type Function = _5.R
  export type Permission = _6.R
  export type EventSourceMapping = _7.R
  export type Version = _8.R
  export type CodeSigningConfig = _9.R

  export namespace LayerVersion {
    export type Content = _0.Content
  }
  export namespace Alias {
    export type ProvisionedConcurrencyConfiguration = _1.ProvisionedConcurrencyConfiguration
    export type AliasRoutingConfiguration = _1.AliasRoutingConfiguration
    export type VersionWeight = _1.VersionWeight
  }
  export namespace Url {
    export type Cors = _3.Cors
  }
  export namespace EventInvokeConfig {
    export type OnFailure = _4.OnFailure
    export type OnSuccess = _4.OnSuccess
    export type DestinationConfig = _4.DestinationConfig
  }
  export namespace Function {
    export type VpcConfig = _5.VpcConfig
    export type DeadLetterConfig = _5.DeadLetterConfig
    export type FileSystemConfig = _5.FileSystemConfig
    export type Code = _5.Code
    export type EphemeralStorage = _5.EphemeralStorage
    export type TracingConfig = _5.TracingConfig
    export type Environment = _5.Environment
    export type ImageConfig = _5.ImageConfig
  }
  export namespace EventSourceMapping {
    export type SelfManagedEventSource = _7.SelfManagedEventSource
    export type Filter = _7.Filter
    export type FilterCriteria = _7.FilterCriteria
    export type OnFailure = _7.OnFailure
    export type SourceAccessConfiguration = _7.SourceAccessConfiguration
    export type Endpoints = _7.Endpoints
    export type DestinationConfig = _7.DestinationConfig
  }
  export namespace Version {
    export type ProvisionedConcurrencyConfiguration = _8.ProvisionedConcurrencyConfiguration
  }
  export namespace CodeSigningConfig {
    export type CodeSigningPolicies = _9.CodeSigningPolicies
    export type AllowedPublishers = _9.AllowedPublishers
  }
}
