import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class CodeHookSpecification{LambdaCodeHook:LambdaCodeHook;constructor(properties:CodeHookSpecification);}export declare class BotAliasLocaleSettings{CodeHookSpecification?:CodeHookSpecification;Enabled:Value<boolean>;constructor(properties:BotAliasLocaleSettings);}export declare class AudioLogDestination{S3Bucket:S3BucketLogDestination;constructor(properties:AudioLogDestination);}export declare class ConversationLogSettings{AudioLogSettings?:List<AudioLogSetting>;TextLogSettings?:List<TextLogSetting>;constructor(properties:ConversationLogSettings);}export declare class CloudWatchLogGroupLogDestination{CloudWatchLogGroupArn:Value<string>;LogPrefix:Value<string>;constructor(properties:CloudWatchLogGroupLogDestination);}export declare class LambdaCodeHook{CodeHookInterfaceVersion:Value<string>;LambdaArn:Value<string>;constructor(properties:LambdaCodeHook);}export declare class AudioLogSetting{Destination:AudioLogDestination;Enabled:Value<boolean>;constructor(properties:AudioLogSetting);}export declare class TextLogSetting{Destination:TextLogDestination;Enabled:Value<boolean>;constructor(properties:TextLogSetting);}export declare class TextLogDestination{CloudWatch:CloudWatchLogGroupLogDestination;constructor(properties:TextLogDestination);}export declare class BotAliasLocaleSettingsItem{LocaleId:Value<string>;BotAliasLocaleSetting:BotAliasLocaleSettings;constructor(properties:BotAliasLocaleSettingsItem);}export declare class S3BucketLogDestination{S3BucketArn:Value<string>;LogPrefix:Value<string>;KmsKeyArn?:Value<string>;constructor(properties:S3BucketLogDestination);}export interface Properties{BotId:Value<string>;BotAliasLocaleSettings?:List<BotAliasLocaleSettingsItem>;BotAliasName:Value<string>;BotVersion?:Value<string>;ConversationLogSettings?:ConversationLogSettings;Description?:Value<string>;SentimentAnalysisSettings?:{[key:string]:any;};BotAliasTags?:List<ResourceTag>;}declare class BotAlias extends ResourceBase<Properties>{static CodeHookSpecification:typeof CodeHookSpecification;static BotAliasLocaleSettings:typeof BotAliasLocaleSettings;static AudioLogDestination:typeof AudioLogDestination;static ConversationLogSettings:typeof ConversationLogSettings;static CloudWatchLogGroupLogDestination:typeof CloudWatchLogGroupLogDestination;static LambdaCodeHook:typeof LambdaCodeHook;static AudioLogSetting:typeof AudioLogSetting;static TextLogSetting:typeof TextLogSetting;static TextLogDestination:typeof TextLogDestination;static BotAliasLocaleSettingsItem:typeof BotAliasLocaleSettingsItem;static S3BucketLogDestination:typeof S3BucketLogDestination;constructor(properties:Properties);}export{BotAlias as R};