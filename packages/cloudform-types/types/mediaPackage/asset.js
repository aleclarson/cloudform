"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.EgressEndpoint=void 0;const resource_1=require("../resource");class EgressEndpoint{constructor(properties){Object.assign(this,properties)}}exports.EgressEndpoint=EgressEndpoint;class Asset extends resource_1.ResourceBase{constructor(properties){super("AWS::MediaPackage::Asset",properties)}}(exports.R=Asset).EgressEndpoint=EgressEndpoint;