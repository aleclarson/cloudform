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

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class NumberFilter {
    LowerInclusive?: Value<number>
    UpperInclusive?: Value<number>

    constructor(properties: NumberFilter) {
        Object.assign(this, properties)
    }
}

export class PortRangeFilter {
    BeginInclusive?: Value<number>
    EndInclusive?: Value<number>

    constructor(properties: PortRangeFilter) {
        Object.assign(this, properties)
    }
}

export class DateFilter {
    EndInclusive?: Value<number>
    StartInclusive?: Value<number>

    constructor(properties: DateFilter) {
        Object.assign(this, properties)
    }
}

export class MapFilter {
    Comparison!: Value<string>
    Key?: Value<string>
    Value?: Value<string>

    constructor(properties: MapFilter) {
        Object.assign(this, properties)
    }
}

export class PackageFilter {
    Architecture?: StringFilter
    Epoch?: NumberFilter
    Name?: StringFilter
    Release?: StringFilter
    SourceLayerHash?: StringFilter
    Version?: StringFilter

    constructor(properties: PackageFilter) {
        Object.assign(this, properties)
    }
}

export class StringFilter {
    Comparison!: Value<string>
    Value!: Value<string>

    constructor(properties: StringFilter) {
        Object.assign(this, properties)
    }
}

export class FilterCriteria {
    AwsAccountId?: List<StringFilter>
    ComponentId?: List<StringFilter>
    ComponentType?: List<StringFilter>
    Ec2InstanceImageId?: List<StringFilter>
    Ec2InstanceSubnetId?: List<StringFilter>
    Ec2InstanceVpcId?: List<StringFilter>
    EcrImageArchitecture?: List<StringFilter>
    EcrImageHash?: List<StringFilter>
    EcrImageTags?: List<StringFilter>
    EcrImagePushedAt?: List<DateFilter>
    EcrImageRegistry?: List<StringFilter>
    EcrImageRepositoryName?: List<StringFilter>
    FindingArn?: List<StringFilter>
    FindingStatus?: List<StringFilter>
    FindingType?: List<StringFilter>
    FirstObservedAt?: List<DateFilter>
    InspectorScore?: List<NumberFilter>
    LastObservedAt?: List<DateFilter>
    NetworkProtocol?: List<StringFilter>
    PortRange?: List<PortRangeFilter>
    RelatedVulnerabilities?: List<StringFilter>
    ResourceId?: List<StringFilter>
    ResourceTags?: List<MapFilter>
    ResourceType?: List<StringFilter>
    Severity?: List<StringFilter>
    Title?: List<StringFilter>
    UpdatedAt?: List<DateFilter>
    VendorSeverity?: List<StringFilter>
    VulnerabilityId?: List<StringFilter>
    VulnerabilitySource?: List<StringFilter>
    VulnerablePackages?: List<PackageFilter>

    constructor(properties: FilterCriteria) {
        Object.assign(this, properties)
    }
}

export interface FilterProperties {
    Name: Value<string>
    Description?: Value<string>
    FilterCriteria: FilterCriteria
    FilterAction: Value<string>
}

export default class Filter extends ResourceBase<FilterProperties> {
    static NumberFilter = NumberFilter
    static PortRangeFilter = PortRangeFilter
    static DateFilter = DateFilter
    static MapFilter = MapFilter
    static PackageFilter = PackageFilter
    static StringFilter = StringFilter
    static FilterCriteria = FilterCriteria

    constructor(properties: FilterProperties) {
        super('AWS::InspectorV2::Filter', properties)
    }
}
