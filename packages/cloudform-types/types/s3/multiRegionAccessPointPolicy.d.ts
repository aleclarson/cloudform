import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{MrapName:Value<string>;Policy:{[key:string]:any;};}declare class MultiRegionAccessPointPolicy extends ResourceBase<Properties>{constructor(properties:Properties);}export{MultiRegionAccessPointPolicy as R};