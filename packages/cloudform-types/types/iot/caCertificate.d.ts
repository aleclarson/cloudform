import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{CACertificatePem?:Value<string>;VerificationCertificatePem?:Value<string>;Status:Value<string>;AutoRegistrationStatus?:Value<string>;RegistrationConfig?:{[key:string]:any;};Tags?:List<ResourceTag>;}declare class CACertificate extends ResourceBase<Properties>{constructor(properties:Properties);}export{CACertificate as R};