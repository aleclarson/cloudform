import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{PipelineName:Value<string>;PipelineDisplayName?:Value<string>;PipelineDescription?:Value<string>;PipelineDefinition:{[key:string]:any;};RoleArn:Value<string>;Tags?:List<ResourceTag>;ParallelismConfiguration?:{[key:string]:any;};}declare class Pipeline extends ResourceBase<Properties>{constructor(properties:Properties);}export{Pipeline as R};