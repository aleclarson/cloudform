import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Principal:Value<string>;ThingName:Value<string>;}declare class ThingPrincipalAttachment extends ResourceBase<Properties>{constructor(properties:Properties);}export{ThingPrincipalAttachment as R};