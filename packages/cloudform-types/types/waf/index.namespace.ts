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

import * as _0 from './ipSet'
import * as _1 from './sizeConstraintSet'
import * as _2 from './xssMatchSet'
import * as _3 from './rule'
import * as _4 from './sqlInjectionMatchSet'
import * as _5 from './webAcl'
import * as _6 from './byteMatchSet'

export namespace WAF {
  export const IPSet = _0.R
  export const SizeConstraintSet = _1.R
  export const XssMatchSet = _2.R
  export const Rule = _3.R
  export const SqlInjectionMatchSet = _4.R
  export const WebACL = _5.R
  export const ByteMatchSet = _6.R

  export type IPSet = _0.R
  export type SizeConstraintSet = _1.R
  export type XssMatchSet = _2.R
  export type Rule = _3.R
  export type SqlInjectionMatchSet = _4.R
  export type WebACL = _5.R
  export type ByteMatchSet = _6.R

  export namespace IPSet {
    export type IPSetDescriptor = _0.IPSetDescriptor
  }
  export namespace SizeConstraintSet {
    export type FieldToMatch = _1.FieldToMatch
    export type SizeConstraint = _1.SizeConstraint
  }
  export namespace XssMatchSet {
    export type XssMatchTuple = _2.XssMatchTuple
    export type FieldToMatch = _2.FieldToMatch
  }
  export namespace Rule {
    export type Predicate = _3.Predicate
  }
  export namespace SqlInjectionMatchSet {
    export type FieldToMatch = _4.FieldToMatch
    export type SqlInjectionMatchTuple = _4.SqlInjectionMatchTuple
  }
  export namespace WebACL {
    export type WafAction = _5.WafAction
    export type ActivatedRule = _5.ActivatedRule
  }
  export namespace ByteMatchSet {
    export type FieldToMatch = _6.FieldToMatch
    export type ByteMatchTuple = _6.ByteMatchTuple
  }
}
