/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class S3MachineLearningModelResourceData {
    OwnerSetting?: ResourceDownloadOwnerSetting
    DestinationPath!: Value<string>
    S3Uri!: Value<string>

    constructor(properties: S3MachineLearningModelResourceData) {
        Object.assign(this, properties)
    }
}

export class SecretsManagerSecretResourceData {
    ARN!: Value<string>
    AdditionalStagingLabelsToDownload?: List<Value<string>>

    constructor(properties: SecretsManagerSecretResourceData) {
        Object.assign(this, properties)
    }
}

export class ResourceDownloadOwnerSetting {
    GroupOwner!: Value<string>
    GroupPermission!: Value<string>

    constructor(properties: ResourceDownloadOwnerSetting) {
        Object.assign(this, properties)
    }
}

export class SageMakerMachineLearningModelResourceData {
    OwnerSetting?: ResourceDownloadOwnerSetting
    DestinationPath!: Value<string>
    SageMakerJobArn!: Value<string>

    constructor(properties: SageMakerMachineLearningModelResourceData) {
        Object.assign(this, properties)
    }
}

export class GroupOwnerSetting {
    AutoAddGroupOwner!: Value<boolean>
    GroupOwner?: Value<string>

    constructor(properties: GroupOwnerSetting) {
        Object.assign(this, properties)
    }
}

export class LocalDeviceResourceData {
    SourcePath!: Value<string>
    GroupOwnerSetting?: GroupOwnerSetting

    constructor(properties: LocalDeviceResourceData) {
        Object.assign(this, properties)
    }
}

export class ResourceDefinitionVersion {
    Resources!: List<ResourceInstance>

    constructor(properties: ResourceDefinitionVersion) {
        Object.assign(this, properties)
    }
}

export class LocalVolumeResourceData {
    SourcePath!: Value<string>
    DestinationPath!: Value<string>
    GroupOwnerSetting?: GroupOwnerSetting

    constructor(properties: LocalVolumeResourceData) {
        Object.assign(this, properties)
    }
}

export class ResourceInstance {
    ResourceDataContainer!: ResourceDataContainer
    Id!: Value<string>
    Name!: Value<string>

    constructor(properties: ResourceInstance) {
        Object.assign(this, properties)
    }
}

export class ResourceDataContainer {
    SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData
    SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData
    LocalVolumeResourceData?: LocalVolumeResourceData
    LocalDeviceResourceData?: LocalDeviceResourceData
    S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData

    constructor(properties: ResourceDataContainer) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    InitialVersion?: ResourceDefinitionVersion
    Tags?: {[key: string]: any}
    Name: Value<string>
}

class ResourceDefinition extends ResourceBase<Properties> {
    static S3MachineLearningModelResourceData = S3MachineLearningModelResourceData
    static SecretsManagerSecretResourceData = SecretsManagerSecretResourceData
    static ResourceDownloadOwnerSetting = ResourceDownloadOwnerSetting
    static SageMakerMachineLearningModelResourceData = SageMakerMachineLearningModelResourceData
    static GroupOwnerSetting = GroupOwnerSetting
    static LocalDeviceResourceData = LocalDeviceResourceData
    static ResourceDefinitionVersion = ResourceDefinitionVersion
    static LocalVolumeResourceData = LocalVolumeResourceData
    static ResourceInstance = ResourceInstance
    static ResourceDataContainer = ResourceDataContainer

    constructor(properties: Properties) {
        super('AWS::Greengrass::ResourceDefinition', properties)
    }
}
export { ResourceDefinition as R }
