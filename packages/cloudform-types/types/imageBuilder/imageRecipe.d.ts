import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class InstanceBlockDeviceMapping{DeviceName?:Value<string>;VirtualName?:Value<string>;NoDevice?:Value<string>;Ebs?:EbsInstanceBlockDeviceSpecification;constructor(properties:InstanceBlockDeviceMapping);}export declare class SystemsManagerAgent{UninstallAfterBuild?:Value<boolean>;constructor(properties:SystemsManagerAgent);}export declare class ComponentConfiguration{ComponentArn?:Value<string>;Parameters?:List<ComponentParameter>;constructor(properties:ComponentConfiguration);}export declare class ComponentParameter{Name:Value<string>;Value:List<Value<string>>;constructor(properties:ComponentParameter);}export declare class AdditionalInstanceConfiguration{SystemsManagerAgent?:SystemsManagerAgent;UserDataOverride?:Value<string>;constructor(properties:AdditionalInstanceConfiguration);}export declare class EbsInstanceBlockDeviceSpecification{Encrypted?:Value<boolean>;DeleteOnTermination?:Value<boolean>;Iops?:Value<number>;KmsKeyId?:Value<string>;SnapshotId?:Value<string>;Throughput?:Value<number>;VolumeSize?:Value<number>;VolumeType?:Value<string>;constructor(properties:EbsInstanceBlockDeviceSpecification);}export interface Properties{Name:Value<string>;Description?:Value<string>;Version:Value<string>;Components:List<ComponentConfiguration>;BlockDeviceMappings?:List<InstanceBlockDeviceMapping>;ParentImage:Value<string>;WorkingDirectory?:Value<string>;AdditionalInstanceConfiguration?:AdditionalInstanceConfiguration;Tags?:{[key:string]:Value<string>;};}declare class ImageRecipe extends ResourceBase<Properties>{static InstanceBlockDeviceMapping:typeof InstanceBlockDeviceMapping;static SystemsManagerAgent:typeof SystemsManagerAgent;static ComponentConfiguration:typeof ComponentConfiguration;static ComponentParameter:typeof ComponentParameter;static AdditionalInstanceConfiguration:typeof AdditionalInstanceConfiguration;static EbsInstanceBlockDeviceSpecification:typeof EbsInstanceBlockDeviceSpecification;constructor(properties:Properties);}export{ImageRecipe as R};