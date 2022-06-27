import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export declare class ResumeClusterMessage{ClusterIdentifier:Value<string>;constructor(properties:ResumeClusterMessage);}export declare class PauseClusterMessage{ClusterIdentifier:Value<string>;constructor(properties:PauseClusterMessage);}export declare class ScheduledActionType{ResizeCluster?:ResizeClusterMessage;PauseCluster?:PauseClusterMessage;ResumeCluster?:ResumeClusterMessage;constructor(properties:ScheduledActionType);}export declare class ResizeClusterMessage{ClusterIdentifier:Value<string>;ClusterType?:Value<string>;NodeType?:Value<string>;NumberOfNodes?:Value<number>;Classic?:Value<boolean>;constructor(properties:ResizeClusterMessage);}export interface Properties{ScheduledActionName:Value<string>;TargetAction?:ScheduledActionType;Schedule?:Value<string>;IamRole?:Value<string>;ScheduledActionDescription?:Value<string>;StartTime?:Value<string>;EndTime?:Value<string>;Enable?:Value<boolean>;}declare class ScheduledAction extends ResourceBase<Properties>{static ResumeClusterMessage:typeof ResumeClusterMessage;static PauseClusterMessage:typeof PauseClusterMessage;static ScheduledActionType:typeof ScheduledActionType;static ResizeClusterMessage:typeof ResizeClusterMessage;constructor(properties:Properties);}export{ScheduledAction as R};