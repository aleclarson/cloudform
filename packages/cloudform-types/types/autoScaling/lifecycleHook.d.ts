import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{AutoScalingGroupName:Value<string>;DefaultResult?:Value<string>;HeartbeatTimeout?:Value<number>;LifecycleHookName?:Value<string>;LifecycleTransition:Value<string>;NotificationMetadata?:Value<string>;NotificationTargetARN?:Value<string>;RoleARN?:Value<string>;}declare class LifecycleHook extends ResourceBase<Properties>{constructor(properties:Properties);}export{LifecycleHook as R};