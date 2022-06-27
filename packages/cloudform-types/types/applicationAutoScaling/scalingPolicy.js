"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class StepScalingPolicyConfiguration{constructor(properties){Object.assign(this,properties)}}exports.StepScalingPolicyConfiguration=StepScalingPolicyConfiguration;class PredefinedMetricSpecification{constructor(properties){Object.assign(this,properties)}}exports.PredefinedMetricSpecification=PredefinedMetricSpecification;class CustomizedMetricSpecification{constructor(properties){Object.assign(this,properties)}}exports.CustomizedMetricSpecification=CustomizedMetricSpecification;class MetricDimension{constructor(properties){Object.assign(this,properties)}}exports.MetricDimension=MetricDimension;class StepAdjustment{constructor(properties){Object.assign(this,properties)}}exports.StepAdjustment=StepAdjustment;class TargetTrackingScalingPolicyConfiguration{constructor(properties){Object.assign(this,properties)}}exports.TargetTrackingScalingPolicyConfiguration=TargetTrackingScalingPolicyConfiguration;class ScalingPolicy extends resource_1.ResourceBase{constructor(properties){super("AWS::ApplicationAutoScaling::ScalingPolicy",properties)}}(exports.default=ScalingPolicy).StepScalingPolicyConfiguration=StepScalingPolicyConfiguration,ScalingPolicy.PredefinedMetricSpecification=PredefinedMetricSpecification,ScalingPolicy.CustomizedMetricSpecification=CustomizedMetricSpecification,ScalingPolicy.MetricDimension=MetricDimension,ScalingPolicy.StepAdjustment=StepAdjustment,ScalingPolicy.TargetTrackingScalingPolicyConfiguration=TargetTrackingScalingPolicyConfiguration,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class SubComponentConfigurationDetails{constructor(properties){Object.assign(this,properties)}}exports.SubComponentConfigurationDetails=SubComponentConfigurationDetails;class ComponentMonitoringSetting{constructor(properties){Object.assign(this,properties)}}exports.ComponentMonitoringSetting=ComponentMonitoringSetting;class LogPattern{constructor(properties){Object.assign(this,properties)}}exports.LogPattern=LogPattern;class LogPatternSet{constructor(properties){Object.assign(this,properties)}}exports.LogPatternSet=LogPatternSet;class Alarm{constructor(properties){Object.assign(this,properties)}}exports.Alarm=Alarm;class WindowsEvent{constructor(properties){Object.assign(this,properties)}}exports.WindowsEvent=WindowsEvent;class ComponentConfiguration{constructor(properties){Object.assign(this,properties)}}exports.ComponentConfiguration=ComponentConfiguration;class CustomComponent{constructor(properties){Object.assign(this,properties)}}exports.CustomComponent=CustomComponent;class JMXPrometheusExporter{constructor(properties){Object.assign(this,properties)}}exports.JMXPrometheusExporter=JMXPrometheusExporter;class AlarmMetric{constructor(properties){Object.assign(this,properties)}}exports.AlarmMetric=AlarmMetric;class ConfigurationDetails{constructor(properties){Object.assign(this,properties)}}exports.ConfigurationDetails=ConfigurationDetails;class Log{constructor(properties){Object.assign(this,properties)}}exports.Log=Log;class SubComponentTypeConfiguration{constructor(properties){Object.assign(this,properties)}}exports.SubComponentTypeConfiguration=SubComponentTypeConfiguration;class Application extends resource_1.ResourceBase{constructor(properties){super("AWS::ApplicationInsights::Application",properties)}}(exports.default=Application).SubComponentConfigurationDetails=SubComponentConfigurationDetails,Application.ComponentMonitoringSetting=ComponentMonitoringSetting,Application.LogPattern=LogPattern,Application.LogPatternSet=LogPatternSet,Application.Alarm=Alarm,Application.WindowsEvent=WindowsEvent,Application.ComponentConfiguration=ComponentConfiguration,Application.CustomComponent=CustomComponent,Application.JMXPrometheusExporter=JMXPrometheusExporter,Application.AlarmMetric=AlarmMetric,Application.ConfigurationDetails=ConfigurationDetails,Application.Log=Log,Application.SubComponentTypeConfiguration=SubComponentTypeConfiguration;