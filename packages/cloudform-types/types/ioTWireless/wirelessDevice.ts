/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AbpV11 {
    DevAddr!: Value<string>
    SessionKeys!: SessionKeysAbpV11

    constructor(properties: AbpV11) {
        Object.assign(this, properties)
    }
}

export class LoRaWANDevice {
    DevEui?: Value<string>
    DeviceProfileId?: Value<string>
    ServiceProfileId?: Value<string>
    OtaaV11?: OtaaV11
    OtaaV10x?: OtaaV10x
    AbpV11?: AbpV11
    AbpV10x?: AbpV10x

    constructor(properties: LoRaWANDevice) {
        Object.assign(this, properties)
    }
}

export class SessionKeysAbpV11 {
    FNwkSIntKey!: Value<string>
    SNwkSIntKey!: Value<string>
    NwkSEncKey!: Value<string>
    AppSKey!: Value<string>

    constructor(properties: SessionKeysAbpV11) {
        Object.assign(this, properties)
    }
}

export class AbpV10x {
    DevAddr!: Value<string>
    SessionKeys!: SessionKeysAbpV10x

    constructor(properties: AbpV10x) {
        Object.assign(this, properties)
    }
}

export class OtaaV11 {
    AppKey!: Value<string>
    NwkKey!: Value<string>
    JoinEui!: Value<string>

    constructor(properties: OtaaV11) {
        Object.assign(this, properties)
    }
}

export class SessionKeysAbpV10x {
    NwkSKey!: Value<string>
    AppSKey!: Value<string>

    constructor(properties: SessionKeysAbpV10x) {
        Object.assign(this, properties)
    }
}

export class OtaaV10x {
    AppKey!: Value<string>
    AppEui!: Value<string>

    constructor(properties: OtaaV10x) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Type: Value<string>
    Name?: Value<string>
    Description?: Value<string>
    DestinationName: Value<string>
    LoRaWAN?: LoRaWANDevice
    Tags?: List<ResourceTag>
    ThingArn?: Value<string>
    LastUplinkReceivedAt?: Value<string>
}

class WirelessDevice extends ResourceBase<Properties> {
    static AbpV11 = AbpV11
    static LoRaWANDevice = LoRaWANDevice
    static SessionKeysAbpV11 = SessionKeysAbpV11
    static AbpV10x = AbpV10x
    static OtaaV11 = OtaaV11
    static SessionKeysAbpV10x = SessionKeysAbpV10x
    static OtaaV10x = OtaaV10x

    constructor(properties: Properties) {
        super('AWS::IoTWireless::WirelessDevice', properties)
    }
}
export { WirelessDevice as R }
