import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class HealthCheckTag{Key:Value<string>;Value:Value<string>;constructor(properties:HealthCheckTag);}export interface Properties{HealthCheckConfig:{[key:string]:any;};HealthCheckTags?:List<HealthCheckTag>;}declare class HealthCheck extends ResourceBase<Properties>{static HealthCheckTag:typeof HealthCheckTag;constructor(properties:Properties);}export{HealthCheck as R};