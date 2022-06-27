import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class AdvancedEventSelector{Name?:Value<string>;FieldSelectors:List<AdvancedFieldSelector>;constructor(properties:AdvancedEventSelector);}export declare class AdvancedFieldSelector{Field:Value<string>;Equals?:List<Value<string>>;StartsWith?:List<Value<string>>;EndsWith?:List<Value<string>>;NotEquals?:List<Value<string>>;NotStartsWith?:List<Value<string>>;NotEndsWith?:List<Value<string>>;constructor(properties:AdvancedFieldSelector);}export interface Properties{AdvancedEventSelectors?:List<AdvancedEventSelector>;MultiRegionEnabled?:Value<boolean>;Name?:Value<string>;OrganizationEnabled?:Value<boolean>;RetentionPeriod?:Value<number>;TerminationProtectionEnabled?:Value<boolean>;Tags?:List<ResourceTag>;}declare class EventDataStore extends ResourceBase<Properties>{static AdvancedEventSelector:typeof AdvancedEventSelector;static AdvancedFieldSelector:typeof AdvancedFieldSelector;constructor(properties?:Properties);}export{EventDataStore as R};