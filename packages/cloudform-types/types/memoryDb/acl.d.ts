import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{ACLName:Value<string>;UserNames?:List<Value<string>>;Tags?:List<ResourceTag>;}declare class ACL extends ResourceBase<Properties>{constructor(properties:Properties);}export{ACL as R};