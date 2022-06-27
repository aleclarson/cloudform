import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class DestinationConfiguration{S3:S3DestinationConfiguration;constructor(properties:DestinationConfiguration);}export declare class S3DestinationConfiguration{BucketName:Value<string>;constructor(properties:S3DestinationConfiguration);}export declare class ThumbnailConfiguration{RecordingMode:Value<string>;TargetIntervalSeconds?:Value<number>;constructor(properties:ThumbnailConfiguration);}export interface Properties{Name?:Value<string>;DestinationConfiguration:DestinationConfiguration;Tags?:List<ResourceTag>;ThumbnailConfiguration?:ThumbnailConfiguration;}declare class RecordingConfiguration extends ResourceBase<Properties>{static DestinationConfiguration:typeof DestinationConfiguration;static S3DestinationConfiguration:typeof S3DestinationConfiguration;static ThumbnailConfiguration:typeof ThumbnailConfiguration;constructor(properties:Properties);}export{RecordingConfiguration as R};