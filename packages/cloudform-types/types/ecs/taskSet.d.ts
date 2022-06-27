import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class NetworkConfiguration{AwsVpcConfiguration?:AwsVpcConfiguration;constructor(properties:NetworkConfiguration);}export declare class ServiceRegistry{ContainerName?:Value<string>;ContainerPort?:Value<number>;Port?:Value<number>;RegistryArn?:Value<string>;constructor(properties:ServiceRegistry);}export declare class LoadBalancer{ContainerName?:Value<string>;ContainerPort?:Value<number>;LoadBalancerName?:Value<string>;TargetGroupArn?:Value<string>;constructor(properties:LoadBalancer);}export declare class AwsVpcConfiguration{AssignPublicIp?:Value<string>;SecurityGroups?:List<Value<string>>;Subnets:List<Value<string>>;constructor(properties:AwsVpcConfiguration);}export declare class Scale{Unit?:Value<string>;Value?:Value<number>;constructor(properties:Scale);}export interface Properties{Cluster:Value<string>;ExternalId?:Value<string>;LaunchType?:Value<string>;LoadBalancers?:List<LoadBalancer>;NetworkConfiguration?:NetworkConfiguration;PlatformVersion?:Value<string>;Scale?:Scale;Service:Value<string>;ServiceRegistries?:List<ServiceRegistry>;TaskDefinition:Value<string>;}declare class TaskSet extends ResourceBase<Properties>{static NetworkConfiguration:typeof NetworkConfiguration;static ServiceRegistry:typeof ServiceRegistry;static LoadBalancer:typeof LoadBalancer;static AwsVpcConfiguration:typeof AwsVpcConfiguration;static Scale:typeof Scale;constructor(properties:Properties);}export{TaskSet as R};