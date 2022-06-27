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

import * as _0 from './patchBaseline'
import * as _1 from './maintenanceWindowTask'
import * as _2 from './maintenanceWindow'
import * as _3 from './parameter'
import * as _4 from './resourceDataSync'
import * as _5 from './maintenanceWindowTarget'
import * as _6 from './document'
import * as _7 from './association'

export namespace SSM {
  export const PatchBaseline = _0.R
  export const MaintenanceWindowTask = _1.R
  export const MaintenanceWindow = _2.R
  export const Parameter = _3.R
  export const ResourceDataSync = _4.R
  export const MaintenanceWindowTarget = _5.R
  export const Document = _6.R
  export const Association = _7.R

  export type PatchBaseline = _0.R
  export type MaintenanceWindowTask = _1.R
  export type MaintenanceWindow = _2.R
  export type Parameter = _3.R
  export type ResourceDataSync = _4.R
  export type MaintenanceWindowTarget = _5.R
  export type Document = _6.R
  export type Association = _7.R

  export namespace PatchBaseline {
    export type PatchStringDate = _0.PatchStringDate
    export type PatchFilter = _0.PatchFilter
    export type Rule = _0.Rule
    export type PatchFilterGroup = _0.PatchFilterGroup
    export type PatchSource = _0.PatchSource
    export type RuleGroup = _0.RuleGroup
  }
  export namespace MaintenanceWindowTask {
    export type LoggingInfo = _1.LoggingInfo
    export type Target = _1.Target
    export type CloudWatchOutputConfig = _1.CloudWatchOutputConfig
    export type NotificationConfig = _1.NotificationConfig
    export type MaintenanceWindowAutomationParameters = _1.MaintenanceWindowAutomationParameters
    export type TaskInvocationParameters = _1.TaskInvocationParameters
    export type MaintenanceWindowStepFunctionsParameters = _1.MaintenanceWindowStepFunctionsParameters
    export type MaintenanceWindowRunCommandParameters = _1.MaintenanceWindowRunCommandParameters
    export type MaintenanceWindowLambdaParameters = _1.MaintenanceWindowLambdaParameters
  }
  export namespace ResourceDataSync {
    export type AwsOrganizationsSource = _4.AwsOrganizationsSource
    export type SyncSource = _4.SyncSource
    export type S3Destination = _4.S3Destination
  }
  export namespace MaintenanceWindowTarget {
    export type Targets = _5.Targets
  }
  export namespace Document {
    export type DocumentRequires = _6.DocumentRequires
    export type AttachmentsSource = _6.AttachmentsSource
  }
  export namespace Association {
    export type InstanceAssociationOutputLocation = _7.InstanceAssociationOutputLocation
    export type Target = _7.Target
    export type S3OutputLocation = _7.S3OutputLocation
  }
}
