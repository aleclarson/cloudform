import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{DatabaseName?:Value<string>;KmsKeyId?:Value<string>;Tags?:List<ResourceTag>;}declare class Database extends ResourceBase<Properties>{constructor(properties?:Properties);}export{Database as R};