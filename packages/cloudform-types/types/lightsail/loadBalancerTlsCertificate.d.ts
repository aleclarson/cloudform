import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{LoadBalancerName:Value<string>;CertificateName:Value<string>;CertificateDomainName:Value<string>;CertificateAlternativeNames?:List<Value<string>>;IsAttached?:Value<boolean>;HttpsRedirectionEnabled?:Value<boolean>;}declare class LoadBalancerTlsCertificate extends ResourceBase<Properties>{constructor(properties:Properties);}export{LoadBalancerTlsCertificate as R};