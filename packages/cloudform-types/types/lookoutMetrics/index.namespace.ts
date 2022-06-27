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

import * as _0 from './alert'
import * as _1 from './anomalyDetector'

export namespace LookoutMetrics {
  export const Alert = _0.R
  export const AnomalyDetector = _1.R

  export type Alert = _0.R
  export type AnomalyDetector = _1.R

  export namespace Alert {
    export type SNSConfiguration = _0.SNSConfiguration
    export type LambdaConfiguration = _0.LambdaConfiguration
    export type Action = _0.Action
  }
  export namespace AnomalyDetector {
    export type FileFormatDescriptor = _1.FileFormatDescriptor
    export type CsvFormatDescriptor = _1.CsvFormatDescriptor
    export type VpcConfiguration = _1.VpcConfiguration
    export type RDSSourceConfig = _1.RDSSourceConfig
    export type TimestampColumn = _1.TimestampColumn
    export type JsonFormatDescriptor = _1.JsonFormatDescriptor
    export type AnomalyDetectorConfig = _1.AnomalyDetectorConfig
    export type AppFlowConfig = _1.AppFlowConfig
    export type MetricSource = _1.MetricSource
    export type RedshiftSourceConfig = _1.RedshiftSourceConfig
    export type Metric = _1.Metric
    export type MetricSet = _1.MetricSet
    export type CloudwatchConfig = _1.CloudwatchConfig
    export type S3SourceConfig = _1.S3SourceConfig
  }
}
