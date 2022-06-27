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

import * as _0 from './loadBalancer'
import * as _1 from './listenerRule'
import * as _2 from './targetGroup'
import * as _3 from './listener'
import * as _4 from './listenerCertificate'

export namespace ElasticLoadBalancingV2 {
  export const LoadBalancer = _0.R
  export const ListenerRule = _1.R
  export const TargetGroup = _2.R
  export const Listener = _3.R
  export const ListenerCertificate = _4.R

  export type LoadBalancer = _0.R
  export type ListenerRule = _1.R
  export type TargetGroup = _2.R
  export type Listener = _3.R
  export type ListenerCertificate = _4.R

  export namespace LoadBalancer {
    export type LoadBalancerAttribute = _0.LoadBalancerAttribute
    export type SubnetMapping = _0.SubnetMapping
  }
  export namespace ListenerRule {
    export type SourceIpConfig = _1.SourceIpConfig
    export type AuthenticateOidcConfig = _1.AuthenticateOidcConfig
    export type AuthenticateCognitoConfig = _1.AuthenticateCognitoConfig
    export type QueryStringKeyValue = _1.QueryStringKeyValue
    export type QueryStringConfig = _1.QueryStringConfig
    export type PathPatternConfig = _1.PathPatternConfig
    export type RuleCondition = _1.RuleCondition
    export type RedirectConfig = _1.RedirectConfig
    export type HostHeaderConfig = _1.HostHeaderConfig
    export type FixedResponseConfig = _1.FixedResponseConfig
    export type Action = _1.Action
    export type HttpHeaderConfig = _1.HttpHeaderConfig
    export type ForwardConfig = _1.ForwardConfig
    export type TargetGroupTuple = _1.TargetGroupTuple
    export type HttpRequestMethodConfig = _1.HttpRequestMethodConfig
    export type TargetGroupStickinessConfig = _1.TargetGroupStickinessConfig
  }
  export namespace TargetGroup {
    export type TargetDescription = _2.TargetDescription
    export type TargetGroupAttribute = _2.TargetGroupAttribute
    export type Matcher = _2.Matcher
  }
  export namespace Listener {
    export type ForwardConfig = _3.ForwardConfig
    export type AuthenticateOidcConfig = _3.AuthenticateOidcConfig
    export type Certificate = _3.Certificate
    export type TargetGroupStickinessConfig = _3.TargetGroupStickinessConfig
    export type AuthenticateCognitoConfig = _3.AuthenticateCognitoConfig
    export type Action = _3.Action
    export type RedirectConfig = _3.RedirectConfig
    export type FixedResponseConfig = _3.FixedResponseConfig
    export type TargetGroupTuple = _3.TargetGroupTuple
  }
  export namespace ListenerCertificate {
    export type Certificate = _4.Certificate
  }
}
