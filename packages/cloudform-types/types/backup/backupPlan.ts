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

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CopyActionResourceType {
    Lifecycle?: LifecycleResourceType
    DestinationBackupVaultArn!: Value<string>

    constructor(properties: CopyActionResourceType) {
        Object.assign(this, properties)
    }
}

export class BackupPlanResourceType {
    BackupPlanName!: Value<string>
    AdvancedBackupSettings?: List<AdvancedBackupSettingResourceType>
    BackupPlanRule!: List<BackupRuleResourceType>

    constructor(properties: BackupPlanResourceType) {
        Object.assign(this, properties)
    }
}

export class AdvancedBackupSettingResourceType {
    BackupOptions!: {[key: string]: any}
    ResourceType!: Value<string>

    constructor(properties: AdvancedBackupSettingResourceType) {
        Object.assign(this, properties)
    }
}

export class LifecycleResourceType {
    MoveToColdStorageAfterDays?: Value<number>
    DeleteAfterDays?: Value<number>

    constructor(properties: LifecycleResourceType) {
        Object.assign(this, properties)
    }
}

export class BackupRuleResourceType {
    RuleName!: Value<string>
    TargetBackupVault!: Value<string>
    StartWindowMinutes?: Value<number>
    CompletionWindowMinutes?: Value<number>
    ScheduleExpression?: Value<string>
    RecoveryPointTags?: {[key: string]: Value<string>}
    CopyActions?: List<CopyActionResourceType>
    Lifecycle?: LifecycleResourceType
    EnableContinuousBackup?: Value<boolean>

    constructor(properties: BackupRuleResourceType) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    BackupPlan: BackupPlanResourceType
    BackupPlanTags?: {[key: string]: Value<string>}
}

class BackupPlan extends ResourceBase<Properties> {
    static CopyActionResourceType = CopyActionResourceType
    static BackupPlanResourceType = BackupPlanResourceType
    static AdvancedBackupSettingResourceType = AdvancedBackupSettingResourceType
    static LifecycleResourceType = LifecycleResourceType
    static BackupRuleResourceType = BackupRuleResourceType

    constructor(properties: Properties) {
        super('AWS::Backup::BackupPlan', properties)
    }
}
export { BackupPlan as R }
