import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{LogGroupName?:Value<string>;KmsKeyId?:Value<string>;RetentionInDays?:Value<number>;Tags?:List<ResourceTag>;}declare class LogGroup extends ResourceBase<Properties>{constructor(properties?:Properties);}export{LogGroup as R};