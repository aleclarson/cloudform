"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class MetricStreamFilter{constructor(properties){Object.assign(this,properties)}}exports.MetricStreamFilter=MetricStreamFilter;class MetricStream extends resource_1.ResourceBase{constructor(properties){super("AWS::CloudWatch::MetricStream",properties)}}(exports.default=MetricStream).MetricStreamFilter=MetricStreamFilter,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class Domain extends resource_1.ResourceBase{constructor(properties){super("AWS::CodeArtifact::Domain",properties)}}exports.default=Domain;