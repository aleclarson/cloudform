"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ProvisioningArtifactProperties=void 0;const resource_1=require("../resource");class ProvisioningArtifactProperties{constructor(properties){Object.assign(this,properties)}}exports.ProvisioningArtifactProperties=ProvisioningArtifactProperties;class CloudFormationProduct extends resource_1.ResourceBase{constructor(properties){super("AWS::ServiceCatalog::CloudFormationProduct",properties)}}(exports.R=CloudFormationProduct).ProvisioningArtifactProperties=ProvisioningArtifactProperties;