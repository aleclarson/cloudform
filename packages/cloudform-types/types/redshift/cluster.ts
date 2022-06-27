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

export class Endpoint {
    Port?: Value<string>
    Address?: Value<string>

    constructor(properties: Endpoint) {
        Object.assign(this, properties)
    }
}

export class LoggingProperties {
    BucketName!: Value<string>
    S3KeyPrefix?: Value<string>

    constructor(properties: LoggingProperties) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    ClusterIdentifier?: Value<string>
    MasterUsername: Value<string>
    MasterUserPassword: Value<string>
    NodeType: Value<string>
    AllowVersionUpgrade?: Value<boolean>
    AutomatedSnapshotRetentionPeriod?: Value<number>
    AvailabilityZone?: Value<string>
    ClusterParameterGroupName?: Value<string>
    ClusterType: Value<string>
    ClusterVersion?: Value<string>
    ClusterSubnetGroupName?: Value<string>
    DBName: Value<string>
    ElasticIp?: Value<string>
    Encrypted?: Value<boolean>
    HsmClientCertificateIdentifier?: Value<string>
    HsmConfigurationIdentifier?: Value<string>
    KmsKeyId?: Value<string>
    NumberOfNodes?: Value<number>
    Port?: Value<number>
    PreferredMaintenanceWindow?: Value<string>
    PubliclyAccessible?: Value<boolean>
    ClusterSecurityGroups?: List<Value<string>>
    IamRoles?: List<Value<string>>
    Tags?: List<ResourceTag>
    VpcSecurityGroupIds?: List<Value<string>>
    SnapshotClusterIdentifier?: Value<string>
    SnapshotIdentifier?: Value<string>
    OwnerAccount?: Value<string>
    LoggingProperties?: LoggingProperties
    DestinationRegion?: Value<string>
    SnapshotCopyRetentionPeriod?: Value<number>
    SnapshotCopyGrantName?: Value<string>
    ManualSnapshotRetentionPeriod?: Value<number>
    SnapshotCopyManual?: Value<boolean>
    AvailabilityZoneRelocation?: Value<boolean>
    AvailabilityZoneRelocationStatus?: Value<string>
    AquaConfigurationStatus?: Value<string>
    Classic?: Value<boolean>
    EnhancedVpcRouting?: Value<boolean>
    MaintenanceTrackName?: Value<string>
    DeferMaintenance?: Value<boolean>
    DeferMaintenanceStartTime?: Value<string>
    DeferMaintenanceEndTime?: Value<string>
    DeferMaintenanceDuration?: Value<number>
    RevisionTarget?: Value<string>
    ResourceAction?: Value<string>
    RotateEncryptionKey?: Value<boolean>
}

class Cluster extends ResourceBase<Properties> {
    static Endpoint = Endpoint
    static LoggingProperties = LoggingProperties

    constructor(properties: Properties) {
        super('AWS::Redshift::Cluster', properties)
    }
}
export { Cluster as R }
