import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{StaticIpName:Value<string>;AttachedTo?:Value<string>;}declare class StaticIp extends ResourceBase<Properties>{constructor(properties:Properties);}export{StaticIp as R};