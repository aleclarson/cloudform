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

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class KinesisFirehoseDestinationDetails {
    DeliveryStream!: Value<string>

    constructor(properties: KinesisFirehoseDestinationDetails) {
        Object.assign(this, properties)
    }
}

export class LogDeliveryConfigurationRequest {
    DestinationDetails!: DestinationDetails
    DestinationType!: Value<string>
    LogFormat!: Value<string>
    LogType!: Value<string>

    constructor(properties: LogDeliveryConfigurationRequest) {
        Object.assign(this, properties)
    }
}

export class DestinationDetails {
    CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails
    KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails

    constructor(properties: DestinationDetails) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLogsDestinationDetails {
    LogGroup!: Value<string>

    constructor(properties: CloudWatchLogsDestinationDetails) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    AZMode?: Value<string>
    AutoMinorVersionUpgrade?: Value<boolean>
    CacheNodeType: Value<string>
    CacheParameterGroupName?: Value<string>
    CacheSecurityGroupNames?: List<Value<string>>
    CacheSubnetGroupName?: Value<string>
    ClusterName?: Value<string>
    Engine: Value<string>
    EngineVersion?: Value<string>
    LogDeliveryConfigurations?: List<LogDeliveryConfigurationRequest>
    NotificationTopicArn?: Value<string>
    NumCacheNodes: Value<number>
    Port?: Value<number>
    PreferredAvailabilityZone?: Value<string>
    PreferredAvailabilityZones?: List<Value<string>>
    PreferredMaintenanceWindow?: Value<string>
    SnapshotArns?: List<Value<string>>
    SnapshotName?: Value<string>
    SnapshotRetentionLimit?: Value<number>
    SnapshotWindow?: Value<string>
    Tags?: List<ResourceTag>
    VpcSecurityGroupIds?: List<Value<string>>
}

class CacheCluster extends ResourceBase<Properties> {
    static KinesisFirehoseDestinationDetails = KinesisFirehoseDestinationDetails
    static LogDeliveryConfigurationRequest = LogDeliveryConfigurationRequest
    static DestinationDetails = DestinationDetails
    static CloudWatchLogsDestinationDetails = CloudWatchLogsDestinationDetails

    constructor(properties: Properties) {
        super('AWS::ElastiCache::CacheCluster', properties)
    }
}
export { CacheCluster as R }
