import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{DomainName:Value<string>;Stage:Value<string>;ApiMappingKey?:Value<string>;ApiId:Value<string>;}declare class ApiMapping extends ResourceBase<Properties>{constructor(properties:Properties);}export{ApiMapping as R};