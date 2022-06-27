/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoRaWAN {
    RfRegion!: Value<string>
    DlClass!: Value<string>
    NumberOfDevicesRequested?: Value<number>
    NumberOfDevicesInGroup?: Value<number>

    constructor(properties: LoRaWAN) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name?: Value<string>
    Description?: Value<string>
    LoRaWAN: LoRaWAN
    Tags?: List<ResourceTag>
    AssociateWirelessDevice?: Value<string>
    DisassociateWirelessDevice?: Value<string>
}

class MulticastGroup extends ResourceBase<Properties> {
    static LoRaWAN = LoRaWAN

    constructor(properties: Properties) {
        super('AWS::IoTWireless::MulticastGroup', properties)
    }
}
export { MulticastGroup as R }
