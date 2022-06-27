import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class AssetHierarchy{LogicalId:Value<string>;ChildAssetId:Value<string>;constructor(properties:AssetHierarchy);}export declare class AssetProperty{LogicalId:Value<string>;Alias?:Value<string>;NotificationState?:Value<string>;constructor(properties:AssetProperty);}export interface Properties{AssetModelId:Value<string>;AssetName:Value<string>;AssetDescription?:Value<string>;AssetProperties?:List<AssetProperty>;AssetHierarchies?:List<AssetHierarchy>;Tags?:List<ResourceTag>;}declare class Asset extends ResourceBase<Properties>{static AssetHierarchy:typeof AssetHierarchy;static AssetProperty:typeof AssetProperty;constructor(properties:Properties);}export{Asset as R};