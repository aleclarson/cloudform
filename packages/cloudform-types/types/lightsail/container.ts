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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EnvironmentVariable {
    Variable?: Value<string>
    Value?: Value<string>

    constructor(properties: EnvironmentVariable) {
        Object.assign(this, properties)
    }
}

export class ContainerInner {
    ContainerName?: Value<string>
    Command?: List<Value<string>>
    Environment?: List<EnvironmentVariable>
    Image?: Value<string>
    Ports?: List<PortInfo>

    constructor(properties: ContainerInner) {
        Object.assign(this, properties)
    }
}

export class PublicEndpoint {
    ContainerName?: Value<string>
    ContainerPort?: Value<number>
    HealthCheckConfig?: HealthCheckConfig

    constructor(properties: PublicEndpoint) {
        Object.assign(this, properties)
    }
}

export class PortInfo {
    Port?: Value<string>
    Protocol?: Value<string>

    constructor(properties: PortInfo) {
        Object.assign(this, properties)
    }
}

export class ContainerServiceDeployment {
    Containers?: List<Container>
    PublicEndpoint?: PublicEndpoint

    constructor(properties: ContainerServiceDeployment) {
        Object.assign(this, properties)
    }
}

export class PublicDomainName {
    CertificateName?: Value<string>
    DomainNames?: List<Value<string>>

    constructor(properties: PublicDomainName) {
        Object.assign(this, properties)
    }
}

export class HealthCheckConfig {
    HealthyThreshold?: Value<number>
    IntervalSeconds?: Value<number>
    Path?: Value<string>
    SuccessCodes?: Value<string>
    TimeoutSeconds?: Value<number>
    UnhealthyThreshold?: Value<number>

    constructor(properties: HealthCheckConfig) {
        Object.assign(this, properties)
    }
}

export interface ContainerProperties {
    ServiceName: Value<string>
    Power: Value<string>
    Scale: Value<number>
    PublicDomainNames?: List<PublicDomainName>
    ContainerServiceDeployment?: ContainerServiceDeployment
    IsDisabled?: Value<boolean>
    Tags?: List<ResourceTag>
}

export default class Container extends ResourceBase<ContainerProperties> {
    static EnvironmentVariable = EnvironmentVariable
    static Container = ContainerInner
    static PublicEndpoint = PublicEndpoint
    static PortInfo = PortInfo
    static ContainerServiceDeployment = ContainerServiceDeployment
    static PublicDomainName = PublicDomainName
    static HealthCheckConfig = HealthCheckConfig

    constructor(properties: ContainerProperties) {
        super('AWS::Lightsail::Container', properties)
    }
}
