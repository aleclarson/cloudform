import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class DataQualityBaselineConfig{BaseliningJobName?:Value<string>;ConstraintsResource?:ConstraintsResource;StatisticsResource?:StatisticsResource;constructor(properties:DataQualityBaselineConfig);}export declare class StatisticsResource{S3Uri?:Value<string>;constructor(properties:StatisticsResource);}export declare class ConstraintsResource{S3Uri?:Value<string>;constructor(properties:ConstraintsResource);}export declare class DataQualityJobInput{EndpointInput:EndpointInput;constructor(properties:DataQualityJobInput);}export declare class MonitoringResources{ClusterConfig:ClusterConfig;constructor(properties:MonitoringResources);}export declare class MonitoringOutput{S3Output:S3Output;constructor(properties:MonitoringOutput);}export declare class MonitoringOutputConfig{KmsKeyId?:Value<string>;MonitoringOutputs:List<MonitoringOutput>;constructor(properties:MonitoringOutputConfig);}export declare class DataQualityAppSpecification{ContainerArguments?:List<Value<string>>;ContainerEntrypoint?:List<Value<string>>;ImageUri:Value<string>;PostAnalyticsProcessorSourceUri?:Value<string>;RecordPreprocessorSourceUri?:Value<string>;Environment?:{[key:string]:Value<string>;};constructor(properties:DataQualityAppSpecification);}export declare class ClusterConfig{InstanceCount:Value<number>;InstanceType:Value<string>;VolumeKmsKeyId?:Value<string>;VolumeSizeInGB:Value<number>;constructor(properties:ClusterConfig);}export declare class VpcConfig{SecurityGroupIds:List<Value<string>>;Subnets:List<Value<string>>;constructor(properties:VpcConfig);}export declare class S3Output{LocalPath:Value<string>;S3UploadMode?:Value<string>;S3Uri:Value<string>;constructor(properties:S3Output);}export declare class StoppingCondition{MaxRuntimeInSeconds:Value<number>;constructor(properties:StoppingCondition);}export declare class NetworkConfig{EnableInterContainerTrafficEncryption?:Value<boolean>;EnableNetworkIsolation?:Value<boolean>;VpcConfig?:VpcConfig;constructor(properties:NetworkConfig);}export declare class EndpointInput{EndpointName:Value<string>;LocalPath:Value<string>;S3DataDistributionType?:Value<string>;S3InputMode?:Value<string>;constructor(properties:EndpointInput);}export interface Properties{JobDefinitionName?:Value<string>;DataQualityBaselineConfig?:DataQualityBaselineConfig;DataQualityAppSpecification:DataQualityAppSpecification;DataQualityJobInput:DataQualityJobInput;DataQualityJobOutputConfig:MonitoringOutputConfig;JobResources:MonitoringResources;NetworkConfig?:NetworkConfig;EndpointName?:Value<string>;RoleArn:Value<string>;StoppingCondition?:StoppingCondition;Tags?:List<ResourceTag>;}declare class DataQualityJobDefinition extends ResourceBase<Properties>{static DataQualityBaselineConfig:typeof DataQualityBaselineConfig;static StatisticsResource:typeof StatisticsResource;static ConstraintsResource:typeof ConstraintsResource;static DataQualityJobInput:typeof DataQualityJobInput;static MonitoringResources:typeof MonitoringResources;static MonitoringOutput:typeof MonitoringOutput;static MonitoringOutputConfig:typeof MonitoringOutputConfig;static DataQualityAppSpecification:typeof DataQualityAppSpecification;static ClusterConfig:typeof ClusterConfig;static VpcConfig:typeof VpcConfig;static S3Output:typeof S3Output;static StoppingCondition:typeof StoppingCondition;static NetworkConfig:typeof NetworkConfig;static EndpointInput:typeof EndpointInput;constructor(properties:Properties);}export{DataQualityJobDefinition as R};