"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ProvisionedConcurrencyConfiguration=void 0;const resource_1=require("../resource");class ProvisionedConcurrencyConfiguration{constructor(properties){Object.assign(this,properties)}}exports.ProvisionedConcurrencyConfiguration=ProvisionedConcurrencyConfiguration;class Version extends resource_1.ResourceBase{constructor(properties){super("AWS::Lambda::Version",properties)}}(exports.R=Version).ProvisionedConcurrencyConfiguration=ProvisionedConcurrencyConfiguration;