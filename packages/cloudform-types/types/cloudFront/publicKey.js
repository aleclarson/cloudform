"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.PublicKeyConfig=void 0;const resource_1=require("../resource");class PublicKeyConfig{constructor(properties){Object.assign(this,properties)}}exports.PublicKeyConfig=PublicKeyConfig;class PublicKey extends resource_1.ResourceBase{constructor(properties){super("AWS::CloudFront::PublicKey",properties)}}(exports.R=PublicKey).PublicKeyConfig=PublicKeyConfig;