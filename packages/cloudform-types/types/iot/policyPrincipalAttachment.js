"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class PolicyPrincipalAttachment extends resource_1.ResourceBase{constructor(properties){super("AWS::IoT::PolicyPrincipalAttachment",properties)}}exports.default=PolicyPrincipalAttachment,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ProvisioningHook{constructor(properties){Object.assign(this,properties)}}exports.ProvisioningHook=ProvisioningHook;class ProvisioningTemplate extends resource_1.ResourceBase{constructor(properties){super("AWS::IoT::ProvisioningTemplate",properties)}}(exports.default=ProvisioningTemplate).ProvisioningHook=ProvisioningHook;