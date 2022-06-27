import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{TransitGatewayId:Value<string>;PeerTransitGatewayId:Value<string>;PeerAccountId:Value<string>;PeerRegion:Value<string>;Tags?:List<ResourceTag>;}declare class TransitGatewayPeeringAttachment extends ResourceBase<Properties>{constructor(properties:Properties);}export{TransitGatewayPeeringAttachment as R};