/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
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

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class PrefixLevelStorageMetrics {
    IsEnabled?: Value<boolean>
    SelectionCriteria?: SelectionCriteria

    constructor(properties: PrefixLevelStorageMetrics) {
        Object.assign(this, properties)
    }
}

export class SelectionCriteria {
    MaxDepth?: Value<number>
    Delimiter?: Value<string>
    MinStorageBytesPercentage?: Value<number>

    constructor(properties: SelectionCriteria) {
        Object.assign(this, properties)
    }
}

export class ActivityMetrics {
    IsEnabled?: Value<boolean>

    constructor(properties: ActivityMetrics) {
        Object.assign(this, properties)
    }
}

export class BucketLevel {
    ActivityMetrics?: ActivityMetrics
    PrefixLevel?: PrefixLevel

    constructor(properties: BucketLevel) {
        Object.assign(this, properties)
    }
}

export class BucketsAndRegions {
    Buckets?: List<Value<string>>
    Regions?: List<Value<string>>

    constructor(properties: BucketsAndRegions) {
        Object.assign(this, properties)
    }
}

export class DataExport {
    S3BucketDestination?: S3BucketDestination
    CloudWatchMetrics?: CloudWatchMetrics

    constructor(properties: DataExport) {
        Object.assign(this, properties)
    }
}

export class AwsOrg {
    Arn!: Value<string>

    constructor(properties: AwsOrg) {
        Object.assign(this, properties)
    }
}

export class PrefixLevel {
    StorageMetrics!: PrefixLevelStorageMetrics

    constructor(properties: PrefixLevel) {
        Object.assign(this, properties)
    }
}

export class CloudWatchMetrics {
    IsEnabled!: Value<boolean>

    constructor(properties: CloudWatchMetrics) {
        Object.assign(this, properties)
    }
}

export type Encryption = {[key: string]: any}

export class S3BucketDestination {
    OutputSchemaVersion!: Value<string>
    Format!: Value<string>
    AccountId!: Value<string>
    Arn!: Value<string>
    Prefix?: Value<string>
    Encryption?: Encryption

    constructor(properties: S3BucketDestination) {
        Object.assign(this, properties)
    }
}

export class StorageLensConfiguration {
    Id!: Value<string>
    Include?: BucketsAndRegions
    Exclude?: BucketsAndRegions
    AwsOrg?: AwsOrg
    AccountLevel!: AccountLevel
    DataExport?: DataExport
    IsEnabled!: Value<boolean>
    StorageLensArn?: Value<string>

    constructor(properties: StorageLensConfiguration) {
        Object.assign(this, properties)
    }
}

export class AccountLevel {
    ActivityMetrics?: ActivityMetrics
    BucketLevel!: BucketLevel

    constructor(properties: AccountLevel) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    StorageLensConfiguration: StorageLensConfiguration
    Tags?: List<ResourceTag>
}

class StorageLens extends ResourceBase<Properties> {
    static PrefixLevelStorageMetrics = PrefixLevelStorageMetrics
    static SelectionCriteria = SelectionCriteria
    static ActivityMetrics = ActivityMetrics
    static BucketLevel = BucketLevel
    static BucketsAndRegions = BucketsAndRegions
    static DataExport = DataExport
    static AwsOrg = AwsOrg
    static PrefixLevel = PrefixLevel
    static CloudWatchMetrics = CloudWatchMetrics
    static S3BucketDestination = S3BucketDestination
    static StorageLensConfiguration = StorageLensConfiguration
    static AccountLevel = AccountLevel

    constructor(properties: Properties) {
        super('AWS::S3::StorageLens', properties)
    }
}
export { StorageLens as R }
