import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{ConsumerArn:Value<string>;TrackerName:Value<string>;}declare class TrackerConsumer extends ResourceBase<Properties>{constructor(properties:Properties);}export{TrackerConsumer as R};