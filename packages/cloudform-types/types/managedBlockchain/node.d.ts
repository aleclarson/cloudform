import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export declare class NodeConfiguration{AvailabilityZone:Value<string>;InstanceType:Value<string>;constructor(properties:NodeConfiguration);}export interface Properties{MemberId:Value<string>;NetworkId:Value<string>;NodeConfiguration:NodeConfiguration;}declare class Node extends ResourceBase<Properties>{static NodeConfiguration:typeof NodeConfiguration;constructor(properties:Properties);}export{Node as R};