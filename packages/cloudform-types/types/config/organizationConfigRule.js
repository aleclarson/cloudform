"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.OrganizationCustomRuleMetadata=exports.OrganizationCustomCodeRuleMetadata=exports.OrganizationManagedRuleMetadata=void 0;const resource_1=require("../resource");class OrganizationManagedRuleMetadata{constructor(properties){Object.assign(this,properties)}}exports.OrganizationManagedRuleMetadata=OrganizationManagedRuleMetadata;class OrganizationCustomCodeRuleMetadata{constructor(properties){Object.assign(this,properties)}}exports.OrganizationCustomCodeRuleMetadata=OrganizationCustomCodeRuleMetadata;class OrganizationCustomRuleMetadata{constructor(properties){Object.assign(this,properties)}}exports.OrganizationCustomRuleMetadata=OrganizationCustomRuleMetadata;class OrganizationConfigRule extends resource_1.ResourceBase{constructor(properties){super("AWS::Config::OrganizationConfigRule",properties)}}(exports.R=OrganizationConfigRule).OrganizationManagedRuleMetadata=OrganizationManagedRuleMetadata,OrganizationConfigRule.OrganizationCustomCodeRuleMetadata=OrganizationCustomCodeRuleMetadata,OrganizationConfigRule.OrganizationCustomRuleMetadata=OrganizationCustomRuleMetadata;