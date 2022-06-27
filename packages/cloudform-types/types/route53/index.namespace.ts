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

import * as _0 from './recordSet'
import * as _1 from './dnssec'
import * as _2 from './hostedZone'
import * as _3 from './recordSetGroup'
import * as _4 from './cidrCollection'
import * as _5 from './healthCheck'
import * as _6 from './keySigningKey'

export namespace Route53 {
  export const RecordSet = _0.R
  export const DNSSEC = _1.R
  export const HostedZone = _2.R
  export const RecordSetGroup = _3.R
  export const CidrCollection = _4.R
  export const HealthCheck = _5.R
  export const KeySigningKey = _6.R

  export type RecordSet = _0.R
  export type DNSSEC = _1.R
  export type HostedZone = _2.R
  export type RecordSetGroup = _3.R
  export type CidrCollection = _4.R
  export type HealthCheck = _5.R
  export type KeySigningKey = _6.R

  export namespace RecordSet {
    export type GeoLocation = _0.GeoLocation
    export type CidrRoutingConfig = _0.CidrRoutingConfig
    export type AliasTarget = _0.AliasTarget
  }
  export namespace HostedZone {
    export type HostedZoneTag = _2.HostedZoneTag
    export type HostedZoneConfig = _2.HostedZoneConfig
    export type QueryLoggingConfig = _2.QueryLoggingConfig
    export type VPC = _2.VPC
  }
  export namespace RecordSetGroup {
    export type GeoLocation = _3.GeoLocation
    export type RecordSet = _3.RecordSet
    export type CidrRoutingConfig = _3.CidrRoutingConfig
    export type AliasTarget = _3.AliasTarget
  }
  export namespace CidrCollection {
    export type Location = _4.Location
  }
  export namespace HealthCheck {
    export type HealthCheckTag = _5.HealthCheckTag
  }
}
