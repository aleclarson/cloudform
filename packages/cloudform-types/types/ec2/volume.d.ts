import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{AutoEnableIO?:Value<boolean>;AvailabilityZone:Value<string>;Encrypted?:Value<boolean>;Iops?:Value<number>;KmsKeyId?:Value<string>;MultiAttachEnabled?:Value<boolean>;OutpostArn?:Value<string>;Size?:Value<number>;SnapshotId?:Value<string>;Tags?:List<ResourceTag>;Throughput?:Value<number>;VolumeType?:Value<string>;}declare class Volume extends ResourceBase<Properties>{constructor(properties:Properties);}export{Volume as R};