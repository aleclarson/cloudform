import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Action:Value<string>;LayerVersionArn:Value<string>;OrganizationId?:Value<string>;Principal:Value<string>;}declare class LayerVersionPermission extends ResourceBase<Properties>{constructor(properties:Properties);}export{LayerVersionPermission as R};