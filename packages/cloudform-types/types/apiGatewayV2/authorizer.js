"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class JWTConfiguration{constructor(properties){Object.assign(this,properties)}}exports.JWTConfiguration=JWTConfiguration;class Authorizer extends resource_1.ResourceBase{constructor(properties){super("AWS::ApiGatewayV2::Authorizer",properties)}}(exports.default=Authorizer).JWTConfiguration=JWTConfiguration,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class Deployment extends resource_1.ResourceBase{constructor(properties){super("AWS::ApiGatewayV2::Deployment",properties)}}exports.default=Deployment;