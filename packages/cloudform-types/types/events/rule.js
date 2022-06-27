"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.AwsVpcConfiguration=exports.EcsParameters=exports.RedshiftDataParameters=exports.Tag=exports.SageMakerPipelineParameters=exports.KinesisParameters=exports.Target=exports.PlacementStrategy=exports.RetryPolicy=exports.SqsParameters=exports.InputTransformer=exports.CapacityProviderStrategyItem=exports.RunCommandTarget=exports.NetworkConfiguration=exports.DeadLetterConfig=exports.RunCommandParameters=exports.BatchParameters=exports.BatchArrayProperties=exports.HttpParameters=exports.PlacementConstraint=exports.BatchRetryStrategy=exports.SageMakerPipelineParameter=void 0;const resource_1=require("../resource");class SageMakerPipelineParameter{constructor(properties){Object.assign(this,properties)}}exports.SageMakerPipelineParameter=SageMakerPipelineParameter;class BatchRetryStrategy{constructor(properties){Object.assign(this,properties)}}exports.BatchRetryStrategy=BatchRetryStrategy;class PlacementConstraint{constructor(properties){Object.assign(this,properties)}}exports.PlacementConstraint=PlacementConstraint;class HttpParameters{constructor(properties){Object.assign(this,properties)}}exports.HttpParameters=HttpParameters;class BatchArrayProperties{constructor(properties){Object.assign(this,properties)}}exports.BatchArrayProperties=BatchArrayProperties;class BatchParameters{constructor(properties){Object.assign(this,properties)}}exports.BatchParameters=BatchParameters;class RunCommandParameters{constructor(properties){Object.assign(this,properties)}}exports.RunCommandParameters=RunCommandParameters;class DeadLetterConfig{constructor(properties){Object.assign(this,properties)}}exports.DeadLetterConfig=DeadLetterConfig;class NetworkConfiguration{constructor(properties){Object.assign(this,properties)}}exports.NetworkConfiguration=NetworkConfiguration;class RunCommandTarget{constructor(properties){Object.assign(this,properties)}}exports.RunCommandTarget=RunCommandTarget;class CapacityProviderStrategyItem{constructor(properties){Object.assign(this,properties)}}exports.CapacityProviderStrategyItem=CapacityProviderStrategyItem;class InputTransformer{constructor(properties){Object.assign(this,properties)}}exports.InputTransformer=InputTransformer;class SqsParameters{constructor(properties){Object.assign(this,properties)}}exports.SqsParameters=SqsParameters;class RetryPolicy{constructor(properties){Object.assign(this,properties)}}exports.RetryPolicy=RetryPolicy;class PlacementStrategy{constructor(properties){Object.assign(this,properties)}}exports.PlacementStrategy=PlacementStrategy;class Target{constructor(properties){Object.assign(this,properties)}}exports.Target=Target;class KinesisParameters{constructor(properties){Object.assign(this,properties)}}exports.KinesisParameters=KinesisParameters;class SageMakerPipelineParameters{constructor(properties){Object.assign(this,properties)}}exports.SageMakerPipelineParameters=SageMakerPipelineParameters;class Tag{constructor(properties){Object.assign(this,properties)}}exports.Tag=Tag;class RedshiftDataParameters{constructor(properties){Object.assign(this,properties)}}exports.RedshiftDataParameters=RedshiftDataParameters;class EcsParameters{constructor(properties){Object.assign(this,properties)}}exports.EcsParameters=EcsParameters;class AwsVpcConfiguration{constructor(properties){Object.assign(this,properties)}}exports.AwsVpcConfiguration=AwsVpcConfiguration;class Rule extends resource_1.ResourceBase{constructor(properties){super("AWS::Events::Rule",properties||{})}}(exports.R=Rule).SageMakerPipelineParameter=SageMakerPipelineParameter,Rule.BatchRetryStrategy=BatchRetryStrategy,Rule.PlacementConstraint=PlacementConstraint,Rule.HttpParameters=HttpParameters,Rule.BatchArrayProperties=BatchArrayProperties,Rule.BatchParameters=BatchParameters,Rule.RunCommandParameters=RunCommandParameters,Rule.DeadLetterConfig=DeadLetterConfig,Rule.NetworkConfiguration=NetworkConfiguration,Rule.RunCommandTarget=RunCommandTarget,Rule.CapacityProviderStrategyItem=CapacityProviderStrategyItem,Rule.InputTransformer=InputTransformer,Rule.SqsParameters=SqsParameters,Rule.RetryPolicy=RetryPolicy,Rule.PlacementStrategy=PlacementStrategy,Rule.Target=Target,Rule.KinesisParameters=KinesisParameters,Rule.SageMakerPipelineParameters=SageMakerPipelineParameters,Rule.Tag=Tag,Rule.RedshiftDataParameters=RedshiftDataParameters,Rule.EcsParameters=EcsParameters,Rule.AwsVpcConfiguration=AwsVpcConfiguration;