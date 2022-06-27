import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class ConnectionHttpParameters{HeaderParameters?:List<Parameter>;QueryStringParameters?:List<Parameter>;BodyParameters?:List<Parameter>;constructor(properties:ConnectionHttpParameters);}export declare class ApiKeyAuthParameters{ApiKeyName:Value<string>;ApiKeyValue:Value<string>;constructor(properties:ApiKeyAuthParameters);}export declare class AuthParameters{ApiKeyAuthParameters?:ApiKeyAuthParameters;BasicAuthParameters?:BasicAuthParameters;OAuthParameters?:OAuthParameters;InvocationHttpParameters?:ConnectionHttpParameters;constructor(properties:AuthParameters);}export declare class BasicAuthParameters{Username:Value<string>;Password:Value<string>;constructor(properties:BasicAuthParameters);}export declare class Parameter{Key:Value<string>;Value:Value<string>;IsValueSecret?:Value<boolean>;constructor(properties:Parameter);}export declare class OAuthParameters{ClientParameters:ClientParameters;AuthorizationEndpoint:Value<string>;HttpMethod:Value<string>;OAuthHttpParameters?:ConnectionHttpParameters;constructor(properties:OAuthParameters);}export declare class ClientParameters{ClientID:Value<string>;ClientSecret:Value<string>;constructor(properties:ClientParameters);}export interface Properties{Name?:Value<string>;Description?:Value<string>;AuthorizationType:Value<string>;AuthParameters:AuthParameters;}declare class Connection extends ResourceBase<Properties>{static ConnectionHttpParameters:typeof ConnectionHttpParameters;static ApiKeyAuthParameters:typeof ApiKeyAuthParameters;static AuthParameters:typeof AuthParameters;static BasicAuthParameters:typeof BasicAuthParameters;static Parameter:typeof Parameter;static OAuthParameters:typeof OAuthParameters;static ClientParameters:typeof ClientParameters;constructor(properties:Properties);}export{Connection as R};