"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.GitConfig=void 0;const resource_1=require("../resource");class GitConfig{constructor(properties){Object.assign(this,properties)}}exports.GitConfig=GitConfig;class CodeRepository extends resource_1.ResourceBase{constructor(properties){super("AWS::SageMaker::CodeRepository",properties)}}(exports.R=CodeRepository).GitConfig=GitConfig;