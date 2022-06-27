/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoRaWANDeviceProfile {
    SupportsClassB?: Value<boolean>
    ClassBTimeout?: Value<number>
    PingSlotPeriod?: Value<number>
    PingSlotDr?: Value<number>
    PingSlotFreq?: Value<number>
    SupportsClassC?: Value<boolean>
    ClassCTimeout?: Value<number>
    MacVersion?: Value<string>
    RegParamsRevision?: Value<string>
    MaxEirp?: Value<number>
    MaxDutyCycle?: Value<number>
    SupportsJoin?: Value<boolean>
    RfRegion?: Value<string>
    Supports32BitFCnt?: Value<boolean>

    constructor(properties: LoRaWANDeviceProfile) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name?: Value<string>
    LoRaWAN?: LoRaWANDeviceProfile
    Tags?: List<ResourceTag>
}

class DeviceProfile extends ResourceBase<Properties> {
    static LoRaWANDeviceProfile = LoRaWANDeviceProfile

    constructor(properties?: Properties) {
        super('AWS::IoTWireless::DeviceProfile', properties || {})
    }
}
export { DeviceProfile as R }
