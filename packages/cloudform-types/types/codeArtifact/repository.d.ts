import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{RepositoryName:Value<string>;DomainName:Value<string>;DomainOwner?:Value<string>;Description?:Value<string>;ExternalConnections?:List<Value<string>>;Upstreams?:List<Value<string>>;PermissionsPolicyDocument?:{[key:string]:any;};Tags?:List<ResourceTag>;}declare class Repository extends ResourceBase<Properties>{constructor(properties:Properties);}export{Repository as R};