import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Bucket:Value<string>;PolicyDocument:{[key:string]:any;};}declare class BucketPolicy extends ResourceBase<Properties>{constructor(properties:Properties);}export{BucketPolicy as R};