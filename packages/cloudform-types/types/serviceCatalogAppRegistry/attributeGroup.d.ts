import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Name:Value<string>;Description?:Value<string>;Attributes:{[key:string]:any;};Tags?:{[key:string]:Value<string>;};}declare class AttributeGroup extends ResourceBase<Properties>{constructor(properties:Properties);}export{AttributeGroup as R};