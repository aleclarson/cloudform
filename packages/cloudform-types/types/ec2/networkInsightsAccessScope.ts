/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class PathStatementRequest {
    PacketHeaderStatement?: PacketHeaderStatementRequest
    ResourceStatement?: ResourceStatementRequest

    constructor(properties: PathStatementRequest) {
        Object.assign(this, properties)
    }
}

export class AccessScopePathRequest {
    Source?: PathStatementRequest
    Destination?: PathStatementRequest
    ThroughResources?: List<ThroughResourcesStatementRequest>

    constructor(properties: AccessScopePathRequest) {
        Object.assign(this, properties)
    }
}

export class ThroughResourcesStatementRequest {
    ResourceStatement?: ResourceStatementRequest

    constructor(properties: ThroughResourcesStatementRequest) {
        Object.assign(this, properties)
    }
}

export class PacketHeaderStatementRequest {
    SourceAddresses?: List<Value<string>>
    DestinationAddresses?: List<Value<string>>
    SourcePorts?: List<Value<string>>
    DestinationPorts?: List<Value<string>>
    SourcePrefixLists?: List<Value<string>>
    DestinationPrefixLists?: List<Value<string>>
    Protocols?: List<Value<string>>

    constructor(properties: PacketHeaderStatementRequest) {
        Object.assign(this, properties)
    }
}

export class ResourceStatementRequest {
    Resources?: List<Value<string>>
    ResourceTypes?: List<Value<string>>

    constructor(properties: ResourceStatementRequest) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Tags?: List<ResourceTag>
    MatchPaths?: List<AccessScopePathRequest>
    ExcludePaths?: List<AccessScopePathRequest>
}

class NetworkInsightsAccessScope extends ResourceBase<Properties> {
    static PathStatementRequest = PathStatementRequest
    static AccessScopePathRequest = AccessScopePathRequest
    static ThroughResourcesStatementRequest = ThroughResourcesStatementRequest
    static PacketHeaderStatementRequest = PacketHeaderStatementRequest
    static ResourceStatementRequest = ResourceStatementRequest

    constructor(properties?: Properties) {
        super('AWS::EC2::NetworkInsightsAccessScope', properties || {})
    }
}
export { NetworkInsightsAccessScope as R }
