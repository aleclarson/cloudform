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

import * as _0 from './deliveryChannel'
import * as _1 from './organizationConfigRule'
import * as _2 from './configRule'
import * as _3 from './storedQuery'
import * as _4 from './remediationConfiguration'
import * as _5 from './configurationAggregator'
import * as _6 from './aggregationAuthorization'
import * as _7 from './configurationRecorder'
import * as _8 from './organizationConformancePack'
import * as _9 from './conformancePack'

export namespace Config {
  export const DeliveryChannel = _0.R
  export const OrganizationConfigRule = _1.R
  export const ConfigRule = _2.R
  export const StoredQuery = _3.R
  export const RemediationConfiguration = _4.R
  export const ConfigurationAggregator = _5.R
  export const AggregationAuthorization = _6.R
  export const ConfigurationRecorder = _7.R
  export const OrganizationConformancePack = _8.R
  export const ConformancePack = _9.R

  export type DeliveryChannel = _0.R
  export type OrganizationConfigRule = _1.R
  export type ConfigRule = _2.R
  export type StoredQuery = _3.R
  export type RemediationConfiguration = _4.R
  export type ConfigurationAggregator = _5.R
  export type AggregationAuthorization = _6.R
  export type ConfigurationRecorder = _7.R
  export type OrganizationConformancePack = _8.R
  export type ConformancePack = _9.R

  export namespace DeliveryChannel {
    export type ConfigSnapshotDeliveryProperties = _0.ConfigSnapshotDeliveryProperties
  }
  export namespace OrganizationConfigRule {
    export type OrganizationManagedRuleMetadata = _1.OrganizationManagedRuleMetadata
    export type OrganizationCustomCodeRuleMetadata = _1.OrganizationCustomCodeRuleMetadata
    export type OrganizationCustomRuleMetadata = _1.OrganizationCustomRuleMetadata
  }
  export namespace ConfigRule {
    export type Source = _2.Source
    export type Scope = _2.Scope
    export type SourceDetail = _2.SourceDetail
  }
  export namespace RemediationConfiguration {
    export type ResourceValue = _4.ResourceValue
    export type RemediationParameterValue = _4.RemediationParameterValue
    export type SsmControls = _4.SsmControls
    export type StaticValue = _4.StaticValue
    export type ExecutionControls = _4.ExecutionControls
  }
  export namespace ConfigurationAggregator {
    export type OrganizationAggregationSource = _5.OrganizationAggregationSource
    export type AccountAggregationSource = _5.AccountAggregationSource
  }
  export namespace ConfigurationRecorder {
    export type RecordingGroup = _7.RecordingGroup
  }
  export namespace OrganizationConformancePack {
    export type ConformancePackInputParameter = _8.ConformancePackInputParameter
  }
  export namespace ConformancePack {
    export type ConformancePackInputParameter = _9.ConformancePackInputParameter
  }
}
