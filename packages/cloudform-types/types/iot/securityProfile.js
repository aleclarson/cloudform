"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.StatisticalThreshold=exports.BehaviorCriteria=exports.Behavior=exports.AlertTarget=exports.MetricValue=exports.MetricDimension=exports.MachineLearningDetectionConfig=exports.MetricToRetain=void 0;const resource_1=require("../resource");class MetricToRetain{constructor(properties){Object.assign(this,properties)}}exports.MetricToRetain=MetricToRetain;class MachineLearningDetectionConfig{constructor(properties){Object.assign(this,properties)}}exports.MachineLearningDetectionConfig=MachineLearningDetectionConfig;class MetricDimension{constructor(properties){Object.assign(this,properties)}}exports.MetricDimension=MetricDimension;class MetricValue{constructor(properties){Object.assign(this,properties)}}exports.MetricValue=MetricValue;class AlertTarget{constructor(properties){Object.assign(this,properties)}}exports.AlertTarget=AlertTarget;class Behavior{constructor(properties){Object.assign(this,properties)}}exports.Behavior=Behavior;class BehaviorCriteria{constructor(properties){Object.assign(this,properties)}}exports.BehaviorCriteria=BehaviorCriteria;class StatisticalThreshold{constructor(properties){Object.assign(this,properties)}}exports.StatisticalThreshold=StatisticalThreshold;class SecurityProfile extends resource_1.ResourceBase{constructor(properties){super("AWS::IoT::SecurityProfile",properties||{})}}(exports.R=SecurityProfile).MetricToRetain=MetricToRetain,SecurityProfile.MachineLearningDetectionConfig=MachineLearningDetectionConfig,SecurityProfile.MetricDimension=MetricDimension,SecurityProfile.MetricValue=MetricValue,SecurityProfile.AlertTarget=AlertTarget,SecurityProfile.Behavior=Behavior,SecurityProfile.BehaviorCriteria=BehaviorCriteria,SecurityProfile.StatisticalThreshold=StatisticalThreshold;