/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CoreNetworkSegment {
    Name?: Value<string>
    EdgeLocations?: List<Value<string>>
    SharedSegments?: List<Value<string>>

    constructor(properties: CoreNetworkSegment) {
        Object.assign(this, properties)
    }
}

export class CoreNetworkEdge {
    EdgeLocation?: Value<string>
    Asn?: Value<number>
    InsideCidrBlocks?: List<Value<string>>

    constructor(properties: CoreNetworkEdge) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    GlobalNetworkId: Value<string>
    PolicyDocument?: {[key: string]: any}
    Description?: Value<string>
    Tags?: List<ResourceTag>
}

class CoreNetwork extends ResourceBase<Properties> {
    static CoreNetworkSegment = CoreNetworkSegment
    static CoreNetworkEdge = CoreNetworkEdge

    constructor(properties: Properties) {
        super('AWS::NetworkManager::CoreNetwork', properties)
    }
}
export { CoreNetwork as R }
