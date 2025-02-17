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

export class LocationCapacity {
    DesiredEC2Instances!: Value<number>
    MinSize!: Value<number>
    MaxSize!: Value<number>

    constructor(properties: LocationCapacity) {
        Object.assign(this, properties)
    }
}

export class CertificateConfiguration {
    CertificateType!: Value<string>

    constructor(properties: CertificateConfiguration) {
        Object.assign(this, properties)
    }
}

export class LocationConfiguration {
    Location!: Value<string>
    LocationCapacity?: LocationCapacity

    constructor(properties: LocationConfiguration) {
        Object.assign(this, properties)
    }
}

export class IpPermission {
    FromPort!: Value<number>
    IpRange!: Value<string>
    Protocol!: Value<string>
    ToPort!: Value<number>

    constructor(properties: IpPermission) {
        Object.assign(this, properties)
    }
}

export class ServerProcess {
    ConcurrentExecutions!: Value<number>
    LaunchPath!: Value<string>
    Parameters?: Value<string>

    constructor(properties: ServerProcess) {
        Object.assign(this, properties)
    }
}

export class ResourceCreationLimitPolicy {
    NewGameSessionsPerCreator?: Value<number>
    PolicyPeriodInMinutes?: Value<number>

    constructor(properties: ResourceCreationLimitPolicy) {
        Object.assign(this, properties)
    }
}

export class RuntimeConfiguration {
    GameSessionActivationTimeoutSeconds?: Value<number>
    MaxConcurrentGameSessionActivations?: Value<number>
    ServerProcesses?: List<ServerProcess>

    constructor(properties: RuntimeConfiguration) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    CertificateConfiguration?: CertificateConfiguration
    Description?: Value<string>
    DesiredEC2Instances?: Value<number>
    EC2InboundPermissions?: List<IpPermission>
    EC2InstanceType?: Value<string>
    FleetType?: Value<string>
    InstanceRoleARN?: Value<string>
    Locations?: List<LocationConfiguration>
    MaxSize?: Value<number>
    MetricGroups?: List<Value<string>>
    MinSize?: Value<number>
    Name?: Value<string>
    NewGameSessionProtectionPolicy?: Value<string>
    PeerVpcAwsAccountId?: Value<string>
    PeerVpcId?: Value<string>
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy
    BuildId?: Value<string>
    ScriptId?: Value<string>
    RuntimeConfiguration?: RuntimeConfiguration
    LogPaths?: List<Value<string>>
    ServerLaunchParameters?: Value<string>
    ServerLaunchPath?: Value<string>
}

class Fleet extends ResourceBase<Properties> {
    static LocationCapacity = LocationCapacity
    static CertificateConfiguration = CertificateConfiguration
    static LocationConfiguration = LocationConfiguration
    static IpPermission = IpPermission
    static ServerProcess = ServerProcess
    static ResourceCreationLimitPolicy = ResourceCreationLimitPolicy
    static RuntimeConfiguration = RuntimeConfiguration

    constructor(properties?: Properties) {
        super('AWS::GameLift::Fleet', properties || {})
    }
}
export { Fleet as R }
