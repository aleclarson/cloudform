import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{StartDate?:Value<string>;Description?:Value<string>;AllowUnassociatedTargets:Value<boolean>;Cutoff:Value<number>;Schedule:Value<string>;Duration:Value<number>;ScheduleOffset?:Value<number>;EndDate?:Value<string>;Tags?:List<ResourceTag>;Name:Value<string>;ScheduleTimezone?:Value<string>;}declare class MaintenanceWindow extends ResourceBase<Properties>{constructor(properties:Properties);}export{MaintenanceWindow as R};