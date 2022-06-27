import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class CapacityProviderStrategy{Base?:Value<number>;Weight?:Value<number>;CapacityProvider:Value<string>;constructor(properties:CapacityProviderStrategy);}export interface Properties{CapacityProviders:List<Value<string>>;Cluster:Value<string>;DefaultCapacityProviderStrategy:List<CapacityProviderStrategy>;}declare class ClusterCapacityProviderAssociations extends ResourceBase<Properties>{static CapacityProviderStrategy:typeof CapacityProviderStrategy;constructor(properties:Properties);}export{ClusterCapacityProviderAssociations as R};