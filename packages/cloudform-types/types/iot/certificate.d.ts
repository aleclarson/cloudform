import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{CACertificatePem?:Value<string>;CertificatePem?:Value<string>;CertificateSigningRequest?:Value<string>;CertificateMode?:Value<string>;Status:Value<string>;}declare class Certificate extends ResourceBase<Properties>{constructor(properties:Properties);}export{Certificate as R};