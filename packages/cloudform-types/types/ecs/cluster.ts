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

export class ClusterSettings {
    Name?: Value<string>
    Value?: Value<string>

    constructor(properties: ClusterSettings) {
        Object.assign(this, properties)
    }
}

export class ExecuteCommandLogConfiguration {
    CloudWatchLogGroupName?: Value<string>
    CloudWatchEncryptionEnabled?: Value<boolean>
    S3BucketName?: Value<string>
    S3EncryptionEnabled?: Value<boolean>
    S3KeyPrefix?: Value<string>

    constructor(properties: ExecuteCommandLogConfiguration) {
        Object.assign(this, properties)
    }
}

export class ExecuteCommandConfiguration {
    KmsKeyId?: Value<string>
    Logging?: Value<string>
    LogConfiguration?: ExecuteCommandLogConfiguration

    constructor(properties: ExecuteCommandConfiguration) {
        Object.assign(this, properties)
    }
}

export class ClusterConfiguration {
    ExecuteCommandConfiguration?: ExecuteCommandConfiguration

    constructor(properties: ClusterConfiguration) {
        Object.assign(this, properties)
    }
}

export class CapacityProviderStrategyItem {
    CapacityProvider?: Value<string>
    Weight?: Value<number>
    Base?: Value<number>

    constructor(properties: CapacityProviderStrategyItem) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Tags?: List<ResourceTag>
    ClusterName?: Value<string>
    ClusterSettings?: List<ClusterSettings>
    Configuration?: ClusterConfiguration
    CapacityProviders?: List<Value<string>>
    DefaultCapacityProviderStrategy?: List<CapacityProviderStrategyItem>
}

class Cluster extends ResourceBase<Properties> {
    static ClusterSettings = ClusterSettings
    static ExecuteCommandLogConfiguration = ExecuteCommandLogConfiguration
    static ExecuteCommandConfiguration = ExecuteCommandConfiguration
    static ClusterConfiguration = ClusterConfiguration
    static CapacityProviderStrategyItem = CapacityProviderStrategyItem

    constructor(properties?: Properties) {
        super('AWS::ECS::Cluster', properties || {})
    }
}
export { Cluster as R }
