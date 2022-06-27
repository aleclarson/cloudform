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

import * as _0 from './nodegroup'
import * as _1 from './cluster'
import * as _2 from './fargateProfile'
import * as _3 from './addon'
import * as _4 from './identityProviderConfig'

export namespace EKS {
  export const Nodegroup = _0.R
  export const Cluster = _1.R
  export const FargateProfile = _2.R
  export const Addon = _3.R
  export const IdentityProviderConfig = _4.R

  export type Nodegroup = _0.R
  export type Cluster = _1.R
  export type FargateProfile = _2.R
  export type Addon = _3.R
  export type IdentityProviderConfig = _4.R

  export namespace Nodegroup {
    export type Taint = _0.Taint
    export type LaunchTemplateSpecification = _0.LaunchTemplateSpecification
    export type UpdateConfig = _0.UpdateConfig
    export type ScalingConfig = _0.ScalingConfig
    export type RemoteAccess = _0.RemoteAccess
  }
  export namespace Cluster {
    export type Provider = _1.Provider
    export type ClusterLogging = _1.ClusterLogging
    export type EncryptionConfig = _1.EncryptionConfig
    export type KubernetesNetworkConfig = _1.KubernetesNetworkConfig
    export type Logging = _1.Logging
    export type LoggingTypeConfig = _1.LoggingTypeConfig
    export type ResourcesVpcConfig = _1.ResourcesVpcConfig
  }
  export namespace FargateProfile {
    export type Label = _2.Label
    export type Selector = _2.Selector
  }
  export namespace IdentityProviderConfig {
    export type OidcIdentityProviderConfig = _4.OidcIdentityProviderConfig
    export type RequiredClaim = _4.RequiredClaim
  }
}
