import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{VPCId:Value<string>;ResolverRuleId:Value<string>;Name?:Value<string>;}declare class ResolverRuleAssociation extends ResourceBase<Properties>{constructor(properties:Properties);}export{ResolverRuleAssociation as R};