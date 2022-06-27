"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.Configuration=exports.MetricStat=exports.Metric=exports.MetricMathAnomalyDetector=exports.Dimension=exports.Range=exports.SingleMetricAnomalyDetector=exports.MetricDataQuery=void 0;const resource_1=require("../resource");class MetricDataQuery{constructor(properties){Object.assign(this,properties)}}exports.MetricDataQuery=MetricDataQuery;class SingleMetricAnomalyDetector{constructor(properties){Object.assign(this,properties)}}exports.SingleMetricAnomalyDetector=SingleMetricAnomalyDetector;class Range{constructor(properties){Object.assign(this,properties)}}exports.Range=Range;class Dimension{constructor(properties){Object.assign(this,properties)}}exports.Dimension=Dimension;class MetricMathAnomalyDetector{constructor(properties){Object.assign(this,properties)}}exports.MetricMathAnomalyDetector=MetricMathAnomalyDetector;class Metric{constructor(properties){Object.assign(this,properties)}}exports.Metric=Metric;class MetricStat{constructor(properties){Object.assign(this,properties)}}exports.MetricStat=MetricStat;class Configuration{constructor(properties){Object.assign(this,properties)}}exports.Configuration=Configuration;class AnomalyDetector extends resource_1.ResourceBase{constructor(properties){super("AWS::CloudWatch::AnomalyDetector",properties||{})}}(exports.R=AnomalyDetector).MetricDataQuery=MetricDataQuery,AnomalyDetector.SingleMetricAnomalyDetector=SingleMetricAnomalyDetector,AnomalyDetector.Range=Range,AnomalyDetector.Dimension=Dimension,AnomalyDetector.MetricMathAnomalyDetector=MetricMathAnomalyDetector,AnomalyDetector.Metric=Metric,AnomalyDetector.MetricStat=MetricStat,AnomalyDetector.Configuration=Configuration;