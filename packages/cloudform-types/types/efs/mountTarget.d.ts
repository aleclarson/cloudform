import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{IpAddress?:Value<string>;FileSystemId:Value<string>;SecurityGroups:List<Value<string>>;SubnetId:Value<string>;}declare class MountTarget extends ResourceBase<Properties>{constructor(properties:Properties);}export{MountTarget as R};