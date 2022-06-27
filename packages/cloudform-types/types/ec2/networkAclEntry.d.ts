import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export declare class PortRange{From?:Value<number>;To?:Value<number>;constructor(properties:PortRange);}export declare class Icmp{Code?:Value<number>;Type?:Value<number>;constructor(properties:Icmp);}export interface Properties{PortRange?:PortRange;NetworkAclId:Value<string>;RuleAction:Value<string>;CidrBlock?:Value<string>;Egress?:Value<boolean>;RuleNumber:Value<number>;Ipv6CidrBlock?:Value<string>;Protocol:Value<number>;Icmp?:Icmp;}declare class NetworkAclEntry extends ResourceBase<Properties>{static PortRange:typeof PortRange;static Icmp:typeof Icmp;constructor(properties:Properties);}export{NetworkAclEntry as R};