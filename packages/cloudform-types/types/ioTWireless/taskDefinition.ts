/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class UpdateWirelessGatewayTaskCreate {
    UpdateDataSource?: Value<string>
    UpdateDataRole?: Value<string>
    LoRaWAN?: LoRaWANUpdateGatewayTaskCreate

    constructor(properties: UpdateWirelessGatewayTaskCreate) {
        Object.assign(this, properties)
    }
}

export class LoRaWANUpdateGatewayTaskEntry {
    CurrentVersion?: LoRaWANGatewayVersion
    UpdateVersion?: LoRaWANGatewayVersion

    constructor(properties: LoRaWANUpdateGatewayTaskEntry) {
        Object.assign(this, properties)
    }
}

export class LoRaWANGatewayVersion {
    PackageVersion?: Value<string>
    Model?: Value<string>
    Station?: Value<string>

    constructor(properties: LoRaWANGatewayVersion) {
        Object.assign(this, properties)
    }
}

export class LoRaWANUpdateGatewayTaskCreate {
    UpdateSignature?: Value<string>
    SigKeyCrc?: Value<number>
    CurrentVersion?: LoRaWANGatewayVersion
    UpdateVersion?: LoRaWANGatewayVersion

    constructor(properties: LoRaWANUpdateGatewayTaskCreate) {
        Object.assign(this, properties)
    }
}

export interface TaskDefinitionProperties {
    Name?: Value<string>
    AutoCreateTasks: Value<boolean>
    Update?: UpdateWirelessGatewayTaskCreate
    LoRaWANUpdateGatewayTaskEntry?: LoRaWANUpdateGatewayTaskEntry
    TaskDefinitionType?: Value<string>
    Tags?: List<ResourceTag>
}

export default class TaskDefinition extends ResourceBase<TaskDefinitionProperties> {
    static UpdateWirelessGatewayTaskCreate = UpdateWirelessGatewayTaskCreate
    static LoRaWANUpdateGatewayTaskEntry = LoRaWANUpdateGatewayTaskEntry
    static LoRaWANGatewayVersion = LoRaWANGatewayVersion
    static LoRaWANUpdateGatewayTaskCreate = LoRaWANUpdateGatewayTaskCreate

    constructor(properties: TaskDefinitionProperties) {
        super('AWS::IoTWireless::TaskDefinition', properties)
    }
}
