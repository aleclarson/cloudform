/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DeviceInner {
    Description?: Value<string>
    DeviceName!: Value<string>
    IotThingName?: Value<string>

    constructor(properties: DeviceInner) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    DeviceFleetName: Value<string>
    Device?: Device
    Tags?: List<ResourceTag>
}

class Device extends ResourceBase<Properties> {
    static Device = DeviceInner

    constructor(properties: Properties) {
        super('AWS::SageMaker::Device', properties)
    }
}
export { Device as R }
