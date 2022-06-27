import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class VpcSettings{SubnetIds:List<Value<string>>;VpcId:Value<string>;constructor(properties:VpcSettings);}export interface Properties{CreateAlias?:Value<boolean>;Description?:Value<string>;EnableSso?:Value<boolean>;Name:Value<string>;Password:Value<string>;ShortName?:Value<string>;Size:Value<string>;VpcSettings:VpcSettings;}declare class SimpleAD extends ResourceBase<Properties>{static VpcSettings:typeof VpcSettings;constructor(properties:Properties);}export{SimpleAD as R};