"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class FunctionConfig{constructor(properties){Object.assign(this,properties)}}exports.FunctionConfig=FunctionConfig;class FunctionMetadata{constructor(properties){Object.assign(this,properties)}}exports.FunctionMetadata=FunctionMetadata;class Function extends resource_1.ResourceBase{constructor(properties){super("AWS::CloudFront::Function",properties)}}(exports.default=Function).FunctionConfig=FunctionConfig,Function.FunctionMetadata=FunctionMetadata,Object.defineProperty(exports,"__esModule",{value:!0});const index_namespace_1=require("./index.namespace");exports.default=index_namespace_1.CloudFront;