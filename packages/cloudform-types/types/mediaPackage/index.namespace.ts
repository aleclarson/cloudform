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

import * as _0 from './channel'
import * as _1 from './packagingConfiguration'
import * as _2 from './asset'
import * as _3 from './packagingGroup'
import * as _4 from './originEndpoint'

export namespace MediaPackage {
  export const Channel = _0.R
  export const PackagingConfiguration = _1.R
  export const Asset = _2.R
  export const PackagingGroup = _3.R
  export const OriginEndpoint = _4.R

  export type Channel = _0.R
  export type PackagingConfiguration = _1.R
  export type Asset = _2.R
  export type PackagingGroup = _3.R
  export type OriginEndpoint = _4.R

  export namespace Channel {
    export type LogConfiguration = _0.LogConfiguration
  }
  export namespace PackagingConfiguration {
    export type DashEncryption = _1.DashEncryption
    export type SpekeKeyProvider = _1.SpekeKeyProvider
    export type CmafPackage = _1.CmafPackage
    export type DashPackage = _1.DashPackage
    export type DashManifest = _1.DashManifest
    export type HlsEncryption = _1.HlsEncryption
    export type MssManifest = _1.MssManifest
    export type CmafEncryption = _1.CmafEncryption
    export type MssEncryption = _1.MssEncryption
    export type StreamSelection = _1.StreamSelection
    export type MssPackage = _1.MssPackage
    export type HlsPackage = _1.HlsPackage
    export type HlsManifest = _1.HlsManifest
  }
  export namespace Asset {
    export type EgressEndpoint = _2.EgressEndpoint
  }
  export namespace PackagingGroup {
    export type LogConfiguration = _3.LogConfiguration
    export type Authorization = _3.Authorization
  }
  export namespace OriginEndpoint {
    export type StreamSelection = _4.StreamSelection
    export type CmafPackage = _4.CmafPackage
    export type MssEncryption = _4.MssEncryption
    export type Authorization = _4.Authorization
    export type DashPackage = _4.DashPackage
    export type DashEncryption = _4.DashEncryption
    export type HlsManifest = _4.HlsManifest
    export type SpekeKeyProvider = _4.SpekeKeyProvider
    export type CmafEncryption = _4.CmafEncryption
    export type HlsEncryption = _4.HlsEncryption
    export type MssPackage = _4.MssPackage
    export type HlsPackage = _4.HlsPackage
    export type EncryptionContractConfiguration = _4.EncryptionContractConfiguration
  }
}
