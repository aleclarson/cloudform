import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Fleet?:Value<string>;Architecture:Value<string>;GreengrassGroupId:Value<string>;Tags?:{[key:string]:Value<string>;};Name?:Value<string>;}declare class Robot extends ResourceBase<Properties>{constructor(properties:Properties);}export{Robot as R};