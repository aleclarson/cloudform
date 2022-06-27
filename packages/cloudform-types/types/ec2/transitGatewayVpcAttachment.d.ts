import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{TransitGatewayId:Value<string>;VpcId:Value<string>;SubnetIds:List<Value<string>>;AddSubnetIds?:List<Value<string>>;RemoveSubnetIds?:List<Value<string>>;Tags?:List<ResourceTag>;Options?:{[key:string]:any;};}declare class TransitGatewayVpcAttachment extends ResourceBase<Properties>{constructor(properties:Properties);}export{TransitGatewayVpcAttachment as R};