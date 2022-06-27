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

import * as _0 from './vpcConnector'
import * as _1 from './observabilityConfiguration'
import * as _2 from './service'

export namespace AppRunner {
  export const VpcConnector = _0.R
  export const ObservabilityConfiguration = _1.R
  export const Service = _2.R

  export type VpcConnector = _0.R
  export type ObservabilityConfiguration = _1.R
  export type Service = _2.R

  export namespace ObservabilityConfiguration {
    export type TraceConfiguration = _1.TraceConfiguration
  }
  export namespace Service {
    export type ImageConfiguration = _2.ImageConfiguration
    export type InstanceConfiguration = _2.InstanceConfiguration
    export type AuthenticationConfiguration = _2.AuthenticationConfiguration
    export type KeyValuePair = _2.KeyValuePair
    export type EncryptionConfiguration = _2.EncryptionConfiguration
    export type HealthCheckConfiguration = _2.HealthCheckConfiguration
    export type CodeConfigurationValues = _2.CodeConfigurationValues
    export type ServiceObservabilityConfiguration = _2.ServiceObservabilityConfiguration
    export type SourceCodeVersion = _2.SourceCodeVersion
    export type ImageRepository = _2.ImageRepository
    export type NetworkConfiguration = _2.NetworkConfiguration
    export type EgressConfiguration = _2.EgressConfiguration
    export type SourceConfiguration = _2.SourceConfiguration
    export type CodeRepository = _2.CodeRepository
    export type CodeConfiguration = _2.CodeConfiguration
  }
}
