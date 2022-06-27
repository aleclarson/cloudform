import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{ReportName:Value<string>;TimeUnit:Value<string>;Format:Value<string>;Compression:Value<string>;AdditionalSchemaElements?:List<Value<string>>;S3Bucket:Value<string>;S3Prefix:Value<string>;S3Region:Value<string>;AdditionalArtifacts?:List<Value<string>>;RefreshClosedReports:Value<boolean>;ReportVersioning:Value<string>;BillingViewArn?:Value<string>;}declare class ReportDefinition extends ResourceBase<Properties>{constructor(properties:Properties);}export{ReportDefinition as R};