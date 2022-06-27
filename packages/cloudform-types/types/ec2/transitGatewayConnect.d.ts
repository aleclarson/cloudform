import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class TransitGatewayConnectOptions{Protocol?:Value<string>;constructor(properties:TransitGatewayConnectOptions);}export interface Properties{TransportTransitGatewayAttachmentId:Value<string>;Tags?:List<ResourceTag>;Options:TransitGatewayConnectOptions;}declare class TransitGatewayConnect extends ResourceBase<Properties>{static TransitGatewayConnectOptions:typeof TransitGatewayConnectOptions;constructor(properties:Properties);}export{TransitGatewayConnect as R};