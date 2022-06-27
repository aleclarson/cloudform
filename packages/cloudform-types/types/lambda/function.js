"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class VpcConfig{constructor(properties){Object.assign(this,properties)}}exports.VpcConfig=VpcConfig;class DeadLetterConfig{constructor(properties){Object.assign(this,properties)}}exports.DeadLetterConfig=DeadLetterConfig;class FileSystemConfig{constructor(properties){Object.assign(this,properties)}}exports.FileSystemConfig=FileSystemConfig;class Code{constructor(properties){Object.assign(this,properties)}}exports.Code=Code;class TracingConfig{constructor(properties){Object.assign(this,properties)}}exports.TracingConfig=TracingConfig;class Environment{constructor(properties){Object.assign(this,properties)}}exports.Environment=Environment;class ImageConfig{constructor(properties){Object.assign(this,properties)}}exports.ImageConfig=ImageConfig;class Function extends resource_1.ResourceBase{constructor(properties){super("AWS::Lambda::Function",properties)}}(exports.default=Function).VpcConfig=VpcConfig,Function.DeadLetterConfig=DeadLetterConfig,Function.FileSystemConfig=FileSystemConfig,Function.Code=Code,Function.TracingConfig=TracingConfig,Function.Environment=Environment,Function.ImageConfig=ImageConfig,Object.defineProperty(exports,"__esModule",{value:!0});const index_namespace_1=require("./index.namespace");exports.default=index_namespace_1.Lambda;