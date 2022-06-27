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

import * as _0 from './quickConnect'
import * as _1 from './hoursOfOperation'
import * as _2 from './phoneNumber'
import * as _3 from './contactFlow'
import * as _4 from './userHierarchyGroup'
import * as _5 from './taskTemplate'
import * as _6 from './user'
import * as _7 from './contactFlowModule'

export namespace Connect {
  export const QuickConnect = _0.R
  export const HoursOfOperation = _1.R
  export const PhoneNumber = _2.R
  export const ContactFlow = _3.R
  export const UserHierarchyGroup = _4.R
  export const TaskTemplate = _5.R
  export const User = _6.R
  export const ContactFlowModule = _7.R

  export type QuickConnect = _0.R
  export type HoursOfOperation = _1.R
  export type PhoneNumber = _2.R
  export type ContactFlow = _3.R
  export type UserHierarchyGroup = _4.R
  export type TaskTemplate = _5.R
  export type User = _6.R
  export type ContactFlowModule = _7.R

  export namespace QuickConnect {
    export type QueueQuickConnectConfig = _0.QueueQuickConnectConfig
    export type QuickConnectConfig = _0.QuickConnectConfig
    export type UserQuickConnectConfig = _0.UserQuickConnectConfig
    export type PhoneNumberQuickConnectConfig = _0.PhoneNumberQuickConnectConfig
  }
  export namespace HoursOfOperation {
    export type HoursOfOperationConfig = _1.HoursOfOperationConfig
    export type HoursOfOperationTimeSlice = _1.HoursOfOperationTimeSlice
  }
  export namespace TaskTemplate {
    export type DefaultFieldValue = _5.DefaultFieldValue
    export type FieldIdentifier = _5.FieldIdentifier
    export type Field = _5.Field
  }
  export namespace User {
    export type UserIdentityInfo = _6.UserIdentityInfo
    export type UserPhoneConfig = _6.UserPhoneConfig
  }
}
