"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.CachingConfig=exports.SyncConfig=exports.PipelineConfig=exports.LambdaConflictHandlerConfig=void 0;const resource_1=require("../resource");class LambdaConflictHandlerConfig{constructor(properties){Object.assign(this,properties)}}exports.LambdaConflictHandlerConfig=LambdaConflictHandlerConfig;class PipelineConfig{constructor(properties){Object.assign(this,properties)}}exports.PipelineConfig=PipelineConfig;class SyncConfig{constructor(properties){Object.assign(this,properties)}}exports.SyncConfig=SyncConfig;class CachingConfig{constructor(properties){Object.assign(this,properties)}}exports.CachingConfig=CachingConfig;class Resolver extends resource_1.ResourceBase{constructor(properties){super("AWS::AppSync::Resolver",properties)}}(exports.R=Resolver).LambdaConflictHandlerConfig=LambdaConflictHandlerConfig,Resolver.PipelineConfig=PipelineConfig,Resolver.SyncConfig=SyncConfig,Resolver.CachingConfig=CachingConfig;