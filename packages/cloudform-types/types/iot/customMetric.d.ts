import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{MetricName?:Value<string>;DisplayName?:Value<string>;MetricType:Value<string>;Tags?:List<ResourceTag>;}declare class CustomMetric extends ResourceBase<Properties>{constructor(properties:Properties);}export{CustomMetric as R};