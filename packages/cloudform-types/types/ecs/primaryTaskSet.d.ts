import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Cluster:Value<string>;TaskSetId:Value<string>;Service:Value<string>;}declare class PrimaryTaskSet extends ResourceBase<Properties>{constructor(properties:Properties);}export{PrimaryTaskSet as R};