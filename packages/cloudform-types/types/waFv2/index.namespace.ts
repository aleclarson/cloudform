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

import * as _0 from './loggingConfiguration'
import * as _1 from './regexPatternSet'
import * as _2 from './ipSet'
import * as _3 from './webAclAssociation'
import * as _4 from './webAcl'
import * as _5 from './ruleGroup'

export namespace WAFv2 {
  export const LoggingConfiguration = _0.R
  export const RegexPatternSet = _1.R
  export const IPSet = _2.R
  export const WebACLAssociation = _3.R
  export const WebACL = _4.R
  export const RuleGroup = _5.R

  export type LoggingConfiguration = _0.R
  export type RegexPatternSet = _1.R
  export type IPSet = _2.R
  export type WebACLAssociation = _3.R
  export type WebACL = _4.R
  export type RuleGroup = _5.R

  export namespace LoggingConfiguration {
    export type FieldToMatch = _0.FieldToMatch
  }
  export namespace WebACL {
    export type CustomRequestHandling = _4.CustomRequestHandling
    export type ManagedRuleGroupStatement = _4.ManagedRuleGroupStatement
    export type FieldIdentifier = _4.FieldIdentifier
    export type TextTransformation = _4.TextTransformation
    export type AllowAction = _4.AllowAction
    export type DefaultAction = _4.DefaultAction
    export type XssMatchStatement = _4.XssMatchStatement
    export type ByteMatchStatement = _4.ByteMatchStatement
    export type ForwardedIPConfiguration = _4.ForwardedIPConfiguration
    export type OrStatement = _4.OrStatement
    export type Label = _4.Label
    export type CookieMatchPattern = _4.CookieMatchPattern
    export type CustomHTTPHeader = _4.CustomHTTPHeader
    export type RegexPatternSetReferenceStatement = _4.RegexPatternSetReferenceStatement
    export type IPSetForwardedIPConfiguration = _4.IPSetForwardedIPConfiguration
    export type CustomResponseBody = _4.CustomResponseBody
    export type Statement = _4.Statement
    export type ImmunityTimeProperty = _4.ImmunityTimeProperty
    export type BlockAction = _4.BlockAction
    export type RuleGroupReferenceStatement = _4.RuleGroupReferenceStatement
    export type LabelMatchStatement = _4.LabelMatchStatement
    export type JsonMatchPattern = _4.JsonMatchPattern
    export type AndStatement = _4.AndStatement
    export type CountAction = _4.CountAction
    export type CaptchaConfig = _4.CaptchaConfig
    export type SizeConstraintStatement = _4.SizeConstraintStatement
    export type FieldToMatch = _4.FieldToMatch
    export type SqliMatchStatement = _4.SqliMatchStatement
    export type ManagedRuleGroupConfig = _4.ManagedRuleGroupConfig
    export type GeoMatchStatement = _4.GeoMatchStatement
    export type RuleAction = _4.RuleAction
    export type JsonBody = _4.JsonBody
    export type Body = _4.Body
    export type NotStatement = _4.NotStatement
    export type OverrideAction = _4.OverrideAction
    export type RegexMatchStatement = _4.RegexMatchStatement
    export type Headers = _4.Headers
    export type Rule = _4.Rule
    export type CustomResponse = _4.CustomResponse
    export type RateBasedStatement = _4.RateBasedStatement
    export type HeaderMatchPattern = _4.HeaderMatchPattern
    export type ExcludedRule = _4.ExcludedRule
    export type VisibilityConfig = _4.VisibilityConfig
    export type IPSetReferenceStatement = _4.IPSetReferenceStatement
    export type CaptchaAction = _4.CaptchaAction
    export type Cookies = _4.Cookies
  }
  export namespace RuleGroup {
    export type JsonMatchPattern = _5.JsonMatchPattern
    export type XssMatchStatement = _5.XssMatchStatement
    export type LabelMatchStatement = _5.LabelMatchStatement
    export type RuleAction = _5.RuleAction
    export type Statement = _5.Statement
    export type LabelSummary = _5.LabelSummary
    export type FieldToMatch = _5.FieldToMatch
    export type IPSetReferenceStatement = _5.IPSetReferenceStatement
    export type CaptchaConfig = _5.CaptchaConfig
    export type RateBasedStatement = _5.RateBasedStatement
    export type HeaderMatchPattern = _5.HeaderMatchPattern
    export type ImmunityTimeProperty = _5.ImmunityTimeProperty
    export type VisibilityConfig = _5.VisibilityConfig
    export type GeoMatchStatement = _5.GeoMatchStatement
    export type AndStatement = _5.AndStatement
    export type IPSetForwardedIPConfiguration = _5.IPSetForwardedIPConfiguration
    export type RegexMatchStatement = _5.RegexMatchStatement
    export type TextTransformation = _5.TextTransformation
    export type Body = _5.Body
    export type ByteMatchStatement = _5.ByteMatchStatement
    export type RegexPatternSetReferenceStatement = _5.RegexPatternSetReferenceStatement
    export type CookieMatchPattern = _5.CookieMatchPattern
    export type OrStatement = _5.OrStatement
    export type Headers = _5.Headers
    export type Rule = _5.Rule
    export type JsonBody = _5.JsonBody
    export type CustomResponseBody = _5.CustomResponseBody
    export type Label = _5.Label
    export type Cookies = _5.Cookies
    export type SqliMatchStatement = _5.SqliMatchStatement
    export type NotStatement = _5.NotStatement
    export type ForwardedIPConfiguration = _5.ForwardedIPConfiguration
    export type SizeConstraintStatement = _5.SizeConstraintStatement
  }
}
