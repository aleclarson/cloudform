"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.Metric=exports.Dimension=exports.MetricDataQuery=exports.MetricStat=void 0;const resource_1=require("../resource");class MetricStat{constructor(properties){Object.assign(this,properties)}}exports.MetricStat=MetricStat;class MetricDataQuery{constructor(properties){Object.assign(this,properties)}}exports.MetricDataQuery=MetricDataQuery;class Dimension{constructor(properties){Object.assign(this,properties)}}exports.Dimension=Dimension;class Metric{constructor(properties){Object.assign(this,properties)}}exports.Metric=Metric;class Alarm extends resource_1.ResourceBase{constructor(properties){super("AWS::CloudWatch::Alarm",properties)}}(exports.R=Alarm).MetricStat=MetricStat,Alarm.MetricDataQuery=MetricDataQuery,Alarm.Dimension=Dimension,Alarm.Metric=Metric;