import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{Name:Value<string>;Type:Value<string>;Owner?:Value<string>;BucketName?:Value<string>;ConnectionArn?:Value<string>;Tags?:List<ResourceTag>;}declare class RepositoryAssociation extends ResourceBase<Properties>{constructor(properties:Properties);}export{RepositoryAssociation as R};