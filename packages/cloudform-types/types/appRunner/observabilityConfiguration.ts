/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TraceConfiguration {
    Vendor!: Value<string>

    constructor(properties: TraceConfiguration) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    ObservabilityConfigurationName?: Value<string>
    TraceConfiguration?: TraceConfiguration
    Tags?: List<ResourceTag>
}

class ObservabilityConfiguration extends ResourceBase<Properties> {
    static TraceConfiguration = TraceConfiguration

    constructor(properties?: Properties) {
        super('AWS::AppRunner::ObservabilityConfiguration', properties || {})
    }
}
export { ObservabilityConfiguration as R }
