import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class Connector{ConnectorArn:Value<string>;Parameters?:{[key:string]:any;};Id:Value<string>;constructor(properties:Connector);}export interface Properties{Connectors:List<Connector>;ConnectorDefinitionId:Value<string>;}declare class ConnectorDefinitionVersion extends ResourceBase<Properties>{static Connector:typeof Connector;constructor(properties:Properties);}export{ConnectorDefinitionVersion as R};