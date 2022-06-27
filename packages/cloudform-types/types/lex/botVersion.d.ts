import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class BotVersionLocaleDetails{SourceBotVersion:Value<string>;constructor(properties:BotVersionLocaleDetails);}export declare class BotVersionLocaleSpecification{LocaleId:Value<string>;BotVersionLocaleDetails:BotVersionLocaleDetails;constructor(properties:BotVersionLocaleSpecification);}export interface Properties{BotId:Value<string>;Description?:Value<string>;BotVersionLocaleSpecification:List<BotVersionLocaleSpecification>;}declare class BotVersion extends ResourceBase<Properties>{static BotVersionLocaleDetails:typeof BotVersionLocaleDetails;static BotVersionLocaleSpecification:typeof BotVersionLocaleSpecification;constructor(properties:Properties);}export{BotVersion as R};