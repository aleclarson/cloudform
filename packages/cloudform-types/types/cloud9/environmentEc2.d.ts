import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class Repository{PathComponent:Value<string>;RepositoryUrl:Value<string>;constructor(properties:Repository);}export interface Properties{Repositories?:List<Repository>;OwnerArn?:Value<string>;Description?:Value<string>;ConnectionType?:Value<string>;AutomaticStopTimeMinutes?:Value<number>;ImageId?:Value<string>;SubnetId?:Value<string>;InstanceType:Value<string>;Tags?:List<ResourceTag>;Name?:Value<string>;}declare class EnvironmentEC2 extends ResourceBase<Properties>{static Repository:typeof Repository;constructor(properties:Properties);}export{EnvironmentEC2 as R};