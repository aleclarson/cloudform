import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class HostedZoneTag{Key:Value<string>;Value:Value<string>;constructor(properties:HostedZoneTag);}export declare class HostedZoneConfig{Comment?:Value<string>;constructor(properties:HostedZoneConfig);}export declare class QueryLoggingConfig{CloudWatchLogsLogGroupArn:Value<string>;constructor(properties:QueryLoggingConfig);}export declare class VPC{VPCId:Value<string>;VPCRegion:Value<string>;constructor(properties:VPC);}export interface Properties{HostedZoneConfig?:HostedZoneConfig;HostedZoneTags?:List<HostedZoneTag>;Name?:Value<string>;QueryLoggingConfig?:QueryLoggingConfig;VPCs?:List<VPC>;}declare class HostedZone extends ResourceBase<Properties>{static HostedZoneTag:typeof HostedZoneTag;static HostedZoneConfig:typeof HostedZoneConfig;static QueryLoggingConfig:typeof QueryLoggingConfig;static VPC:typeof VPC;constructor(properties?:Properties);}export{HostedZone as R};