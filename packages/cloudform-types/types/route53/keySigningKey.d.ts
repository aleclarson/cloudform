import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{HostedZoneId:Value<string>;Status:Value<string>;Name:Value<string>;KeyManagementServiceArn:Value<string>;}declare class KeySigningKey extends ResourceBase<Properties>{constructor(properties:Properties);}export{KeySigningKey as R};