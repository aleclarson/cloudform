import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{ImageName:Value<string>;ImageRoleArn:Value<string>;ImageDisplayName?:Value<string>;ImageDescription?:Value<string>;Tags?:List<ResourceTag>;}declare class Image extends ResourceBase<Properties>{constructor(properties:Properties);}export{Image as R};