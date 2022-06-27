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

import * as _0 from './integration'
import * as _1 from './objectType'
import * as _2 from './domain'

export namespace CustomerProfiles {
  export const Integration = _0.R
  export const ObjectType = _1.R
  export const Domain = _2.R

  export type Integration = _0.R
  export type ObjectType = _1.R
  export type Domain = _2.R

  export namespace Integration {
    export type Task = _0.Task
    export type TriggerProperties = _0.TriggerProperties
    export type ObjectTypeMapping = _0.ObjectTypeMapping
    export type ScheduledTriggerProperties = _0.ScheduledTriggerProperties
    export type S3SourceProperties = _0.S3SourceProperties
    export type FlowDefinition = _0.FlowDefinition
    export type IncrementalPullConfig = _0.IncrementalPullConfig
    export type MarketoSourceProperties = _0.MarketoSourceProperties
    export type TaskPropertiesMap = _0.TaskPropertiesMap
    export type ConnectorOperator = _0.ConnectorOperator
    export type ZendeskSourceProperties = _0.ZendeskSourceProperties
    export type SourceConnectorProperties = _0.SourceConnectorProperties
    export type ServiceNowSourceProperties = _0.ServiceNowSourceProperties
    export type SalesforceSourceProperties = _0.SalesforceSourceProperties
    export type TriggerConfig = _0.TriggerConfig
    export type SourceFlowConfig = _0.SourceFlowConfig
  }
  export namespace ObjectType {
    export type KeyMap = _1.KeyMap
    export type FieldMap = _1.FieldMap
    export type ObjectTypeField = _1.ObjectTypeField
    export type ObjectTypeKey = _1.ObjectTypeKey
  }
}
