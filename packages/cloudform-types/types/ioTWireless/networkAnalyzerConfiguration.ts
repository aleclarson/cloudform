/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    Name: Value<string>
    Description?: Value<string>
    TraceContent?: {[key: string]: any}
    WirelessDevices?: List<Value<string>>
    WirelessGateways?: List<Value<string>>
    Tags?: List<ResourceTag>
}

class NetworkAnalyzerConfiguration extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::IoTWireless::NetworkAnalyzerConfiguration', properties)
    }
}
export { NetworkAnalyzerConfiguration as R }
