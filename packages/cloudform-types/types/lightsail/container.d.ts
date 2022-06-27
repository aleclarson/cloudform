import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class EnvironmentVariable{Variable?:Value<string>;Value?:Value<string>;constructor(properties:EnvironmentVariable);}export declare class ContainerInner{ContainerName?:Value<string>;Command?:List<Value<string>>;Environment?:List<EnvironmentVariable>;Image?:Value<string>;Ports?:List<PortInfo>;constructor(properties:ContainerInner);}export declare class PublicEndpoint{ContainerName?:Value<string>;ContainerPort?:Value<number>;HealthCheckConfig?:HealthCheckConfig;constructor(properties:PublicEndpoint);}export declare class PortInfo{Port?:Value<string>;Protocol?:Value<string>;constructor(properties:PortInfo);}export declare class ContainerServiceDeployment{Containers?:List<Container>;PublicEndpoint?:PublicEndpoint;constructor(properties:ContainerServiceDeployment);}export declare class PublicDomainName{CertificateName?:Value<string>;DomainNames?:List<Value<string>>;constructor(properties:PublicDomainName);}export declare class HealthCheckConfig{HealthyThreshold?:Value<number>;IntervalSeconds?:Value<number>;Path?:Value<string>;SuccessCodes?:Value<string>;TimeoutSeconds?:Value<number>;UnhealthyThreshold?:Value<number>;constructor(properties:HealthCheckConfig);}export interface Properties{ServiceName:Value<string>;Power:Value<string>;Scale:Value<number>;PublicDomainNames?:List<PublicDomainName>;ContainerServiceDeployment?:ContainerServiceDeployment;IsDisabled?:Value<boolean>;Tags?:List<ResourceTag>;}declare class Container extends ResourceBase<Properties>{static EnvironmentVariable:typeof EnvironmentVariable;static Container:typeof ContainerInner;static PublicEndpoint:typeof PublicEndpoint;static PortInfo:typeof PortInfo;static ContainerServiceDeployment:typeof ContainerServiceDeployment;static PublicDomainName:typeof PublicDomainName;static HealthCheckConfig:typeof HealthCheckConfig;constructor(properties:Properties);}export{Container as R};