import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{BgpAsn:Value<number>;IpAddress:Value<string>;Tags?:List<ResourceTag>;Type:Value<string>;}declare class CustomerGateway extends ResourceBase<Properties>{constructor(properties:Properties);}export{CustomerGateway as R};