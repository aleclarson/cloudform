"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.TargetTrackingScalingPolicyConfiguration=exports.StepAdjustment=exports.MetricDimension=exports.CustomizedMetricSpecification=exports.PredefinedMetricSpecification=exports.StepScalingPolicyConfiguration=void 0;const resource_1=require("../resource");class StepScalingPolicyConfiguration{constructor(properties){Object.assign(this,properties)}}exports.StepScalingPolicyConfiguration=StepScalingPolicyConfiguration;class PredefinedMetricSpecification{constructor(properties){Object.assign(this,properties)}}exports.PredefinedMetricSpecification=PredefinedMetricSpecification;class CustomizedMetricSpecification{constructor(properties){Object.assign(this,properties)}}exports.CustomizedMetricSpecification=CustomizedMetricSpecification;class MetricDimension{constructor(properties){Object.assign(this,properties)}}exports.MetricDimension=MetricDimension;class StepAdjustment{constructor(properties){Object.assign(this,properties)}}exports.StepAdjustment=StepAdjustment;class TargetTrackingScalingPolicyConfiguration{constructor(properties){Object.assign(this,properties)}}exports.TargetTrackingScalingPolicyConfiguration=TargetTrackingScalingPolicyConfiguration;class ScalingPolicy extends resource_1.ResourceBase{constructor(properties){super("AWS::ApplicationAutoScaling::ScalingPolicy",properties)}}(exports.R=ScalingPolicy).StepScalingPolicyConfiguration=StepScalingPolicyConfiguration,ScalingPolicy.PredefinedMetricSpecification=PredefinedMetricSpecification,ScalingPolicy.CustomizedMetricSpecification=CustomizedMetricSpecification,ScalingPolicy.MetricDimension=MetricDimension,ScalingPolicy.StepAdjustment=StepAdjustment,ScalingPolicy.TargetTrackingScalingPolicyConfiguration=TargetTrackingScalingPolicyConfiguration;