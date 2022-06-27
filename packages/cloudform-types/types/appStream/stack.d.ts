import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class AccessEndpoint{EndpointType:Value<string>;VpceId:Value<string>;constructor(properties:AccessEndpoint);}export declare class UserSetting{Action:Value<string>;Permission:Value<string>;constructor(properties:UserSetting);}export declare class ApplicationSettings{SettingsGroup?:Value<string>;Enabled:Value<boolean>;constructor(properties:ApplicationSettings);}export declare class StorageConnector{Domains?:List<Value<string>>;ResourceIdentifier?:Value<string>;ConnectorType:Value<string>;constructor(properties:StorageConnector);}export interface StackProperties{Description?:Value<string>;StorageConnectors?:List<StorageConnector>;DeleteStorageConnectors?:Value<boolean>;EmbedHostDomains?:List<Value<string>>;UserSettings?:List<UserSetting>;AttributesToDelete?:List<Value<string>>;RedirectURL?:Value<string>;Name?:Value<string>;FeedbackURL?:Value<string>;ApplicationSettings?:ApplicationSettings;DisplayName?:Value<string>;Tags?:List<ResourceTag>;AccessEndpoints?:List<AccessEndpoint>;}export default class Stack extends ResourceBase<StackProperties>{static AccessEndpoint:typeof AccessEndpoint;static UserSetting:typeof UserSetting;static ApplicationSettings:typeof ApplicationSettings;static StorageConnector:typeof StorageConnector;constructor(properties?:StackProperties);}