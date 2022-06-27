/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
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

export class FastLaunchSnapshotConfiguration {
    TargetResourceCount?: Value<number>

    constructor(properties: FastLaunchSnapshotConfiguration) {
        Object.assign(this, properties)
    }
}

export class TargetContainerRepository {
    Service?: Value<string>
    RepositoryName?: Value<string>

    constructor(properties: TargetContainerRepository) {
        Object.assign(this, properties)
    }
}

export class AmiDistributionConfiguration {
    Name?: Value<string>
    KmsKeyId?: Value<string>
    Description?: Value<string>
    AmiTags?: {[key: string]: Value<string>}
    TargetAccountIds?: List<Value<string>>
    LaunchPermissionConfiguration?: LaunchPermissionConfiguration

    constructor(properties: AmiDistributionConfiguration) {
        Object.assign(this, properties)
    }
}

export class Distribution {
    Region!: Value<string>
    AmiDistributionConfiguration?: AmiDistributionConfiguration
    ContainerDistributionConfiguration?: ContainerDistributionConfiguration
    LicenseConfigurationArns?: List<Value<string>>
    LaunchTemplateConfigurations?: List<LaunchTemplateConfiguration>
    FastLaunchConfigurations?: List<FastLaunchConfiguration>

    constructor(properties: Distribution) {
        Object.assign(this, properties)
    }
}

export class FastLaunchLaunchTemplateSpecification {
    LaunchTemplateId?: Value<string>
    LaunchTemplateName?: Value<string>
    LaunchTemplateVersion?: Value<string>

    constructor(properties: FastLaunchLaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class ContainerDistributionConfiguration {
    Description?: Value<string>
    ContainerTags?: List<Value<string>>
    TargetRepository?: TargetContainerRepository

    constructor(properties: ContainerDistributionConfiguration) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateConfiguration {
    LaunchTemplateId?: Value<string>
    AccountId?: Value<string>
    SetDefaultVersion?: Value<boolean>

    constructor(properties: LaunchTemplateConfiguration) {
        Object.assign(this, properties)
    }
}

export class FastLaunchConfiguration {
    AccountId?: Value<string>
    Enabled?: Value<boolean>
    LaunchTemplate?: FastLaunchLaunchTemplateSpecification
    MaxParallelLaunches?: Value<number>
    SnapshotConfiguration?: FastLaunchSnapshotConfiguration

    constructor(properties: FastLaunchConfiguration) {
        Object.assign(this, properties)
    }
}

export class LaunchPermissionConfiguration {
    UserIds?: List<Value<string>>
    UserGroups?: List<Value<string>>
    OrganizationArns?: List<Value<string>>
    OrganizationalUnitArns?: List<Value<string>>

    constructor(properties: LaunchPermissionConfiguration) {
        Object.assign(this, properties)
    }
}

export interface DistributionConfigurationProperties {
    Name: Value<string>
    Description?: Value<string>
    Distributions: List<Distribution>
    Tags?: {[key: string]: Value<string>}
}

export default class DistributionConfiguration extends ResourceBase<DistributionConfigurationProperties> {
    static FastLaunchSnapshotConfiguration = FastLaunchSnapshotConfiguration
    static TargetContainerRepository = TargetContainerRepository
    static AmiDistributionConfiguration = AmiDistributionConfiguration
    static Distribution = Distribution
    static FastLaunchLaunchTemplateSpecification = FastLaunchLaunchTemplateSpecification
    static ContainerDistributionConfiguration = ContainerDistributionConfiguration
    static LaunchTemplateConfiguration = LaunchTemplateConfiguration
    static FastLaunchConfiguration = FastLaunchConfiguration
    static LaunchPermissionConfiguration = LaunchPermissionConfiguration

    constructor(properties: DistributionConfigurationProperties) {
        super('AWS::ImageBuilder::DistributionConfiguration', properties)
    }
}
