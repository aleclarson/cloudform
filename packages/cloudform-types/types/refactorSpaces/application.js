"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ApiGatewayProxyInput=void 0;const resource_1=require("../resource");class ApiGatewayProxyInput{constructor(properties){Object.assign(this,properties)}}exports.ApiGatewayProxyInput=ApiGatewayProxyInput;class Application extends resource_1.ResourceBase{constructor(properties){super("AWS::RefactorSpaces::Application",properties||{})}}(exports.R=Application).ApiGatewayProxyInput=ApiGatewayProxyInput;