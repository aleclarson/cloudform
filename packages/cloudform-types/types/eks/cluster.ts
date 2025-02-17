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

export class Provider {
    KeyArn?: Value<string>

    constructor(properties: Provider) {
        Object.assign(this, properties)
    }
}

export class ClusterLogging {
    EnabledTypes?: List<LoggingTypeConfig>

    constructor(properties: ClusterLogging) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfig {
    Provider?: Provider
    Resources?: List<Value<string>>

    constructor(properties: EncryptionConfig) {
        Object.assign(this, properties)
    }
}

export class KubernetesNetworkConfig {
    ServiceIpv4Cidr?: Value<string>
    ServiceIpv6Cidr?: Value<string>
    IpFamily?: Value<string>

    constructor(properties: KubernetesNetworkConfig) {
        Object.assign(this, properties)
    }
}

export class Logging {
    ClusterLogging?: ClusterLogging

    constructor(properties: Logging) {
        Object.assign(this, properties)
    }
}

export class LoggingTypeConfig {
    Type?: Value<string>

    constructor(properties: LoggingTypeConfig) {
        Object.assign(this, properties)
    }
}

export class ResourcesVpcConfig {
    EndpointPrivateAccess?: Value<boolean>
    EndpointPublicAccess?: Value<boolean>
    PublicAccessCidrs?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>
    SubnetIds!: List<Value<string>>

    constructor(properties: ResourcesVpcConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    EncryptionConfig?: List<EncryptionConfig>
    KubernetesNetworkConfig?: KubernetesNetworkConfig
    Logging?: Logging
    Name?: Value<string>
    ResourcesVpcConfig: ResourcesVpcConfig
    RoleArn: Value<string>
    Version?: Value<string>
    Tags?: List<ResourceTag>
}

class Cluster extends ResourceBase<Properties> {
    static Provider = Provider
    static ClusterLogging = ClusterLogging
    static EncryptionConfig = EncryptionConfig
    static KubernetesNetworkConfig = KubernetesNetworkConfig
    static Logging = Logging
    static LoggingTypeConfig = LoggingTypeConfig
    static ResourcesVpcConfig = ResourcesVpcConfig

    constructor(properties: Properties) {
        super('AWS::EKS::Cluster', properties)
    }
}
export { Cluster as R }
