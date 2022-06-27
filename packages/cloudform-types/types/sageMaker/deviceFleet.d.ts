import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class EdgeOutputConfig{S3OutputLocation:Value<string>;KmsKeyId?:Value<string>;constructor(properties:EdgeOutputConfig);}export interface Properties{Description?:Value<string>;DeviceFleetName:Value<string>;OutputConfig:EdgeOutputConfig;RoleArn:Value<string>;Tags?:List<ResourceTag>;}declare class DeviceFleet extends ResourceBase<Properties>{static EdgeOutputConfig:typeof EdgeOutputConfig;constructor(properties:Properties);}export{DeviceFleet as R};