"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.SidewalkUpdateAccount=exports.SidewalkAccountInfo=void 0;const resource_1=require("../resource");class SidewalkAccountInfo{constructor(properties){Object.assign(this,properties)}}exports.SidewalkAccountInfo=SidewalkAccountInfo;class SidewalkUpdateAccount{constructor(properties){Object.assign(this,properties)}}exports.SidewalkUpdateAccount=SidewalkUpdateAccount;class PartnerAccount extends resource_1.ResourceBase{constructor(properties){super("AWS::IoTWireless::PartnerAccount",properties||{})}}(exports.R=PartnerAccount).SidewalkAccountInfo=SidewalkAccountInfo,PartnerAccount.SidewalkUpdateAccount=SidewalkUpdateAccount;