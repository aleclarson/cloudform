/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface NetworkProfileProperties {
    ProjectArn: Value<string>
    Description?: Value<string>
    DownlinkBandwidthBits?: Value<number>
    DownlinkDelayMs?: Value<number>
    DownlinkJitterMs?: Value<number>
    DownlinkLossPercent?: Value<number>
    Name: Value<string>
    UplinkBandwidthBits?: Value<number>
    UplinkDelayMs?: Value<number>
    UplinkJitterMs?: Value<number>
    UplinkLossPercent?: Value<number>
    Tags?: List<ResourceTag>
}

export default class NetworkProfile extends ResourceBase<NetworkProfileProperties> {


    constructor(properties: NetworkProfileProperties) {
        super('AWS::DeviceFarm::NetworkProfile', properties)
    }
}
