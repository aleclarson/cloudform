import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Application:Value<string>;CurrentRevisionId?:Value<string>;}declare class RobotApplicationVersion extends ResourceBase<Properties>{constructor(properties:Properties);}export{RobotApplicationVersion as R};