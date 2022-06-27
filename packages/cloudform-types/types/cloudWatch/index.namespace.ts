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

import * as _0 from './anomalyDetector'
import * as _1 from './compositeAlarm'
import * as _2 from './insightRule'
import * as _3 from './dashboard'
import * as _4 from './metricStream'
import * as _5 from './alarm'

export namespace CloudWatch {
  export const AnomalyDetector = _0.R
  export const CompositeAlarm = _1.R
  export const InsightRule = _2.R
  export const Dashboard = _3.R
  export const MetricStream = _4.R
  export const Alarm = _5.R

  export type AnomalyDetector = _0.R
  export type CompositeAlarm = _1.R
  export type InsightRule = _2.R
  export type Dashboard = _3.R
  export type MetricStream = _4.R
  export type Alarm = _5.R

  export namespace AnomalyDetector {
    export type MetricDataQuery = _0.MetricDataQuery
    export type SingleMetricAnomalyDetector = _0.SingleMetricAnomalyDetector
    export type MetricDataQueries = _0.MetricDataQueries
    export type Range = _0.Range
    export type Dimension = _0.Dimension
    export type MetricMathAnomalyDetector = _0.MetricMathAnomalyDetector
    export type Metric = _0.Metric
    export type MetricStat = _0.MetricStat
    export type Configuration = _0.Configuration
  }
  export namespace InsightRule {
    export type Tags = _2.Tags
  }
  export namespace MetricStream {
    export type MetricStreamStatisticsConfiguration = _4.MetricStreamStatisticsConfiguration
    export type MetricStreamFilter = _4.MetricStreamFilter
    export type MetricStreamStatisticsMetric = _4.MetricStreamStatisticsMetric
  }
  export namespace Alarm {
    export type MetricStat = _5.MetricStat
    export type MetricDataQuery = _5.MetricDataQuery
    export type Dimension = _5.Dimension
    export type Metric = _5.Metric
  }
}
