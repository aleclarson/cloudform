"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class PublicAccessBlockConfiguration{constructor(properties){Object.assign(this,properties)}}exports.PublicAccessBlockConfiguration=PublicAccessBlockConfiguration;class VpcConfiguration{constructor(properties){Object.assign(this,properties)}}exports.VpcConfiguration=VpcConfiguration;class AccessPoint extends resource_1.ResourceBase{constructor(properties){super("AWS::S3::AccessPoint",properties)}}(exports.default=AccessPoint).PublicAccessBlockConfiguration=PublicAccessBlockConfiguration,AccessPoint.VpcConfiguration=VpcConfiguration;