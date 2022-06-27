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

import * as _0 from './imageVersion'
import * as _1 from './featureGroup'
import * as _2 from './dataQualityJobDefinition'
import * as _3 from './monitoringSchedule'
import * as _4 from './modelPackageGroup'
import * as _5 from './modelBiasJobDefinition'
import * as _6 from './modelQualityJobDefinition'
import * as _7 from './notebookInstance'
import * as _8 from './appImageConfig'
import * as _9 from './pipeline'
import * as _a from './workteam'
import * as _b from './notebookInstanceLifecycleConfig'
import * as _c from './userProfile'
import * as _d from './modelExplainabilityJobDefinition'
import * as _e from './endpointConfig'
import * as _f from './endpoint'
import * as _10 from './modelPackage'
import * as _11 from './codeRepository'
import * as _12 from './model'
import * as _13 from './deviceFleet'
import * as _14 from './app'
import * as _15 from './domain'
import * as _16 from './project'
import * as _17 from './image'
import * as _18 from './device'

export namespace SageMaker {
  export const ImageVersion = _0.R
  export const FeatureGroup = _1.R
  export const DataQualityJobDefinition = _2.R
  export const MonitoringSchedule = _3.R
  export const ModelPackageGroup = _4.R
  export const ModelBiasJobDefinition = _5.R
  export const ModelQualityJobDefinition = _6.R
  export const NotebookInstance = _7.R
  export const AppImageConfig = _8.R
  export const Pipeline = _9.R
  export const Workteam = _a.R
  export const NotebookInstanceLifecycleConfig = _b.R
  export const UserProfile = _c.R
  export const ModelExplainabilityJobDefinition = _d.R
  export const EndpointConfig = _e.R
  export const Endpoint = _f.R
  export const ModelPackage = _10.R
  export const CodeRepository = _11.R
  export const Model = _12.R
  export const DeviceFleet = _13.R
  export const App = _14.R
  export const Domain = _15.R
  export const Project = _16.R
  export const Image = _17.R
  export const Device = _18.R

  export type ImageVersion = _0.R
  export type FeatureGroup = _1.R
  export type DataQualityJobDefinition = _2.R
  export type MonitoringSchedule = _3.R
  export type ModelPackageGroup = _4.R
  export type ModelBiasJobDefinition = _5.R
  export type ModelQualityJobDefinition = _6.R
  export type NotebookInstance = _7.R
  export type AppImageConfig = _8.R
  export type Pipeline = _9.R
  export type Workteam = _a.R
  export type NotebookInstanceLifecycleConfig = _b.R
  export type UserProfile = _c.R
  export type ModelExplainabilityJobDefinition = _d.R
  export type EndpointConfig = _e.R
  export type Endpoint = _f.R
  export type ModelPackage = _10.R
  export type CodeRepository = _11.R
  export type Model = _12.R
  export type DeviceFleet = _13.R
  export type App = _14.R
  export type Domain = _15.R
  export type Project = _16.R
  export type Image = _17.R
  export type Device = _18.R

  export namespace FeatureGroup {
    export type FeatureDefinition = _1.FeatureDefinition
  }
  export namespace DataQualityJobDefinition {
    export type DataQualityBaselineConfig = _2.DataQualityBaselineConfig
    export type StatisticsResource = _2.StatisticsResource
    export type ConstraintsResource = _2.ConstraintsResource
    export type DataQualityJobInput = _2.DataQualityJobInput
    export type MonitoringResources = _2.MonitoringResources
    export type MonitoringOutput = _2.MonitoringOutput
    export type MonitoringOutputConfig = _2.MonitoringOutputConfig
    export type DataQualityAppSpecification = _2.DataQualityAppSpecification
    export type ClusterConfig = _2.ClusterConfig
    export type VpcConfig = _2.VpcConfig
    export type S3Output = _2.S3Output
    export type StoppingCondition = _2.StoppingCondition
    export type NetworkConfig = _2.NetworkConfig
    export type EndpointInput = _2.EndpointInput
  }
  export namespace MonitoringSchedule {
    export type ConstraintsResource = _3.ConstraintsResource
    export type MonitoringExecutionSummary = _3.MonitoringExecutionSummary
    export type MonitoringOutputConfig = _3.MonitoringOutputConfig
    export type StatisticsResource = _3.StatisticsResource
    export type VpcConfig = _3.VpcConfig
    export type ClusterConfig = _3.ClusterConfig
    export type MonitoringAppSpecification = _3.MonitoringAppSpecification
    export type MonitoringJobDefinition = _3.MonitoringJobDefinition
    export type BaselineConfig = _3.BaselineConfig
    export type MonitoringOutput = _3.MonitoringOutput
    export type ScheduleConfig = _3.ScheduleConfig
    export type MonitoringScheduleConfig = _3.MonitoringScheduleConfig
    export type EndpointInput = _3.EndpointInput
    export type NetworkConfig = _3.NetworkConfig
    export type S3Output = _3.S3Output
    export type MonitoringResources = _3.MonitoringResources
    export type StoppingCondition = _3.StoppingCondition
    export type MonitoringInput = _3.MonitoringInput
  }
  export namespace ModelBiasJobDefinition {
    export type ClusterConfig = _5.ClusterConfig
    export type S3Output = _5.S3Output
    export type ModelBiasBaselineConfig = _5.ModelBiasBaselineConfig
    export type ModelBiasJobInput = _5.ModelBiasJobInput
    export type MonitoringResources = _5.MonitoringResources
    export type ModelBiasAppSpecification = _5.ModelBiasAppSpecification
    export type MonitoringGroundTruthS3Input = _5.MonitoringGroundTruthS3Input
    export type ConstraintsResource = _5.ConstraintsResource
    export type StoppingCondition = _5.StoppingCondition
    export type MonitoringOutputConfig = _5.MonitoringOutputConfig
    export type VpcConfig = _5.VpcConfig
    export type NetworkConfig = _5.NetworkConfig
    export type EndpointInput = _5.EndpointInput
    export type MonitoringOutput = _5.MonitoringOutput
  }
  export namespace ModelQualityJobDefinition {
    export type ModelQualityJobInput = _6.ModelQualityJobInput
    export type MonitoringResources = _6.MonitoringResources
    export type EndpointInput = _6.EndpointInput
    export type NetworkConfig = _6.NetworkConfig
    export type VpcConfig = _6.VpcConfig
    export type ModelQualityAppSpecification = _6.ModelQualityAppSpecification
    export type MonitoringOutput = _6.MonitoringOutput
    export type ClusterConfig = _6.ClusterConfig
    export type ConstraintsResource = _6.ConstraintsResource
    export type S3Output = _6.S3Output
    export type MonitoringGroundTruthS3Input = _6.MonitoringGroundTruthS3Input
    export type ModelQualityBaselineConfig = _6.ModelQualityBaselineConfig
    export type StoppingCondition = _6.StoppingCondition
    export type MonitoringOutputConfig = _6.MonitoringOutputConfig
  }
  export namespace AppImageConfig {
    export type KernelGatewayImageConfig = _8.KernelGatewayImageConfig
    export type FileSystemConfig = _8.FileSystemConfig
    export type KernelSpec = _8.KernelSpec
  }
  export namespace Workteam {
    export type NotificationConfiguration = _a.NotificationConfiguration
    export type CognitoMemberDefinition = _a.CognitoMemberDefinition
    export type MemberDefinition = _a.MemberDefinition
  }
  export namespace NotebookInstanceLifecycleConfig {
    export type NotebookInstanceLifecycleHook = _b.NotebookInstanceLifecycleHook
  }
  export namespace UserProfile {
    export type JupyterServerAppSettings = _c.JupyterServerAppSettings
    export type ResourceSpec = _c.ResourceSpec
    export type RStudioServerProAppSettings = _c.RStudioServerProAppSettings
    export type KernelGatewayAppSettings = _c.KernelGatewayAppSettings
    export type CustomImage = _c.CustomImage
    export type SharingSettings = _c.SharingSettings
    export type UserSettings = _c.UserSettings
  }
  export namespace ModelExplainabilityJobDefinition {
    export type ModelExplainabilityAppSpecification = _d.ModelExplainabilityAppSpecification
    export type ModelExplainabilityJobInput = _d.ModelExplainabilityJobInput
    export type ClusterConfig = _d.ClusterConfig
    export type ConstraintsResource = _d.ConstraintsResource
    export type StoppingCondition = _d.StoppingCondition
    export type S3Output = _d.S3Output
    export type NetworkConfig = _d.NetworkConfig
    export type ModelExplainabilityBaselineConfig = _d.ModelExplainabilityBaselineConfig
    export type MonitoringOutput = _d.MonitoringOutput
    export type MonitoringResources = _d.MonitoringResources
    export type MonitoringOutputConfig = _d.MonitoringOutputConfig
    export type VpcConfig = _d.VpcConfig
    export type EndpointInput = _d.EndpointInput
  }
  export namespace EndpointConfig {
    export type AsyncInferenceNotificationConfig = _e.AsyncInferenceNotificationConfig
    export type AsyncInferenceConfig = _e.AsyncInferenceConfig
    export type CaptureOption = _e.CaptureOption
    export type ProductionVariant = _e.ProductionVariant
    export type ClarifyShapConfig = _e.ClarifyShapConfig
    export type AsyncInferenceOutputConfig = _e.AsyncInferenceOutputConfig
    export type ClarifyFeatureType = _e.ClarifyFeatureType
    export type ClarifyHeader = _e.ClarifyHeader
    export type ClarifyInferenceConfig = _e.ClarifyInferenceConfig
    export type CaptureContentTypeHeader = _e.CaptureContentTypeHeader
    export type ClarifyShapBaselineConfig = _e.ClarifyShapBaselineConfig
    export type ClarifyExplainerConfig = _e.ClarifyExplainerConfig
    export type ClarifyTextConfig = _e.ClarifyTextConfig
    export type ServerlessConfig = _e.ServerlessConfig
    export type AsyncInferenceClientConfig = _e.AsyncInferenceClientConfig
    export type DataCaptureConfig = _e.DataCaptureConfig
  }
  export namespace Endpoint {
    export type Alarm = _f.Alarm
    export type AutoRollbackConfig = _f.AutoRollbackConfig
    export type TrafficRoutingConfig = _f.TrafficRoutingConfig
    export type DeploymentConfig = _f.DeploymentConfig
    export type CapacitySize = _f.CapacitySize
    export type VariantProperty = _f.VariantProperty
    export type BlueGreenUpdatePolicy = _f.BlueGreenUpdatePolicy
  }
  export namespace ModelPackage {
    export type Explainability = _10.Explainability
    export type ValidationSpecification = _10.ValidationSpecification
    export type TransformJobDefinition = _10.TransformJobDefinition
    export type DriftCheckModelDataQuality = _10.DriftCheckModelDataQuality
    export type FileSource = _10.FileSource
    export type MetricsSource = _10.MetricsSource
    export type ModelPackageStatusItem = _10.ModelPackageStatusItem
    export type AdditionalInferenceSpecificationDefinition = _10.AdditionalInferenceSpecificationDefinition
    export type SourceAlgorithmSpecification = _10.SourceAlgorithmSpecification
    export type ModelQuality = _10.ModelQuality
    export type Environment = _10.Environment
    export type S3DataSource = _10.S3DataSource
    export type ModelMetrics = _10.ModelMetrics
    export type SourceAlgorithm = _10.SourceAlgorithm
    export type InferenceSpecification = _10.InferenceSpecification
    export type MetadataProperties = _10.MetadataProperties
    export type DriftCheckExplainability = _10.DriftCheckExplainability
    export type TransformResources = _10.TransformResources
    export type ModelPackageContainerDefinition = _10.ModelPackageContainerDefinition
    export type ValidationProfile = _10.ValidationProfile
    export type Bias = _10.Bias
    export type DriftCheckModelQuality = _10.DriftCheckModelQuality
    export type DataSource = _10.DataSource
    export type TransformOutput = _10.TransformOutput
    export type ModelPackageStatusDetails = _10.ModelPackageStatusDetails
    export type DriftCheckBaselines = _10.DriftCheckBaselines
    export type ModelDataQuality = _10.ModelDataQuality
    export type TransformInput = _10.TransformInput
    export type DriftCheckBias = _10.DriftCheckBias
  }
  export namespace CodeRepository {
    export type GitConfig = _11.GitConfig
  }
  export namespace Model {
    export type MultiModelConfig = _12.MultiModelConfig
    export type VpcConfig = _12.VpcConfig
    export type ContainerDefinition = _12.ContainerDefinition
    export type ImageConfig = _12.ImageConfig
    export type InferenceExecutionConfig = _12.InferenceExecutionConfig
    export type RepositoryAuthConfig = _12.RepositoryAuthConfig
  }
  export namespace DeviceFleet {
    export type EdgeOutputConfig = _13.EdgeOutputConfig
  }
  export namespace App {
    export type ResourceSpec = _14.ResourceSpec
  }
  export namespace Domain {
    export type JupyterServerAppSettings = _15.JupyterServerAppSettings
    export type UserSettings = _15.UserSettings
    export type CustomImage = _15.CustomImage
    export type RSessionAppSettings = _15.RSessionAppSettings
    export type ResourceSpec = _15.ResourceSpec
    export type KernelGatewayAppSettings = _15.KernelGatewayAppSettings
    export type RStudioServerProAppSettings = _15.RStudioServerProAppSettings
    export type RStudioServerProDomainSettings = _15.RStudioServerProDomainSettings
    export type DomainSettings = _15.DomainSettings
    export type SharingSettings = _15.SharingSettings
  }
}
