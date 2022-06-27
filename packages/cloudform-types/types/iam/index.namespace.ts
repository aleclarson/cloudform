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

import * as _0 from './group'
import * as _1 from './user'
import * as _2 from './virtualMfaDevice'
import * as _3 from './role'
import * as _4 from './samlProvider'
import * as _5 from './serverCertificate'
import * as _6 from './policy'
import * as _7 from './serviceLinkedRole'
import * as _8 from './accessKey'
import * as _9 from './oidcProvider'
import * as _a from './userToGroupAddition'
import * as _b from './instanceProfile'
import * as _c from './managedPolicy'

export namespace IAM {
  export const Group = _0.R
  export const User = _1.R
  export const VirtualMFADevice = _2.R
  export const Role = _3.R
  export const SAMLProvider = _4.R
  export const ServerCertificate = _5.R
  export const Policy = _6.R
  export const ServiceLinkedRole = _7.R
  export const AccessKey = _8.R
  export const OIDCProvider = _9.R
  export const UserToGroupAddition = _a.R
  export const InstanceProfile = _b.R
  export const ManagedPolicy = _c.R

  export type Group = _0.R
  export type User = _1.R
  export type VirtualMFADevice = _2.R
  export type Role = _3.R
  export type SAMLProvider = _4.R
  export type ServerCertificate = _5.R
  export type Policy = _6.R
  export type ServiceLinkedRole = _7.R
  export type AccessKey = _8.R
  export type OIDCProvider = _9.R
  export type UserToGroupAddition = _a.R
  export type InstanceProfile = _b.R
  export type ManagedPolicy = _c.R

  export namespace Group {
    export type Policy = _0.Policy
  }
  export namespace User {
    export type LoginProfile = _1.LoginProfile
    export type Policy = _1.Policy
  }
  export namespace Role {
    export type Policy = _3.Policy
  }
}
