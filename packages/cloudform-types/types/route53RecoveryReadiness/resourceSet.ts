/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TargetResource {
    NLBResource?: NLBResource
    R53Resource?: R53ResourceRecord

    constructor(properties: TargetResource) {
        Object.assign(this, properties)
    }
}

export class Resource {
    ResourceArn?: Value<string>
    ComponentId?: Value<string>
    DnsTargetResource?: DNSTargetResource
    ReadinessScopes?: List<Value<string>>

    constructor(properties: Resource) {
        Object.assign(this, properties)
    }
}

export class DNSTargetResource {
    DomainName?: Value<string>
    RecordSetId?: Value<string>
    HostedZoneArn?: Value<string>
    RecordType?: Value<string>
    TargetResource?: TargetResource

    constructor(properties: DNSTargetResource) {
        Object.assign(this, properties)
    }
}

export class NLBResource {
    Arn?: Value<string>

    constructor(properties: NLBResource) {
        Object.assign(this, properties)
    }
}

export class R53ResourceRecord {
    DomainName?: Value<string>
    RecordSetId?: Value<string>

    constructor(properties: R53ResourceRecord) {
        Object.assign(this, properties)
    }
}

export interface ResourceSetProperties {
    ResourceSetName: Value<string>
    Resources: List<Resource>
    ResourceSetType: Value<string>
    Tags?: List<ResourceTag>
}

export default class ResourceSet extends ResourceBase<ResourceSetProperties> {
    static TargetResource = TargetResource
    static Resource = Resource
    static DNSTargetResource = DNSTargetResource
    static NLBResource = NLBResource
    static R53ResourceRecord = R53ResourceRecord

    constructor(properties: ResourceSetProperties) {
        super('AWS::Route53RecoveryReadiness::ResourceSet', properties)
    }
}
