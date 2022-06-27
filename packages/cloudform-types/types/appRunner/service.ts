/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ImageConfiguration {
    StartCommand?: Value<string>
    Port?: Value<string>
    RuntimeEnvironmentVariables?: List<KeyValuePair>

    constructor(properties: ImageConfiguration) {
        Object.assign(this, properties)
    }
}

export class InstanceConfiguration {
    Cpu?: Value<string>
    Memory?: Value<string>
    InstanceRoleArn?: Value<string>

    constructor(properties: InstanceConfiguration) {
        Object.assign(this, properties)
    }
}

export class AuthenticationConfiguration {
    ConnectionArn?: Value<string>
    AccessRoleArn?: Value<string>

    constructor(properties: AuthenticationConfiguration) {
        Object.assign(this, properties)
    }
}

export class KeyValuePair {
    Name?: Value<string>
    Value?: Value<string>

    constructor(properties: KeyValuePair) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfiguration {
    KmsKey!: Value<string>

    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class HealthCheckConfiguration {
    Protocol?: Value<string>
    Path?: Value<string>
    Interval?: Value<number>
    Timeout?: Value<number>
    HealthyThreshold?: Value<number>
    UnhealthyThreshold?: Value<number>

    constructor(properties: HealthCheckConfiguration) {
        Object.assign(this, properties)
    }
}

export class CodeConfigurationValues {
    Runtime!: Value<string>
    BuildCommand?: Value<string>
    StartCommand?: Value<string>
    Port?: Value<string>
    RuntimeEnvironmentVariables?: List<KeyValuePair>

    constructor(properties: CodeConfigurationValues) {
        Object.assign(this, properties)
    }
}

export class ServiceObservabilityConfiguration {
    ObservabilityEnabled!: Value<boolean>
    ObservabilityConfigurationArn?: Value<string>

    constructor(properties: ServiceObservabilityConfiguration) {
        Object.assign(this, properties)
    }
}

export class SourceCodeVersion {
    Type!: Value<string>
    Value!: Value<string>

    constructor(properties: SourceCodeVersion) {
        Object.assign(this, properties)
    }
}

export class ImageRepository {
    ImageIdentifier!: Value<string>
    ImageConfiguration?: ImageConfiguration
    ImageRepositoryType!: Value<string>

    constructor(properties: ImageRepository) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    EgressConfiguration!: EgressConfiguration

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class EgressConfiguration {
    EgressType!: Value<string>
    VpcConnectorArn?: Value<string>

    constructor(properties: EgressConfiguration) {
        Object.assign(this, properties)
    }
}

export class SourceConfiguration {
    CodeRepository?: CodeRepository
    ImageRepository?: ImageRepository
    AutoDeploymentsEnabled?: Value<boolean>
    AuthenticationConfiguration?: AuthenticationConfiguration

    constructor(properties: SourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class CodeRepository {
    RepositoryUrl!: Value<string>
    SourceCodeVersion!: SourceCodeVersion
    CodeConfiguration?: CodeConfiguration

    constructor(properties: CodeRepository) {
        Object.assign(this, properties)
    }
}

export class CodeConfiguration {
    ConfigurationSource!: Value<string>
    CodeConfigurationValues?: CodeConfigurationValues

    constructor(properties: CodeConfiguration) {
        Object.assign(this, properties)
    }
}

export interface ServiceProperties {
    ServiceName?: Value<string>
    SourceConfiguration: SourceConfiguration
    InstanceConfiguration?: InstanceConfiguration
    Tags?: List<ResourceTag>
    EncryptionConfiguration?: EncryptionConfiguration
    HealthCheckConfiguration?: HealthCheckConfiguration
    ObservabilityConfiguration?: ServiceObservabilityConfiguration
    AutoScalingConfigurationArn?: Value<string>
    NetworkConfiguration?: NetworkConfiguration
}

export default class Service extends ResourceBase<ServiceProperties> {
    static ImageConfiguration = ImageConfiguration
    static InstanceConfiguration = InstanceConfiguration
    static AuthenticationConfiguration = AuthenticationConfiguration
    static KeyValuePair = KeyValuePair
    static EncryptionConfiguration = EncryptionConfiguration
    static HealthCheckConfiguration = HealthCheckConfiguration
    static CodeConfigurationValues = CodeConfigurationValues
    static ServiceObservabilityConfiguration = ServiceObservabilityConfiguration
    static SourceCodeVersion = SourceCodeVersion
    static ImageRepository = ImageRepository
    static NetworkConfiguration = NetworkConfiguration
    static EgressConfiguration = EgressConfiguration
    static SourceConfiguration = SourceConfiguration
    static CodeRepository = CodeRepository
    static CodeConfiguration = CodeConfiguration

    constructor(properties: ServiceProperties) {
        super('AWS::AppRunner::Service', properties)
    }
}
