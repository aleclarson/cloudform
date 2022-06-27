import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export declare class Condition{Type?:Value<string>;Value?:Value<string>;Key?:Value<string>;constructor(properties:Condition);}export interface Properties{EventBusName?:Value<string>;Condition?:Condition;Action?:Value<string>;StatementId:Value<string>;Statement?:{[key:string]:any;};Principal?:Value<string>;}declare class EventBusPolicy extends ResourceBase<Properties>{static Condition:typeof Condition;constructor(properties:Properties);}export{EventBusPolicy as R};