/* Generated from: 
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    DataDelayOffsetInMinutes?: Value<number>
    DataInputConfiguration: {[key: string]: any}
    DataOutputConfiguration: {[key: string]: any}
    DataUploadFrequency: Value<string>
    InferenceSchedulerName?: Value<string>
    ModelName: Value<string>
    RoleArn: Value<string>
    ServerSideKmsKeyId?: Value<string>
    Tags?: List<ResourceTag>
}

class InferenceScheduler extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::LookoutEquipment::InferenceScheduler', properties)
    }
}
export { InferenceScheduler as R }
