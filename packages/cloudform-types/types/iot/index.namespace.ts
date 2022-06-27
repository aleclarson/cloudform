/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import * as _0 from './customMetric'
import * as _1 from './mitigationAction'
import * as _2 from './securityProfile'
import * as _3 from './topicRule'
import * as _4 from './caCertificate'
import * as _5 from './domainConfiguration'
import * as _6 from './accountAuditConfiguration'
import * as _7 from './authorizer'
import * as _8 from './dimension'
import * as _9 from './thing'
import * as _a from './fleetMetric'
import * as _b from './thingPrincipalAttachment'
import * as _c from './jobTemplate'
import * as _d from './roleAlias'
import * as _e from './provisioningTemplate'
import * as _f from './policy'
import * as _10 from './resourceSpecificLogging'
import * as _11 from './scheduledAudit'
import * as _12 from './policyPrincipalAttachment'
import * as _13 from './logging'
import * as _14 from './topicRuleDestination'
import * as _15 from './certificate'

export namespace IoT {
  export const CustomMetric = _0.R
  export const MitigationAction = _1.R
  export const SecurityProfile = _2.R
  export const TopicRule = _3.R
  export const CACertificate = _4.R
  export const DomainConfiguration = _5.R
  export const AccountAuditConfiguration = _6.R
  export const Authorizer = _7.R
  export const Dimension = _8.R
  export const Thing = _9.R
  export const FleetMetric = _a.R
  export const ThingPrincipalAttachment = _b.R
  export const JobTemplate = _c.R
  export const RoleAlias = _d.R
  export const ProvisioningTemplate = _e.R
  export const Policy = _f.R
  export const ResourceSpecificLogging = _10.R
  export const ScheduledAudit = _11.R
  export const PolicyPrincipalAttachment = _12.R
  export const Logging = _13.R
  export const TopicRuleDestination = _14.R
  export const Certificate = _15.R

  export type CustomMetric = _0.R
  export type MitigationAction = _1.R
  export type SecurityProfile = _2.R
  export type TopicRule = _3.R
  export type CACertificate = _4.R
  export type DomainConfiguration = _5.R
  export type AccountAuditConfiguration = _6.R
  export type Authorizer = _7.R
  export type Dimension = _8.R
  export type Thing = _9.R
  export type FleetMetric = _a.R
  export type ThingPrincipalAttachment = _b.R
  export type JobTemplate = _c.R
  export type RoleAlias = _d.R
  export type ProvisioningTemplate = _e.R
  export type Policy = _f.R
  export type ResourceSpecificLogging = _10.R
  export type ScheduledAudit = _11.R
  export type PolicyPrincipalAttachment = _12.R
  export type Logging = _13.R
  export type TopicRuleDestination = _14.R
  export type Certificate = _15.R

  export namespace MitigationAction {
    export type AddThingsToThingGroupParams = _1.AddThingsToThingGroupParams
    export type UpdateCACertificateParams = _1.UpdateCACertificateParams
    export type UpdateDeviceCertificateParams = _1.UpdateDeviceCertificateParams
    export type ReplaceDefaultPolicyVersionParams = _1.ReplaceDefaultPolicyVersionParams
    export type EnableIoTLoggingParams = _1.EnableIoTLoggingParams
    export type ActionParams = _1.ActionParams
    export type PublishFindingToSnsParams = _1.PublishFindingToSnsParams
  }
  export namespace SecurityProfile {
    export type MetricToRetain = _2.MetricToRetain
    export type MachineLearningDetectionConfig = _2.MachineLearningDetectionConfig
    export type MetricDimension = _2.MetricDimension
    export type MetricValue = _2.MetricValue
    export type AlertTarget = _2.AlertTarget
    export type Behavior = _2.Behavior
    export type BehaviorCriteria = _2.BehaviorCriteria
    export type StatisticalThreshold = _2.StatisticalThreshold
  }
  export namespace TopicRule {
    export type AssetPropertyVariant = _3.AssetPropertyVariant
    export type SigV4Authorization = _3.SigV4Authorization
    export type SqsAction = _3.SqsAction
    export type PutItemInput = _3.PutItemInput
    export type SnsAction = _3.SnsAction
    export type OpenSearchAction = _3.OpenSearchAction
    export type HttpAction = _3.HttpAction
    export type PutAssetPropertyValueEntry = _3.PutAssetPropertyValueEntry
    export type LambdaAction = _3.LambdaAction
    export type DynamoDBAction = _3.DynamoDBAction
    export type IotAnalyticsAction = _3.IotAnalyticsAction
    export type IotEventsAction = _3.IotEventsAction
    export type KafkaAction = _3.KafkaAction
    export type TimestreamAction = _3.TimestreamAction
    export type IotSiteWiseAction = _3.IotSiteWiseAction
    export type DynamoDBv2Action = _3.DynamoDBv2Action
    export type CloudwatchMetricAction = _3.CloudwatchMetricAction
    export type S3Action = _3.S3Action
    export type FirehoseAction = _3.FirehoseAction
    export type AssetPropertyTimestamp = _3.AssetPropertyTimestamp
    export type AssetPropertyValue = _3.AssetPropertyValue
    export type ElasticsearchAction = _3.ElasticsearchAction
    export type KinesisAction = _3.KinesisAction
    export type Action = _3.Action
    export type HttpAuthorization = _3.HttpAuthorization
    export type HttpActionHeader = _3.HttpActionHeader
    export type RepublishAction = _3.RepublishAction
    export type StepFunctionsAction = _3.StepFunctionsAction
    export type TopicRulePayload = _3.TopicRulePayload
    export type CloudwatchAlarmAction = _3.CloudwatchAlarmAction
    export type CloudwatchLogsAction = _3.CloudwatchLogsAction
    export type TimestreamDimension = _3.TimestreamDimension
    export type TimestreamTimestamp = _3.TimestreamTimestamp
  }
  export namespace DomainConfiguration {
    export type AuthorizerConfig = _5.AuthorizerConfig
    export type ServerCertificateSummary = _5.ServerCertificateSummary
  }
  export namespace AccountAuditConfiguration {
    export type AuditCheckConfiguration = _6.AuditCheckConfiguration
    export type AuditNotificationTargetConfigurations = _6.AuditNotificationTargetConfigurations
    export type AuditNotificationTarget = _6.AuditNotificationTarget
    export type AuditCheckConfigurations = _6.AuditCheckConfigurations
  }
  export namespace Thing {
    export type AttributePayload = _9.AttributePayload
  }
  export namespace FleetMetric {
    export type AggregationType = _a.AggregationType
  }
  export namespace ProvisioningTemplate {
    export type ProvisioningHook = _e.ProvisioningHook
  }
  export namespace TopicRuleDestination {
    export type VpcDestinationProperties = _14.VpcDestinationProperties
    export type HttpUrlDestinationSummary = _14.HttpUrlDestinationSummary
  }
}
