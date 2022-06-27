import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class SignatureValidityPeriod{Value?:Value<number>;Type?:Value<string>;constructor(properties:SignatureValidityPeriod);}export interface Properties{SignatureValidityPeriod?:SignatureValidityPeriod;PlatformId:Value<string>;Tags?:List<ResourceTag>;}declare class SigningProfile extends ResourceBase<Properties>{static SignatureValidityPeriod:typeof SignatureValidityPeriod;constructor(properties:Properties);}export{SigningProfile as R};