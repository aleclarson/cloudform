/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoRaWANServiceProfile {
    UlRate?: Value<number>
    UlBucketSize?: Value<number>
    UlRatePolicy?: Value<string>
    DlRate?: Value<number>
    DlBucketSize?: Value<number>
    DlRatePolicy?: Value<string>
    AddGwMetadata?: Value<boolean>
    DevStatusReqFreq?: Value<number>
    ReportDevStatusBattery?: Value<boolean>
    ReportDevStatusMargin?: Value<boolean>
    DrMin?: Value<number>
    DrMax?: Value<number>
    ChannelMask?: Value<string>
    PrAllowed?: Value<boolean>
    HrAllowed?: Value<boolean>
    RaAllowed?: Value<boolean>
    NwkGeoLoc?: Value<boolean>
    TargetPer?: Value<number>
    MinGwDiversity?: Value<number>

    constructor(properties: LoRaWANServiceProfile) {
        Object.assign(this, properties)
    }
}

export interface ServiceProfileProperties {
    Name?: Value<string>
    LoRaWAN?: LoRaWANServiceProfile
    Tags?: List<ResourceTag>
}

export default class ServiceProfile extends ResourceBase<ServiceProfileProperties> {
    static LoRaWANServiceProfile = LoRaWANServiceProfile

    constructor(properties?: ServiceProfileProperties) {
        super('AWS::IoTWireless::ServiceProfile', properties || {})
    }
}
