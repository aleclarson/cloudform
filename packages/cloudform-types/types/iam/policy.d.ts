import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{Groups?:List<Value<string>>;PolicyDocument:{[key:string]:any;};PolicyName:Value<string>;Roles?:List<Value<string>>;Users?:List<Value<string>>;}declare class Policy extends ResourceBase<Properties>{constructor(properties:Properties);}export{Policy as R};