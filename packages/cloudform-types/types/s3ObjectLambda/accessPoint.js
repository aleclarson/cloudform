"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ObjectLambdaConfiguration{constructor(properties){Object.assign(this,properties)}}exports.ObjectLambdaConfiguration=ObjectLambdaConfiguration;class TransformationConfiguration{constructor(properties){Object.assign(this,properties)}}exports.TransformationConfiguration=TransformationConfiguration;class AccessPoint extends resource_1.ResourceBase{constructor(properties){super("AWS::S3ObjectLambda::AccessPoint",properties)}}(exports.default=AccessPoint).ObjectLambdaConfiguration=ObjectLambdaConfiguration,AccessPoint.TransformationConfiguration=TransformationConfiguration;