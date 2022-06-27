"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ValidityDateFormat=exports.Entitlement=exports.Metadata=exports.BorrowConfiguration=exports.IssuerData=exports.ConsumptionConfiguration=exports.ProvisionalConfiguration=void 0;const resource_1=require("../resource");class ProvisionalConfiguration{constructor(properties){Object.assign(this,properties)}}exports.ProvisionalConfiguration=ProvisionalConfiguration;class ConsumptionConfiguration{constructor(properties){Object.assign(this,properties)}}exports.ConsumptionConfiguration=ConsumptionConfiguration;class IssuerData{constructor(properties){Object.assign(this,properties)}}exports.IssuerData=IssuerData;class BorrowConfiguration{constructor(properties){Object.assign(this,properties)}}exports.BorrowConfiguration=BorrowConfiguration;class Metadata{constructor(properties){Object.assign(this,properties)}}exports.Metadata=Metadata;class Entitlement{constructor(properties){Object.assign(this,properties)}}exports.Entitlement=Entitlement;class ValidityDateFormat{constructor(properties){Object.assign(this,properties)}}exports.ValidityDateFormat=ValidityDateFormat;class License extends resource_1.ResourceBase{constructor(properties){super("AWS::LicenseManager::License",properties)}}(exports.R=License).ProvisionalConfiguration=ProvisionalConfiguration,License.ConsumptionConfiguration=ConsumptionConfiguration,License.IssuerData=IssuerData,License.BorrowConfiguration=BorrowConfiguration,License.Metadata=Metadata,License.Entitlement=Entitlement,License.ValidityDateFormat=ValidityDateFormat;