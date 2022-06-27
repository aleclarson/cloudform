import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{SubscriptionName:Value<string>;SnsTopicArn?:Value<string>;SourceType?:Value<string>;SourceIds?:List<Value<string>>;EventCategories?:List<Value<string>>;Severity?:Value<string>;Enabled?:Value<boolean>;Tags?:List<ResourceTag>;}declare class EventSubscription extends ResourceBase<Properties>{constructor(properties:Properties);}export{EventSubscription as R};