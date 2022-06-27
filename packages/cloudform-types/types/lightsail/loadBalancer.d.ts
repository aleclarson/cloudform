import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{LoadBalancerName:Value<string>;InstancePort:Value<number>;IpAddressType?:Value<string>;AttachedInstances?:List<Value<string>>;HealthCheckPath?:Value<string>;SessionStickinessEnabled?:Value<boolean>;SessionStickinessLBCookieDurationSeconds?:Value<string>;TlsPolicyName?:Value<string>;Tags?:List<ResourceTag>;}declare class LoadBalancer extends ResourceBase<Properties>{constructor(properties:Properties);}export{LoadBalancer as R};