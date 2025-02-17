/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MetricPolicy {
    ContainerLevelMetrics!: Value<string>
    MetricPolicyRules?: List<MetricPolicyRule>

    constructor(properties: MetricPolicy) {
        Object.assign(this, properties)
    }
}

export class MetricPolicyRule {
    ObjectGroup!: Value<string>
    ObjectGroupName!: Value<string>

    constructor(properties: MetricPolicyRule) {
        Object.assign(this, properties)
    }
}

export class CorsRule {
    AllowedMethods?: List<Value<string>>
    AllowedOrigins?: List<Value<string>>
    ExposeHeaders?: List<Value<string>>
    MaxAgeSeconds?: Value<number>
    AllowedHeaders?: List<Value<string>>

    constructor(properties: CorsRule) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Policy?: Value<string>
    MetricPolicy?: MetricPolicy
    ContainerName: Value<string>
    CorsPolicy?: List<CorsRule>
    LifecyclePolicy?: Value<string>
    AccessLoggingEnabled?: Value<boolean>
    Tags?: List<ResourceTag>
}

class Container extends ResourceBase<Properties> {
    static MetricPolicy = MetricPolicy
    static MetricPolicyRule = MetricPolicyRule
    static CorsRule = CorsRule

    constructor(properties: Properties) {
        super('AWS::MediaStore::Container', properties)
    }
}
export { Container as R }
