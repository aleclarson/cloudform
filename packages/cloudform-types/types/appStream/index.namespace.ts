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

import * as _0 from './stack'
import * as _1 from './user'
import * as _2 from './stackUserAssociation'
import * as _3 from './appBlock'
import * as _4 from './applicationFleetAssociation'
import * as _5 from './applicationEntitlementAssociation'
import * as _6 from './application'
import * as _7 from './fleet'
import * as _8 from './imageBuilder'
import * as _9 from './directoryConfig'
import * as _a from './entitlement'
import * as _b from './stackFleetAssociation'

export namespace AppStream {
  export const Stack = _0.R
  export const User = _1.R
  export const StackUserAssociation = _2.R
  export const AppBlock = _3.R
  export const ApplicationFleetAssociation = _4.R
  export const ApplicationEntitlementAssociation = _5.R
  export const Application = _6.R
  export const Fleet = _7.R
  export const ImageBuilder = _8.R
  export const DirectoryConfig = _9.R
  export const Entitlement = _a.R
  export const StackFleetAssociation = _b.R

  export type Stack = _0.R
  export type User = _1.R
  export type StackUserAssociation = _2.R
  export type AppBlock = _3.R
  export type ApplicationFleetAssociation = _4.R
  export type ApplicationEntitlementAssociation = _5.R
  export type Application = _6.R
  export type Fleet = _7.R
  export type ImageBuilder = _8.R
  export type DirectoryConfig = _9.R
  export type Entitlement = _a.R
  export type StackFleetAssociation = _b.R

  export namespace Stack {
    export type AccessEndpoint = _0.AccessEndpoint
    export type StreamingExperienceSettings = _0.StreamingExperienceSettings
    export type UserSetting = _0.UserSetting
    export type ApplicationSettings = _0.ApplicationSettings
    export type StorageConnector = _0.StorageConnector
  }
  export namespace AppBlock {
    export type S3Location = _3.S3Location
    export type ScriptDetails = _3.ScriptDetails
  }
  export namespace Application {
    export type S3Location = _6.S3Location
  }
  export namespace Fleet {
    export type DomainJoinInfo = _7.DomainJoinInfo
    export type S3Location = _7.S3Location
    export type VpcConfig = _7.VpcConfig
    export type ComputeCapacity = _7.ComputeCapacity
  }
  export namespace ImageBuilder {
    export type VpcConfig = _8.VpcConfig
    export type AccessEndpoint = _8.AccessEndpoint
    export type DomainJoinInfo = _8.DomainJoinInfo
  }
  export namespace DirectoryConfig {
    export type ServiceAccountCredentials = _9.ServiceAccountCredentials
  }
  export namespace Entitlement {
    export type Attribute = _a.Attribute
  }
}
