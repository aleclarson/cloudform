import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{ClusterName:Value<string>;AddonName:Value<string>;AddonVersion?:Value<string>;ResolveConflicts?:Value<string>;ServiceAccountRoleArn?:Value<string>;Tags?:List<ResourceTag>;}declare class Addon extends ResourceBase<Properties>{constructor(properties:Properties);}export{Addon as R};