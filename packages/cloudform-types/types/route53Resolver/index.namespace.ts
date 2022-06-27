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

import * as _0 from './resolverQueryLoggingConfig'
import * as _1 from './firewallRuleGroupAssociation'
import * as _2 from './resolverQueryLoggingConfigAssociation'
import * as _3 from './resolverConfig'
import * as _4 from './resolverDnssecConfig'
import * as _5 from './firewallDomainList'
import * as _6 from './resolverRule'
import * as _7 from './firewallRuleGroup'
import * as _8 from './resolverRuleAssociation'
import * as _9 from './resolverEndpoint'

export namespace Route53Resolver {
  export const ResolverQueryLoggingConfig = _0.R
  export const FirewallRuleGroupAssociation = _1.R
  export const ResolverQueryLoggingConfigAssociation = _2.R
  export const ResolverConfig = _3.R
  export const ResolverDNSSECConfig = _4.R
  export const FirewallDomainList = _5.R
  export const ResolverRule = _6.R
  export const FirewallRuleGroup = _7.R
  export const ResolverRuleAssociation = _8.R
  export const ResolverEndpoint = _9.R

  export type ResolverQueryLoggingConfig = _0.R
  export type FirewallRuleGroupAssociation = _1.R
  export type ResolverQueryLoggingConfigAssociation = _2.R
  export type ResolverConfig = _3.R
  export type ResolverDNSSECConfig = _4.R
  export type FirewallDomainList = _5.R
  export type ResolverRule = _6.R
  export type FirewallRuleGroup = _7.R
  export type ResolverRuleAssociation = _8.R
  export type ResolverEndpoint = _9.R

  export namespace ResolverRule {
    export type TargetAddress = _6.TargetAddress
  }
  export namespace FirewallRuleGroup {
    export type FirewallRule = _7.FirewallRule
  }
  export namespace ResolverEndpoint {
    export type IpAddressRequest = _9.IpAddressRequest
  }
}
