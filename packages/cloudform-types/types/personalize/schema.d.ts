import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Name:Value<string>;Schema:Value<string>;Domain?:Value<string>;}declare class Schema extends ResourceBase<Properties>{constructor(properties:Properties);}export{Schema as R};