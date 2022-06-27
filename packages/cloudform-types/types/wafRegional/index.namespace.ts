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

import * as _0 from './sqlInjectionMatchSet'
import * as _1 from './regexPatternSet'
import * as _2 from './webAclAssociation'
import * as _3 from './sizeConstraintSet'
import * as _4 from './xssMatchSet'
import * as _5 from './rateBasedRule'
import * as _6 from './geoMatchSet'
import * as _7 from './webAcl'
import * as _8 from './ipSet'
import * as _9 from './byteMatchSet'
import * as _a from './rule'

export namespace WAFRegional {
  export const SqlInjectionMatchSet = _0.R
  export const RegexPatternSet = _1.R
  export const WebACLAssociation = _2.R
  export const SizeConstraintSet = _3.R
  export const XssMatchSet = _4.R
  export const RateBasedRule = _5.R
  export const GeoMatchSet = _6.R
  export const WebACL = _7.R
  export const IPSet = _8.R
  export const ByteMatchSet = _9.R
  export const Rule = _a.R

  export type SqlInjectionMatchSet = _0.R
  export type RegexPatternSet = _1.R
  export type WebACLAssociation = _2.R
  export type SizeConstraintSet = _3.R
  export type XssMatchSet = _4.R
  export type RateBasedRule = _5.R
  export type GeoMatchSet = _6.R
  export type WebACL = _7.R
  export type IPSet = _8.R
  export type ByteMatchSet = _9.R
  export type Rule = _a.R

  export namespace SqlInjectionMatchSet {
    export type FieldToMatch = _0.FieldToMatch
    export type SqlInjectionMatchTuple = _0.SqlInjectionMatchTuple
  }
  export namespace SizeConstraintSet {
    export type SizeConstraint = _3.SizeConstraint
    export type FieldToMatch = _3.FieldToMatch
  }
  export namespace XssMatchSet {
    export type XssMatchTuple = _4.XssMatchTuple
    export type FieldToMatch = _4.FieldToMatch
  }
  export namespace RateBasedRule {
    export type Predicate = _5.Predicate
  }
  export namespace GeoMatchSet {
    export type GeoMatchConstraint = _6.GeoMatchConstraint
  }
  export namespace WebACL {
    export type Action = _7.Action
    export type Rule = _7.Rule
  }
  export namespace IPSet {
    export type IPSetDescriptor = _8.IPSetDescriptor
  }
  export namespace ByteMatchSet {
    export type ByteMatchTuple = _9.ByteMatchTuple
    export type FieldToMatch = _9.FieldToMatch
  }
  export namespace Rule {
    export type Predicate = _a.Predicate
  }
}
