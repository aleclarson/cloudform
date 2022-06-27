import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{ScheduledAuditName?:Value<string>;Frequency:Value<string>;DayOfMonth?:Value<string>;DayOfWeek?:Value<string>;TargetCheckNames:List<Value<string>>;Tags?:List<ResourceTag>;}declare class ScheduledAudit extends ResourceBase<Properties>{constructor(properties:Properties);}export{ScheduledAudit as R};