import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class AccessLogSettings{Format?:Value<string>;DestinationArn?:Value<string>;constructor(properties:AccessLogSettings);}export declare class RouteOverrides{Target?:Value<string>;AuthorizerId?:Value<string>;OperationName?:Value<string>;AuthorizationScopes?:List<Value<string>>;AuthorizationType?:Value<string>;constructor(properties:RouteOverrides);}export declare class StageOverrides{Description?:Value<string>;AccessLogSettings?:AccessLogSettings;AutoDeploy?:Value<boolean>;RouteSettings?:{[key:string]:any;};StageVariables?:{[key:string]:any;};DefaultRouteSettings?:RouteSettings;constructor(properties:StageOverrides);}export declare class RouteSettings{LoggingLevel?:Value<string>;DataTraceEnabled?:Value<boolean>;ThrottlingBurstLimit?:Value<number>;DetailedMetricsEnabled?:Value<boolean>;ThrottlingRateLimit?:Value<number>;constructor(properties:RouteSettings);}export declare class IntegrationOverrides{Description?:Value<string>;PayloadFormatVersion?:Value<string>;TimeoutInMillis?:Value<number>;IntegrationMethod?:Value<string>;constructor(properties:IntegrationOverrides);}export interface Properties{Integration?:IntegrationOverrides;Stage?:StageOverrides;ApiId:Value<string>;Route?:RouteOverrides;}declare class ApiGatewayManagedOverrides extends ResourceBase<Properties>{static AccessLogSettings:typeof AccessLogSettings;static RouteOverrides:typeof RouteOverrides;static StageOverrides:typeof StageOverrides;static RouteSettings:typeof RouteSettings;static IntegrationOverrides:typeof IntegrationOverrides;constructor(properties:Properties);}export{ApiGatewayManagedOverrides as R};