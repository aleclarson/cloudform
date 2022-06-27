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

import * as _0 from './service'
import * as _1 from './publicDnsNamespace'
import * as _2 from './instance'
import * as _3 from './httpNamespace'
import * as _4 from './privateDnsNamespace'

export namespace ServiceDiscovery {
  export const Service = _0.R
  export const PublicDnsNamespace = _1.R
  export const Instance = _2.R
  export const HttpNamespace = _3.R
  export const PrivateDnsNamespace = _4.R

  export type Service = _0.R
  export type PublicDnsNamespace = _1.R
  export type Instance = _2.R
  export type HttpNamespace = _3.R
  export type PrivateDnsNamespace = _4.R

  export namespace Service {
    export type DnsConfig = _0.DnsConfig
    export type HealthCheckConfig = _0.HealthCheckConfig
    export type HealthCheckCustomConfig = _0.HealthCheckCustomConfig
    export type DnsRecord = _0.DnsRecord
  }
  export namespace PublicDnsNamespace {
    export type Properties = _1.Properties
    export type PublicDnsPropertiesMutable = _1.PublicDnsPropertiesMutable
    export type SOA = _1.SOA
  }
  export namespace PrivateDnsNamespace {
    export type Properties = _4.Properties
    export type SOA = _4.SOA
    export type PrivateDnsPropertiesMutable = _4.PrivateDnsPropertiesMutable
  }
}
