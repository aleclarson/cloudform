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

export class ZoneAwarenessConfig {
    AvailabilityZoneCount?: Value<number>

    constructor(properties: ZoneAwarenessConfig) {
        Object.assign(this, properties)
    }
}

export class NodeToNodeEncryptionOptions {
    Enabled?: Value<boolean>

    constructor(properties: NodeToNodeEncryptionOptions) {
        Object.assign(this, properties)
    }
}

export class SnapshotOptions {
    AutomatedSnapshotStartHour?: Value<number>

    constructor(properties: SnapshotOptions) {
        Object.assign(this, properties)
    }
}

export class EBSOptions {
    EBSEnabled?: Value<boolean>
    VolumeType?: Value<string>
    Iops?: Value<number>
    VolumeSize?: Value<number>

    constructor(properties: EBSOptions) {
        Object.assign(this, properties)
    }
}

export class LogPublishingOption {
    CloudWatchLogsLogGroupArn?: Value<string>
    Enabled?: Value<boolean>

    constructor(properties: LogPublishingOption) {
        Object.assign(this, properties)
    }
}

export class EncryptionAtRestOptions {
    KmsKeyId?: Value<string>
    Enabled?: Value<boolean>

    constructor(properties: EncryptionAtRestOptions) {
        Object.assign(this, properties)
    }
}

export class DomainEndpointOptions {
    CustomEndpointCertificateArn?: Value<string>
    CustomEndpointEnabled?: Value<boolean>
    EnforceHTTPS?: Value<boolean>
    CustomEndpoint?: Value<string>
    TLSSecurityPolicy?: Value<string>

    constructor(properties: DomainEndpointOptions) {
        Object.assign(this, properties)
    }
}

export class CognitoOptions {
    Enabled?: Value<boolean>
    IdentityPoolId?: Value<string>
    UserPoolId?: Value<string>
    RoleArn?: Value<string>

    constructor(properties: CognitoOptions) {
        Object.assign(this, properties)
    }
}

export class VPCOptions {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VPCOptions) {
        Object.assign(this, properties)
    }
}

export class AdvancedSecurityOptionsInput {
    Enabled?: Value<boolean>
    MasterUserOptions?: MasterUserOptions
    InternalUserDatabaseEnabled?: Value<boolean>

    constructor(properties: AdvancedSecurityOptionsInput) {
        Object.assign(this, properties)
    }
}

export class MasterUserOptions {
    MasterUserPassword?: Value<string>
    MasterUserName?: Value<string>
    MasterUserARN?: Value<string>

    constructor(properties: MasterUserOptions) {
        Object.assign(this, properties)
    }
}

export class ClusterConfig {
    InstanceCount?: Value<number>
    WarmEnabled?: Value<boolean>
    WarmCount?: Value<number>
    DedicatedMasterEnabled?: Value<boolean>
    ZoneAwarenessConfig?: ZoneAwarenessConfig
    DedicatedMasterCount?: Value<number>
    InstanceType?: Value<string>
    WarmType?: Value<string>
    ZoneAwarenessEnabled?: Value<boolean>
    DedicatedMasterType?: Value<string>

    constructor(properties: ClusterConfig) {
        Object.assign(this, properties)
    }
}

export interface DomainProperties {
    ClusterConfig?: ClusterConfig
    DomainName?: Value<string>
    AccessPolicies?: {[key: string]: any}
    EngineVersion?: Value<string>
    AdvancedOptions?: {[key: string]: Value<string>}
    LogPublishingOptions?: {[key: string]: LogPublishingOption}
    SnapshotOptions?: SnapshotOptions
    VPCOptions?: VPCOptions
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions
    DomainEndpointOptions?: DomainEndpointOptions
    CognitoOptions?: CognitoOptions
    AdvancedSecurityOptions?: AdvancedSecurityOptionsInput
    EBSOptions?: EBSOptions
    EncryptionAtRestOptions?: EncryptionAtRestOptions
    Tags?: List<ResourceTag>
}

export default class Domain extends ResourceBase<DomainProperties> {
    static ZoneAwarenessConfig = ZoneAwarenessConfig
    static NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions
    static SnapshotOptions = SnapshotOptions
    static EBSOptions = EBSOptions
    static LogPublishingOption = LogPublishingOption
    static EncryptionAtRestOptions = EncryptionAtRestOptions
    static DomainEndpointOptions = DomainEndpointOptions
    static CognitoOptions = CognitoOptions
    static VPCOptions = VPCOptions
    static AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput
    static MasterUserOptions = MasterUserOptions
    static ClusterConfig = ClusterConfig

    constructor(properties?: DomainProperties) {
        super('AWS::OpenSearchService::Domain', properties || {})
    }
}
