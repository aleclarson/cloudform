import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class CodeSigningPolicies{UntrustedArtifactOnDeployment:Value<string>;constructor(properties:CodeSigningPolicies);}export declare class AllowedPublishers{SigningProfileVersionArns:List<Value<string>>;constructor(properties:AllowedPublishers);}export interface Properties{Description?:Value<string>;AllowedPublishers:AllowedPublishers;CodeSigningPolicies?:CodeSigningPolicies;}declare class CodeSigningConfig extends ResourceBase<Properties>{static CodeSigningPolicies:typeof CodeSigningPolicies;static AllowedPublishers:typeof AllowedPublishers;constructor(properties:Properties);}export{CodeSigningConfig as R};