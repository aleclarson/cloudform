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

import * as _0 from './flow'
import * as _1 from './connectorProfile'

export namespace AppFlow {
  export const Flow = _0.R
  export const ConnectorProfile = _1.R

  export type Flow = _0.R
  export type ConnectorProfile = _1.R

  export namespace Flow {
    export type IncrementalPullConfig = _0.IncrementalPullConfig
    export type PrefixConfig = _0.PrefixConfig
    export type S3OutputFormatConfig = _0.S3OutputFormatConfig
    export type DestinationFlowConfig = _0.DestinationFlowConfig
    export type DatadogSourceProperties = _0.DatadogSourceProperties
    export type AggregationConfig = _0.AggregationConfig
    export type ScheduledTriggerProperties = _0.ScheduledTriggerProperties
    export type DestinationConnectorProperties = _0.DestinationConnectorProperties
    export type ConnectorOperator = _0.ConnectorOperator
    export type ZendeskSourceProperties = _0.ZendeskSourceProperties
    export type SalesforceDestinationProperties = _0.SalesforceDestinationProperties
    export type ErrorHandlingConfig = _0.ErrorHandlingConfig
    export type S3SourceProperties = _0.S3SourceProperties
    export type SalesforceSourceProperties = _0.SalesforceSourceProperties
    export type SingularSourceProperties = _0.SingularSourceProperties
    export type EventBridgeDestinationProperties = _0.EventBridgeDestinationProperties
    export type MarketoSourceProperties = _0.MarketoSourceProperties
    export type SlackSourceProperties = _0.SlackSourceProperties
    export type RedshiftDestinationProperties = _0.RedshiftDestinationProperties
    export type LookoutMetricsDestinationProperties = _0.LookoutMetricsDestinationProperties
    export type SourceFlowConfig = _0.SourceFlowConfig
    export type UpsolverS3OutputFormatConfig = _0.UpsolverS3OutputFormatConfig
    export type UpsolverDestinationProperties = _0.UpsolverDestinationProperties
    export type ServiceNowSourceProperties = _0.ServiceNowSourceProperties
    export type S3InputFormatConfig = _0.S3InputFormatConfig
    export type SAPODataSourceProperties = _0.SAPODataSourceProperties
    export type ZendeskDestinationProperties = _0.ZendeskDestinationProperties
    export type SAPODataDestinationProperties = _0.SAPODataDestinationProperties
    export type SuccessResponseHandlingConfig = _0.SuccessResponseHandlingConfig
    export type InforNexusSourceProperties = _0.InforNexusSourceProperties
    export type MarketoDestinationProperties = _0.MarketoDestinationProperties
    export type S3DestinationProperties = _0.S3DestinationProperties
    export type SourceConnectorProperties = _0.SourceConnectorProperties
    export type TrendmicroSourceProperties = _0.TrendmicroSourceProperties
    export type SnowflakeDestinationProperties = _0.SnowflakeDestinationProperties
    export type GoogleAnalyticsSourceProperties = _0.GoogleAnalyticsSourceProperties
    export type VeevaSourceProperties = _0.VeevaSourceProperties
    export type DynatraceSourceProperties = _0.DynatraceSourceProperties
    export type Task = _0.Task
    export type TaskPropertiesObject = _0.TaskPropertiesObject
    export type TriggerConfig = _0.TriggerConfig
    export type AmplitudeSourceProperties = _0.AmplitudeSourceProperties
    export type CustomProperties = _0.CustomProperties
    export type CustomConnectorSourceProperties = _0.CustomConnectorSourceProperties
    export type CustomConnectorDestinationProperties = _0.CustomConnectorDestinationProperties
  }
  export namespace ConnectorProfile {
    export type InforNexusConnectorProfileProperties = _1.InforNexusConnectorProfileProperties
    export type DynatraceConnectorProfileCredentials = _1.DynatraceConnectorProfileCredentials
    export type MarketoConnectorProfileCredentials = _1.MarketoConnectorProfileCredentials
    export type RedshiftConnectorProfileCredentials = _1.RedshiftConnectorProfileCredentials
    export type ZendeskConnectorProfileProperties = _1.ZendeskConnectorProfileProperties
    export type GoogleAnalyticsConnectorProfileCredentials = _1.GoogleAnalyticsConnectorProfileCredentials
    export type DynatraceConnectorProfileProperties = _1.DynatraceConnectorProfileProperties
    export type SalesforceConnectorProfileCredentials = _1.SalesforceConnectorProfileCredentials
    export type RedshiftConnectorProfileProperties = _1.RedshiftConnectorProfileProperties
    export type ConnectorProfileCredentials = _1.ConnectorProfileCredentials
    export type SingularConnectorProfileCredentials = _1.SingularConnectorProfileCredentials
    export type ServiceNowConnectorProfileCredentials = _1.ServiceNowConnectorProfileCredentials
    export type SAPODataConnectorProfileCredentials = _1.SAPODataConnectorProfileCredentials
    export type SnowflakeConnectorProfileCredentials = _1.SnowflakeConnectorProfileCredentials
    export type SAPODataConnectorProfileProperties = _1.SAPODataConnectorProfileProperties
    export type ZendeskConnectorProfileCredentials = _1.ZendeskConnectorProfileCredentials
    export type OAuthProperties = _1.OAuthProperties
    export type SnowflakeConnectorProfileProperties = _1.SnowflakeConnectorProfileProperties
    export type SalesforceConnectorProfileProperties = _1.SalesforceConnectorProfileProperties
    export type ConnectorProfileConfig = _1.ConnectorProfileConfig
    export type AmplitudeConnectorProfileCredentials = _1.AmplitudeConnectorProfileCredentials
    export type ConnectorOAuthRequest = _1.ConnectorOAuthRequest
    export type DatadogConnectorProfileCredentials = _1.DatadogConnectorProfileCredentials
    export type SlackConnectorProfileCredentials = _1.SlackConnectorProfileCredentials
    export type TrendmicroConnectorProfileCredentials = _1.TrendmicroConnectorProfileCredentials
    export type VeevaConnectorProfileCredentials = _1.VeevaConnectorProfileCredentials
    export type VeevaConnectorProfileProperties = _1.VeevaConnectorProfileProperties
    export type SlackConnectorProfileProperties = _1.SlackConnectorProfileProperties
    export type MarketoConnectorProfileProperties = _1.MarketoConnectorProfileProperties
    export type InforNexusConnectorProfileCredentials = _1.InforNexusConnectorProfileCredentials
    export type DatadogConnectorProfileProperties = _1.DatadogConnectorProfileProperties
    export type ServiceNowConnectorProfileProperties = _1.ServiceNowConnectorProfileProperties
    export type ConnectorProfileProperties = _1.ConnectorProfileProperties
    export type CredentialsMap = _1.CredentialsMap
    export type ProfileProperties = _1.ProfileProperties
    export type BasicAuthCredentials = _1.BasicAuthCredentials
    export type TokenUrlCustomProperties = _1.TokenUrlCustomProperties
    export type CustomConnectorProfileCredentials = _1.CustomConnectorProfileCredentials
    export type CustomConnectorProfileProperties = _1.CustomConnectorProfileProperties
    export type OAuth2Credentials = _1.OAuth2Credentials
    export type CustomAuthCredentials = _1.CustomAuthCredentials
    export type ApiKeyCredentials = _1.ApiKeyCredentials
    export type OAuth2Properties = _1.OAuth2Properties
  }
}
