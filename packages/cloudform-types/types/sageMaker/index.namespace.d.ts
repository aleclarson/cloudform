import*as _0 from'./imageVersion';import*as _1 from'./featureGroup';import*as _2 from'./dataQualityJobDefinition';import*as _3 from'./monitoringSchedule';import*as _4 from'./modelPackageGroup';import*as _5 from'./modelBiasJobDefinition';import*as _6 from'./modelQualityJobDefinition';import*as _7 from'./notebookInstance';import*as _8 from'./appImageConfig';import*as _9 from'./pipeline';import*as _a from'./workteam';import*as _b from'./notebookInstanceLifecycleConfig';import*as _c from'./userProfile';import*as _d from'./modelExplainabilityJobDefinition';import*as _e from'./endpointConfig';import*as _f from'./endpoint';import*as _10 from'./modelPackage';import*as _11 from'./codeRepository';import*as _12 from'./model';import*as _13 from'./deviceFleet';import*as _14 from'./app';import*as _15 from'./domain';import*as _16 from'./project';import*as _17 from'./image';import*as _18 from'./device';export declare namespace SageMaker{const ImageVersion:typeof _0.R;const FeatureGroup:typeof _1.R;const DataQualityJobDefinition:typeof _2.R;const MonitoringSchedule:typeof _3.R;const ModelPackageGroup:typeof _4.R;const ModelBiasJobDefinition:typeof _5.R;const ModelQualityJobDefinition:typeof _6.R;const NotebookInstance:typeof _7.R;const AppImageConfig:typeof _8.R;const Pipeline:typeof _9.R;const Workteam:typeof _a.R;const NotebookInstanceLifecycleConfig:typeof _b.R;const UserProfile:typeof _c.R;const ModelExplainabilityJobDefinition:typeof _d.R;const EndpointConfig:typeof _e.R;const Endpoint:typeof _f.R;const ModelPackage:typeof _10.R;const CodeRepository:typeof _11.R;const Model:typeof _12.R;const DeviceFleet:typeof _13.R;const App:typeof _14.R;const Domain:typeof _15.R;const Project:typeof _16.R;const Image:typeof _17.R;const Device:typeof _18.R;type ImageVersion=_0.R;type FeatureGroup=_1.R;type DataQualityJobDefinition=_2.R;type MonitoringSchedule=_3.R;type ModelPackageGroup=_4.R;type ModelBiasJobDefinition=_5.R;type ModelQualityJobDefinition=_6.R;type NotebookInstance=_7.R;type AppImageConfig=_8.R;type Pipeline=_9.R;type Workteam=_a.R;type NotebookInstanceLifecycleConfig=_b.R;type UserProfile=_c.R;type ModelExplainabilityJobDefinition=_d.R;type EndpointConfig=_e.R;type Endpoint=_f.R;type ModelPackage=_10.R;type CodeRepository=_11.R;type Model=_12.R;type DeviceFleet=_13.R;type App=_14.R;type Domain=_15.R;type Project=_16.R;type Image=_17.R;type Device=_18.R;namespace FeatureGroup{type FeatureDefinition=_1.FeatureDefinition;}namespace DataQualityJobDefinition{type DataQualityBaselineConfig=_2.DataQualityBaselineConfig;type StatisticsResource=_2.StatisticsResource;type ConstraintsResource=_2.ConstraintsResource;type DataQualityJobInput=_2.DataQualityJobInput;type MonitoringResources=_2.MonitoringResources;type MonitoringOutput=_2.MonitoringOutput;type MonitoringOutputConfig=_2.MonitoringOutputConfig;type DataQualityAppSpecification=_2.DataQualityAppSpecification;type ClusterConfig=_2.ClusterConfig;type VpcConfig=_2.VpcConfig;type S3Output=_2.S3Output;type StoppingCondition=_2.StoppingCondition;type NetworkConfig=_2.NetworkConfig;type EndpointInput=_2.EndpointInput;}namespace MonitoringSchedule{type ConstraintsResource=_3.ConstraintsResource;type MonitoringExecutionSummary=_3.MonitoringExecutionSummary;type MonitoringOutputConfig=_3.MonitoringOutputConfig;type StatisticsResource=_3.StatisticsResource;type VpcConfig=_3.VpcConfig;type ClusterConfig=_3.ClusterConfig;type MonitoringAppSpecification=_3.MonitoringAppSpecification;type MonitoringJobDefinition=_3.MonitoringJobDefinition;type BaselineConfig=_3.BaselineConfig;type MonitoringOutput=_3.MonitoringOutput;type ScheduleConfig=_3.ScheduleConfig;type MonitoringScheduleConfig=_3.MonitoringScheduleConfig;type EndpointInput=_3.EndpointInput;type NetworkConfig=_3.NetworkConfig;type S3Output=_3.S3Output;type MonitoringResources=_3.MonitoringResources;type StoppingCondition=_3.StoppingCondition;type MonitoringInput=_3.MonitoringInput;}namespace ModelBiasJobDefinition{type ClusterConfig=_5.ClusterConfig;type S3Output=_5.S3Output;type ModelBiasBaselineConfig=_5.ModelBiasBaselineConfig;type ModelBiasJobInput=_5.ModelBiasJobInput;type MonitoringResources=_5.MonitoringResources;type ModelBiasAppSpecification=_5.ModelBiasAppSpecification;type MonitoringGroundTruthS3Input=_5.MonitoringGroundTruthS3Input;type ConstraintsResource=_5.ConstraintsResource;type StoppingCondition=_5.StoppingCondition;type MonitoringOutputConfig=_5.MonitoringOutputConfig;type VpcConfig=_5.VpcConfig;type NetworkConfig=_5.NetworkConfig;type EndpointInput=_5.EndpointInput;type MonitoringOutput=_5.MonitoringOutput;}namespace ModelQualityJobDefinition{type ModelQualityJobInput=_6.ModelQualityJobInput;type MonitoringResources=_6.MonitoringResources;type EndpointInput=_6.EndpointInput;type NetworkConfig=_6.NetworkConfig;type VpcConfig=_6.VpcConfig;type ModelQualityAppSpecification=_6.ModelQualityAppSpecification;type MonitoringOutput=_6.MonitoringOutput;type ClusterConfig=_6.ClusterConfig;type ConstraintsResource=_6.ConstraintsResource;type S3Output=_6.S3Output;type MonitoringGroundTruthS3Input=_6.MonitoringGroundTruthS3Input;type ModelQualityBaselineConfig=_6.ModelQualityBaselineConfig;type StoppingCondition=_6.StoppingCondition;type MonitoringOutputConfig=_6.MonitoringOutputConfig;}namespace AppImageConfig{type KernelGatewayImageConfig=_8.KernelGatewayImageConfig;type FileSystemConfig=_8.FileSystemConfig;type KernelSpec=_8.KernelSpec;}namespace Workteam{type NotificationConfiguration=_a.NotificationConfiguration;type CognitoMemberDefinition=_a.CognitoMemberDefinition;type MemberDefinition=_a.MemberDefinition;}namespace NotebookInstanceLifecycleConfig{type NotebookInstanceLifecycleHook=_b.NotebookInstanceLifecycleHook;}namespace UserProfile{type JupyterServerAppSettings=_c.JupyterServerAppSettings;type ResourceSpec=_c.ResourceSpec;type RStudioServerProAppSettings=_c.RStudioServerProAppSettings;type KernelGatewayAppSettings=_c.KernelGatewayAppSettings;type CustomImage=_c.CustomImage;type SharingSettings=_c.SharingSettings;type UserSettings=_c.UserSettings;}namespace ModelExplainabilityJobDefinition{type ModelExplainabilityAppSpecification=_d.ModelExplainabilityAppSpecification;type ModelExplainabilityJobInput=_d.ModelExplainabilityJobInput;type ClusterConfig=_d.ClusterConfig;type ConstraintsResource=_d.ConstraintsResource;type StoppingCondition=_d.StoppingCondition;type S3Output=_d.S3Output;type NetworkConfig=_d.NetworkConfig;type ModelExplainabilityBaselineConfig=_d.ModelExplainabilityBaselineConfig;type MonitoringOutput=_d.MonitoringOutput;type MonitoringResources=_d.MonitoringResources;type MonitoringOutputConfig=_d.MonitoringOutputConfig;type VpcConfig=_d.VpcConfig;type EndpointInput=_d.EndpointInput;}namespace EndpointConfig{type AsyncInferenceNotificationConfig=_e.AsyncInferenceNotificationConfig;type AsyncInferenceConfig=_e.AsyncInferenceConfig;type CaptureOption=_e.CaptureOption;type ProductionVariant=_e.ProductionVariant;type ClarifyShapConfig=_e.ClarifyShapConfig;type AsyncInferenceOutputConfig=_e.AsyncInferenceOutputConfig;type ClarifyFeatureType=_e.ClarifyFeatureType;type ClarifyHeader=_e.ClarifyHeader;type ClarifyInferenceConfig=_e.ClarifyInferenceConfig;type CaptureContentTypeHeader=_e.CaptureContentTypeHeader;type ClarifyShapBaselineConfig=_e.ClarifyShapBaselineConfig;type ClarifyExplainerConfig=_e.ClarifyExplainerConfig;type ClarifyTextConfig=_e.ClarifyTextConfig;type ServerlessConfig=_e.ServerlessConfig;type AsyncInferenceClientConfig=_e.AsyncInferenceClientConfig;type DataCaptureConfig=_e.DataCaptureConfig;}namespace Endpoint{type Alarm=_f.Alarm;type AutoRollbackConfig=_f.AutoRollbackConfig;type TrafficRoutingConfig=_f.TrafficRoutingConfig;type DeploymentConfig=_f.DeploymentConfig;type CapacitySize=_f.CapacitySize;type VariantProperty=_f.VariantProperty;type BlueGreenUpdatePolicy=_f.BlueGreenUpdatePolicy;}namespace ModelPackage{type Explainability=_10.Explainability;type ValidationSpecification=_10.ValidationSpecification;type TransformJobDefinition=_10.TransformJobDefinition;type DriftCheckModelDataQuality=_10.DriftCheckModelDataQuality;type FileSource=_10.FileSource;type MetricsSource=_10.MetricsSource;type ModelPackageStatusItem=_10.ModelPackageStatusItem;type AdditionalInferenceSpecificationDefinition=_10.AdditionalInferenceSpecificationDefinition;type SourceAlgorithmSpecification=_10.SourceAlgorithmSpecification;type ModelQuality=_10.ModelQuality;type Environment=_10.Environment;type S3DataSource=_10.S3DataSource;type ModelMetrics=_10.ModelMetrics;type SourceAlgorithm=_10.SourceAlgorithm;type InferenceSpecification=_10.InferenceSpecification;type MetadataProperties=_10.MetadataProperties;type DriftCheckExplainability=_10.DriftCheckExplainability;type TransformResources=_10.TransformResources;type ModelPackageContainerDefinition=_10.ModelPackageContainerDefinition;type ValidationProfile=_10.ValidationProfile;type Bias=_10.Bias;type DriftCheckModelQuality=_10.DriftCheckModelQuality;type DataSource=_10.DataSource;type TransformOutput=_10.TransformOutput;type ModelPackageStatusDetails=_10.ModelPackageStatusDetails;type DriftCheckBaselines=_10.DriftCheckBaselines;type ModelDataQuality=_10.ModelDataQuality;type TransformInput=_10.TransformInput;type DriftCheckBias=_10.DriftCheckBias;}namespace CodeRepository{type GitConfig=_11.GitConfig;}namespace Model{type MultiModelConfig=_12.MultiModelConfig;type VpcConfig=_12.VpcConfig;type ContainerDefinition=_12.ContainerDefinition;type ImageConfig=_12.ImageConfig;type InferenceExecutionConfig=_12.InferenceExecutionConfig;type RepositoryAuthConfig=_12.RepositoryAuthConfig;}namespace DeviceFleet{type EdgeOutputConfig=_13.EdgeOutputConfig;}namespace App{type ResourceSpec=_14.ResourceSpec;}namespace Domain{type JupyterServerAppSettings=_15.JupyterServerAppSettings;type UserSettings=_15.UserSettings;type CustomImage=_15.CustomImage;type RSessionAppSettings=_15.RSessionAppSettings;type ResourceSpec=_15.ResourceSpec;type KernelGatewayAppSettings=_15.KernelGatewayAppSettings;type RStudioServerProAppSettings=_15.RStudioServerProAppSettings;type RStudioServerProDomainSettings=_15.RStudioServerProDomainSettings;type DomainSettings=_15.DomainSettings;type SharingSettings=_15.SharingSettings;}}