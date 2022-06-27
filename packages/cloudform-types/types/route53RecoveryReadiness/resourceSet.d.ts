import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class TargetResource{NLBResource?:NLBResource;R53Resource?:R53ResourceRecord;constructor(properties:TargetResource);}export declare class Resource{ResourceArn?:Value<string>;ComponentId?:Value<string>;DnsTargetResource?:DNSTargetResource;ReadinessScopes?:List<Value<string>>;constructor(properties:Resource);}export declare class DNSTargetResource{DomainName?:Value<string>;RecordSetId?:Value<string>;HostedZoneArn?:Value<string>;RecordType?:Value<string>;TargetResource?:TargetResource;constructor(properties:DNSTargetResource);}export declare class NLBResource{Arn?:Value<string>;constructor(properties:NLBResource);}export declare class R53ResourceRecord{DomainName?:Value<string>;RecordSetId?:Value<string>;constructor(properties:R53ResourceRecord);}export interface Properties{ResourceSetName:Value<string>;Resources:List<Resource>;ResourceSetType:Value<string>;Tags?:List<ResourceTag>;}declare class ResourceSet extends ResourceBase<Properties>{static TargetResource:typeof TargetResource;static Resource:typeof Resource;static DNSTargetResource:typeof DNSTargetResource;static NLBResource:typeof NLBResource;static R53ResourceRecord:typeof R53ResourceRecord;constructor(properties:Properties);}export{ResourceSet as R};