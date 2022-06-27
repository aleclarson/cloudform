/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Greengrass {
    GroupArn!: Value<string>

    constructor(properties: Greengrass) {
        Object.assign(this, properties)
    }
}

export class GreengrassV2 {
    CoreDeviceThingName!: Value<string>

    constructor(properties: GreengrassV2) {
        Object.assign(this, properties)
    }
}

export class GatewayCapabilitySummary {
    CapabilityNamespace!: Value<string>
    CapabilityConfiguration?: Value<string>

    constructor(properties: GatewayCapabilitySummary) {
        Object.assign(this, properties)
    }
}

export class GatewayPlatform {
    Greengrass?: Greengrass
    GreengrassV2?: GreengrassV2

    constructor(properties: GatewayPlatform) {
        Object.assign(this, properties)
    }
}

export interface GatewayProperties {
    GatewayName: Value<string>
    GatewayPlatform: GatewayPlatform
    Tags?: List<ResourceTag>
    GatewayCapabilitySummaries?: List<GatewayCapabilitySummary>
}

export default class Gateway extends ResourceBase<GatewayProperties> {
    static Greengrass = Greengrass
    static GreengrassV2 = GreengrassV2
    static GatewayCapabilitySummary = GatewayCapabilitySummary
    static GatewayPlatform = GatewayPlatform

    constructor(properties: GatewayProperties) {
        super('AWS::IoTSiteWise::Gateway', properties)
    }
}
