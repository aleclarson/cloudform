import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{Tags?:List<ResourceTag>;VpcId:Value<string>;}declare class NetworkAcl extends ResourceBase<Properties>{constructor(properties:Properties);}export{NetworkAcl as R};