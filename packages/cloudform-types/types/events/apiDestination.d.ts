import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Name?:Value<string>;Description?:Value<string>;ConnectionArn:Value<string>;InvocationRateLimitPerSecond?:Value<number>;InvocationEndpoint:Value<string>;HttpMethod:Value<string>;}declare class ApiDestination extends ResourceBase<Properties>{constructor(properties:Properties);}export{ApiDestination as R};