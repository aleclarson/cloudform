import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class RecordingGroup{AllSupported?:Value<boolean>;IncludeGlobalResourceTypes?:Value<boolean>;ResourceTypes?:List<Value<string>>;constructor(properties:RecordingGroup);}export interface Properties{Name?:Value<string>;RecordingGroup?:RecordingGroup;RoleARN:Value<string>;}declare class ConfigurationRecorder extends ResourceBase<Properties>{static RecordingGroup:typeof RecordingGroup;constructor(properties:Properties);}export{ConfigurationRecorder as R};