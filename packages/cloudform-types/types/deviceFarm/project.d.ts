import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{DefaultJobTimeoutMinutes?:Value<number>;Name:Value<string>;Tags?:List<ResourceTag>;}declare class Project extends ResourceBase<Properties>{constructor(properties:Properties);}export{Project as R};