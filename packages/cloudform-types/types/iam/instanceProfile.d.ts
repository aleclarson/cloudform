import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{Path?:Value<string>;Roles:List<Value<string>>;InstanceProfileName?:Value<string>;}declare class InstanceProfile extends ResourceBase<Properties>{constructor(properties:Properties);}export{InstanceProfile as R};