import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class AlarmRule{SimpleRule?:SimpleRule;constructor(properties:AlarmRule);}export declare class DynamoDBv2{Payload?:Payload;TableName:Value<string>;constructor(properties:DynamoDBv2);}export declare class AssetPropertyTimestamp{OffsetInNanos?:Value<string>;TimeInSeconds:Value<string>;constructor(properties:AssetPropertyTimestamp);}export declare class IotTopicPublish{MqttTopic:Value<string>;Payload?:Payload;constructor(properties:IotTopicPublish);}export declare class AssetPropertyValue{Quality?:Value<string>;Timestamp?:AssetPropertyTimestamp;Value:AssetPropertyVariant;constructor(properties:AssetPropertyValue);}export declare class IotEvents{InputName:Value<string>;Payload?:Payload;constructor(properties:IotEvents);}export declare class Payload{ContentExpression:Value<string>;Type:Value<string>;constructor(properties:Payload);}export declare class InitializationConfiguration{DisabledOnInitialization:Value<boolean>;constructor(properties:InitializationConfiguration);}export declare class Sns{Payload?:Payload;TargetArn:Value<string>;constructor(properties:Sns);}export declare class AlarmCapabilities{InitializationConfiguration?:InitializationConfiguration;AcknowledgeFlow?:AcknowledgeFlow;constructor(properties:AlarmCapabilities);}export declare class Sqs{Payload?:Payload;QueueUrl:Value<string>;UseBase64?:Value<boolean>;constructor(properties:Sqs);}export declare class AlarmAction{DynamoDB?:DynamoDB;DynamoDBv2?:DynamoDBv2;Firehose?:Firehose;IotEvents?:IotEvents;IotSiteWise?:IotSiteWise;IotTopicPublish?:IotTopicPublish;Lambda?:Lambda;Sns?:Sns;Sqs?:Sqs;constructor(properties:AlarmAction);}export declare class Firehose{DeliveryStreamName:Value<string>;Payload?:Payload;Separator?:Value<string>;constructor(properties:Firehose);}export declare class SimpleRule{InputProperty:Value<string>;ComparisonOperator:Value<string>;Threshold:Value<string>;constructor(properties:SimpleRule);}export declare class AcknowledgeFlow{Enabled?:Value<boolean>;constructor(properties:AcknowledgeFlow);}export declare class DynamoDB{HashKeyField:Value<string>;HashKeyType?:Value<string>;HashKeyValue:Value<string>;Operation?:Value<string>;Payload?:Payload;PayloadField?:Value<string>;RangeKeyField?:Value<string>;RangeKeyType?:Value<string>;RangeKeyValue?:Value<string>;TableName:Value<string>;constructor(properties:DynamoDB);}export declare class Lambda{FunctionArn:Value<string>;Payload?:Payload;constructor(properties:Lambda);}export declare class AssetPropertyVariant{BooleanValue?:Value<string>;DoubleValue?:Value<string>;IntegerValue?:Value<string>;StringValue?:Value<string>;constructor(properties:AssetPropertyVariant);}export declare class IotSiteWise{AssetId?:Value<string>;EntryId?:Value<string>;PropertyAlias?:Value<string>;PropertyId?:Value<string>;PropertyValue?:AssetPropertyValue;constructor(properties:IotSiteWise);}export declare class AlarmEventActions{AlarmActions?:List<AlarmAction>;constructor(properties:AlarmEventActions);}export interface Properties{AlarmModelName?:Value<string>;AlarmModelDescription?:Value<string>;RoleArn:Value<string>;Key?:Value<string>;Severity?:Value<number>;AlarmRule:AlarmRule;AlarmEventActions?:AlarmEventActions;AlarmCapabilities?:AlarmCapabilities;Tags?:List<ResourceTag>;}declare class AlarmModel extends ResourceBase<Properties>{static AlarmRule:typeof AlarmRule;static DynamoDBv2:typeof DynamoDBv2;static AssetPropertyTimestamp:typeof AssetPropertyTimestamp;static IotTopicPublish:typeof IotTopicPublish;static AssetPropertyValue:typeof AssetPropertyValue;static IotEvents:typeof IotEvents;static Payload:typeof Payload;static InitializationConfiguration:typeof InitializationConfiguration;static Sns:typeof Sns;static AlarmCapabilities:typeof AlarmCapabilities;static Sqs:typeof Sqs;static AlarmAction:typeof AlarmAction;static Firehose:typeof Firehose;static SimpleRule:typeof SimpleRule;static AcknowledgeFlow:typeof AcknowledgeFlow;static DynamoDB:typeof DynamoDB;static Lambda:typeof Lambda;static AssetPropertyVariant:typeof AssetPropertyVariant;static IotSiteWise:typeof IotSiteWise;static AlarmEventActions:typeof AlarmEventActions;constructor(properties:Properties);}export{AlarmModel as R};