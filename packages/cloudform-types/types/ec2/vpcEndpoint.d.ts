import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{PolicyDocument?:{[key:string]:any;};PrivateDnsEnabled?:Value<boolean>;RouteTableIds?:List<Value<string>>;SecurityGroupIds?:List<Value<string>>;ServiceName:Value<string>;SubnetIds?:List<Value<string>>;VpcEndpointType?:Value<string>;VpcId:Value<string>;}declare class VPCEndpoint extends ResourceBase<Properties>{constructor(properties:Properties);}export{VPCEndpoint as R};