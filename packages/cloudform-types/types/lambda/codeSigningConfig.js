"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class CodeSigningPolicies{constructor(properties){Object.assign(this,properties)}}exports.CodeSigningPolicies=CodeSigningPolicies;class AllowedPublishers{constructor(properties){Object.assign(this,properties)}}exports.AllowedPublishers=AllowedPublishers;class CodeSigningConfig extends resource_1.ResourceBase{constructor(properties){super("AWS::Lambda::CodeSigningConfig",properties)}}(exports.default=CodeSigningConfig).CodeSigningPolicies=CodeSigningPolicies,CodeSigningConfig.AllowedPublishers=AllowedPublishers;