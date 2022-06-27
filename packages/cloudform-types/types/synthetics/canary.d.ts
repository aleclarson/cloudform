import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class ArtifactConfig{S3Encryption?:S3Encryption;constructor(properties:ArtifactConfig);}export declare class S3Encryption{EncryptionMode?:Value<string>;KmsKeyArn?:Value<string>;constructor(properties:S3Encryption);}export declare class VPCConfig{VpcId?:Value<string>;SubnetIds:List<Value<string>>;SecurityGroupIds:List<Value<string>>;constructor(properties:VPCConfig);}export declare class VisualReference{BaseCanaryRunId:Value<string>;BaseScreenshots?:List<BaseScreenshot>;constructor(properties:VisualReference);}export declare class Schedule{Expression:Value<string>;DurationInSeconds?:Value<string>;constructor(properties:Schedule);}export declare class Code{S3Bucket?:Value<string>;S3Key?:Value<string>;S3ObjectVersion?:Value<string>;Script?:Value<string>;Handler:Value<string>;constructor(properties:Code);}export declare class BaseScreenshot{ScreenshotName:Value<string>;IgnoreCoordinates?:List<Value<string>>;constructor(properties:BaseScreenshot);}export declare class RunConfig{TimeoutInSeconds?:Value<number>;MemoryInMB?:Value<number>;ActiveTracing?:Value<boolean>;EnvironmentVariables?:{[key:string]:Value<string>;};constructor(properties:RunConfig);}export interface Properties{Name:Value<string>;Code:Code;ArtifactS3Location:Value<string>;ArtifactConfig?:ArtifactConfig;Schedule:Schedule;ExecutionRoleArn:Value<string>;RuntimeVersion:Value<string>;SuccessRetentionPeriod?:Value<number>;FailureRetentionPeriod?:Value<number>;Tags?:List<ResourceTag>;VPCConfig?:VPCConfig;RunConfig?:RunConfig;StartCanaryAfterCreation:Value<boolean>;VisualReference?:VisualReference;DeleteLambdaResourcesOnCanaryDeletion?:Value<boolean>;}declare class Canary extends ResourceBase<Properties>{static ArtifactConfig:typeof ArtifactConfig;static S3Encryption:typeof S3Encryption;static VPCConfig:typeof VPCConfig;static VisualReference:typeof VisualReference;static Schedule:typeof Schedule;static Code:typeof Code;static BaseScreenshot:typeof BaseScreenshot;static RunConfig:typeof RunConfig;constructor(properties:Properties);}export{Canary as R};