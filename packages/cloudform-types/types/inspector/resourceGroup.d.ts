import{ResourceBase,ResourceTag}from'../resource';import{List}from'../dataTypes';export interface Properties{ResourceGroupTags:List<ResourceTag>;}declare class ResourceGroup extends ResourceBase<Properties>{constructor(properties:Properties);}export{ResourceGroup as R};