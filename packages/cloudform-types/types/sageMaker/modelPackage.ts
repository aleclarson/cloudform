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

export class Explainability {
    Report?: MetricsSource

    constructor(properties: Explainability) {
        Object.assign(this, properties)
    }
}

export class ValidationSpecification {
    ValidationProfiles!: List<ValidationProfile>
    ValidationRole!: Value<string>

    constructor(properties: ValidationSpecification) {
        Object.assign(this, properties)
    }
}

export class TransformJobDefinition {
    Environment?: Environment
    BatchStrategy?: Value<string>
    MaxConcurrentTransforms?: Value<number>
    MaxPayloadInMB?: Value<number>
    TransformInput!: TransformInput
    TransformOutput!: TransformOutput
    TransformResources!: TransformResources

    constructor(properties: TransformJobDefinition) {
        Object.assign(this, properties)
    }
}

export class DriftCheckModelDataQuality {
    Constraints?: MetricsSource
    Statistics?: MetricsSource

    constructor(properties: DriftCheckModelDataQuality) {
        Object.assign(this, properties)
    }
}

export class FileSource {
    ContentDigest?: Value<string>
    ContentType?: Value<string>
    S3Uri!: Value<string>

    constructor(properties: FileSource) {
        Object.assign(this, properties)
    }
}

export class MetricsSource {
    ContentDigest?: Value<string>
    ContentType!: Value<string>
    S3Uri!: Value<string>

    constructor(properties: MetricsSource) {
        Object.assign(this, properties)
    }
}

export class ModelPackageStatusItem {
    FailureReason?: Value<string>
    Name!: Value<string>
    Status!: Value<string>

    constructor(properties: ModelPackageStatusItem) {
        Object.assign(this, properties)
    }
}

export class AdditionalInferenceSpecificationDefinition {
    Containers!: List<ModelPackageContainerDefinition>
    Description?: Value<string>
    Name!: Value<string>
    SupportedContentTypes?: List<Value<string>>
    SupportedRealtimeInferenceInstanceTypes?: List<Value<string>>
    SupportedResponseMIMETypes?: List<Value<string>>
    SupportedTransformInstanceTypes?: List<Value<string>>

    constructor(properties: AdditionalInferenceSpecificationDefinition) {
        Object.assign(this, properties)
    }
}

export class SourceAlgorithmSpecification {
    SourceAlgorithms!: List<SourceAlgorithm>

    constructor(properties: SourceAlgorithmSpecification) {
        Object.assign(this, properties)
    }
}

export class ModelQuality {
    Constraints?: MetricsSource
    Statistics?: MetricsSource

    constructor(properties: ModelQuality) {
        Object.assign(this, properties)
    }
}

export type Environment = {[key: string]: any}

export class S3DataSource {
    S3DataType!: Value<string>
    S3Uri!: Value<string>

    constructor(properties: S3DataSource) {
        Object.assign(this, properties)
    }
}

export class ModelMetrics {
    Bias?: Bias
    Explainability?: Explainability
    ModelDataQuality?: ModelDataQuality
    ModelQuality?: ModelQuality

    constructor(properties: ModelMetrics) {
        Object.assign(this, properties)
    }
}

export class SourceAlgorithm {
    AlgorithmName!: Value<string>
    ModelDataUrl?: Value<string>

    constructor(properties: SourceAlgorithm) {
        Object.assign(this, properties)
    }
}

export class InferenceSpecification {
    Containers!: List<ModelPackageContainerDefinition>
    SupportedContentTypes!: List<Value<string>>
    SupportedRealtimeInferenceInstanceTypes?: List<Value<string>>
    SupportedResponseMIMETypes!: List<Value<string>>
    SupportedTransformInstanceTypes?: List<Value<string>>

    constructor(properties: InferenceSpecification) {
        Object.assign(this, properties)
    }
}

export class MetadataProperties {
    CommitId?: Value<string>
    GeneratedBy?: Value<string>
    ProjectId?: Value<string>
    Repository?: Value<string>

    constructor(properties: MetadataProperties) {
        Object.assign(this, properties)
    }
}

export class DriftCheckExplainability {
    Constraints?: MetricsSource
    ConfigFile?: FileSource

    constructor(properties: DriftCheckExplainability) {
        Object.assign(this, properties)
    }
}

export class TransformResources {
    InstanceCount!: Value<number>
    InstanceType!: Value<string>
    VolumeKmsKeyId?: Value<string>

    constructor(properties: TransformResources) {
        Object.assign(this, properties)
    }
}

export class ModelPackageContainerDefinition {
    ContainerHostname?: Value<string>
    Environment?: Environment
    ModelInput?: {[key: string]: any}
    Image!: Value<string>
    ImageDigest?: Value<string>
    ModelDataUrl?: Value<string>
    ProductId?: Value<string>
    Framework?: Value<string>
    FrameworkVersion?: Value<string>
    NearestModelName?: Value<string>

    constructor(properties: ModelPackageContainerDefinition) {
        Object.assign(this, properties)
    }
}

export class ValidationProfile {
    TransformJobDefinition!: TransformJobDefinition
    ProfileName!: Value<string>

    constructor(properties: ValidationProfile) {
        Object.assign(this, properties)
    }
}

export class Bias {
    Report?: MetricsSource
    PreTrainingReport?: MetricsSource
    PostTrainingReport?: MetricsSource

    constructor(properties: Bias) {
        Object.assign(this, properties)
    }
}

export class DriftCheckModelQuality {
    Constraints?: MetricsSource
    Statistics?: MetricsSource

    constructor(properties: DriftCheckModelQuality) {
        Object.assign(this, properties)
    }
}

export class DataSource {
    S3DataSource!: S3DataSource

    constructor(properties: DataSource) {
        Object.assign(this, properties)
    }
}

export class TransformOutput {
    Accept?: Value<string>
    KmsKeyId?: Value<string>
    S3OutputPath!: Value<string>
    AssembleWith?: Value<string>

    constructor(properties: TransformOutput) {
        Object.assign(this, properties)
    }
}

export class ModelPackageStatusDetails {
    ImageScanStatuses?: List<ModelPackageStatusItem>
    ValidationStatuses!: List<ModelPackageStatusItem>

    constructor(properties: ModelPackageStatusDetails) {
        Object.assign(this, properties)
    }
}

export class DriftCheckBaselines {
    Bias?: DriftCheckBias
    Explainability?: DriftCheckExplainability
    ModelDataQuality?: DriftCheckModelDataQuality
    ModelQuality?: DriftCheckModelQuality

    constructor(properties: DriftCheckBaselines) {
        Object.assign(this, properties)
    }
}

export class ModelDataQuality {
    Constraints?: MetricsSource
    Statistics?: MetricsSource

    constructor(properties: ModelDataQuality) {
        Object.assign(this, properties)
    }
}

export class TransformInput {
    CompressionType?: Value<string>
    ContentType?: Value<string>
    DataSource!: DataSource
    SplitType?: Value<string>

    constructor(properties: TransformInput) {
        Object.assign(this, properties)
    }
}

export class DriftCheckBias {
    PostTrainingConstraints?: MetricsSource
    PreTrainingConstraints?: MetricsSource
    ConfigFile?: FileSource

    constructor(properties: DriftCheckBias) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Tag?: ResourceTag
    Tags?: List<ResourceTag>
    AdditionalInferenceSpecifications?: List<AdditionalInferenceSpecificationDefinition>
    AdditionalInferenceSpecificationDefinition?: AdditionalInferenceSpecificationDefinition
    CertifyForMarketplace?: Value<boolean>
    ClientToken?: Value<string>
    CustomerMetadataProperties?: {[key: string]: Value<string>}
    Domain?: Value<string>
    DriftCheckBaselines?: DriftCheckBaselines
    InferenceSpecification?: InferenceSpecification
    MetadataProperties?: MetadataProperties
    ModelApprovalStatus?: Value<string>
    ModelMetrics?: ModelMetrics
    ModelPackageDescription?: Value<string>
    ModelPackageGroupName?: Value<string>
    ModelPackageName?: Value<string>
    SamplePayloadUrl?: Value<string>
    SourceAlgorithmSpecification?: SourceAlgorithmSpecification
    Task?: Value<string>
    ValidationSpecification?: ValidationSpecification
    ApprovalDescription?: Value<string>
    LastModifiedTime?: Value<string>
    ModelPackageVersion?: Value<number>
    AdditionalInferenceSpecificationsToAdd?: List<AdditionalInferenceSpecificationDefinition>
    ModelPackageStatusDetails?: ModelPackageStatusDetails
    ModelPackageStatusItem?: ModelPackageStatusItem
    Environment?: {[key: string]: Value<string>}
}

class ModelPackage extends ResourceBase<Properties> {
    static Explainability = Explainability
    static ValidationSpecification = ValidationSpecification
    static TransformJobDefinition = TransformJobDefinition
    static DriftCheckModelDataQuality = DriftCheckModelDataQuality
    static FileSource = FileSource
    static MetricsSource = MetricsSource
    static ModelPackageStatusItem = ModelPackageStatusItem
    static AdditionalInferenceSpecificationDefinition = AdditionalInferenceSpecificationDefinition
    static SourceAlgorithmSpecification = SourceAlgorithmSpecification
    static ModelQuality = ModelQuality
    static S3DataSource = S3DataSource
    static ModelMetrics = ModelMetrics
    static SourceAlgorithm = SourceAlgorithm
    static InferenceSpecification = InferenceSpecification
    static MetadataProperties = MetadataProperties
    static DriftCheckExplainability = DriftCheckExplainability
    static TransformResources = TransformResources
    static ModelPackageContainerDefinition = ModelPackageContainerDefinition
    static ValidationProfile = ValidationProfile
    static Bias = Bias
    static DriftCheckModelQuality = DriftCheckModelQuality
    static DataSource = DataSource
    static TransformOutput = TransformOutput
    static ModelPackageStatusDetails = ModelPackageStatusDetails
    static DriftCheckBaselines = DriftCheckBaselines
    static ModelDataQuality = ModelDataQuality
    static TransformInput = TransformInput
    static DriftCheckBias = DriftCheckBias

    constructor(properties?: Properties) {
        super('AWS::SageMaker::ModelPackage', properties || {})
    }
}
export { ModelPackage as R }
