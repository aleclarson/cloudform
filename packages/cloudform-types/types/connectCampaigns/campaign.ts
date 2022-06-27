/* Generated from: 
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class OutboundCallConfig {
    ConnectContactFlowArn!: Value<string>
    ConnectSourcePhoneNumber?: Value<string>
    ConnectQueueArn!: Value<string>

    constructor(properties: OutboundCallConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    ConnectInstanceArn: Value<string>
    Name: Value<string>
    OutboundCallConfig: OutboundCallConfig
    Tags?: List<ResourceTag>
}

class Campaign extends ResourceBase<Properties> {
    static OutboundCallConfig = OutboundCallConfig

    constructor(properties: Properties) {
        super('AWS::ConnectCampaigns::Campaign', properties)
    }
}
export { Campaign as R }
