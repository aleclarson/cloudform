import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Description?:Value<string>;}declare class Domain extends ResourceBase<Properties>{constructor(properties?:Properties);}export{Domain as R};