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

import * as _0 from './backupPlan'
import * as _1 from './framework'
import * as _2 from './backupVault'
import * as _3 from './reportPlan'
import * as _4 from './backupSelection'

export namespace Backup {
  export const BackupPlan = _0.R
  export const Framework = _1.R
  export const BackupVault = _2.R
  export const ReportPlan = _3.R
  export const BackupSelection = _4.R

  export type BackupPlan = _0.R
  export type Framework = _1.R
  export type BackupVault = _2.R
  export type ReportPlan = _3.R
  export type BackupSelection = _4.R

  export namespace BackupPlan {
    export type CopyActionResourceType = _0.CopyActionResourceType
    export type BackupPlanResourceType = _0.BackupPlanResourceType
    export type AdvancedBackupSettingResourceType = _0.AdvancedBackupSettingResourceType
    export type LifecycleResourceType = _0.LifecycleResourceType
    export type BackupRuleResourceType = _0.BackupRuleResourceType
  }
  export namespace Framework {
    export type FrameworkControl = _1.FrameworkControl
    export type ControlInputParameter = _1.ControlInputParameter
  }
  export namespace BackupVault {
    export type NotificationObjectType = _2.NotificationObjectType
    export type LockConfigurationType = _2.LockConfigurationType
  }
  export namespace BackupSelection {
    export type ConditionResourceType = _4.ConditionResourceType
    export type BackupSelectionResourceType = _4.BackupSelectionResourceType
  }
}
