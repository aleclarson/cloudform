import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{ResourceId:Value<string>;AutodefinedReverseFlag:Value<string>;}declare class ResolverConfig extends ResourceBase<Properties>{constructor(properties:Properties);}export{ResolverConfig as R};