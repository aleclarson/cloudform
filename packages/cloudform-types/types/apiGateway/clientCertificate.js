"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ClientCertificate extends resource_1.ResourceBase{constructor(properties){super("AWS::ApiGateway::ClientCertificate",properties||{})}}exports.default=ClientCertificate,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class MethodSetting{constructor(properties){Object.assign(this,properties)}}exports.MethodSetting=MethodSetting;class AccessLogSetting{constructor(properties){Object.assign(this,properties)}}exports.AccessLogSetting=AccessLogSetting;class DeploymentCanarySettings{constructor(properties){Object.assign(this,properties)}}exports.DeploymentCanarySettings=DeploymentCanarySettings;class StageDescription{constructor(properties){Object.assign(this,properties)}}exports.StageDescription=StageDescription;class CanarySetting{constructor(properties){Object.assign(this,properties)}}exports.CanarySetting=CanarySetting;class Deployment extends resource_1.ResourceBase{constructor(properties){super("AWS::ApiGateway::Deployment",properties)}}(exports.default=Deployment).MethodSetting=MethodSetting,Deployment.AccessLogSetting=AccessLogSetting,Deployment.DeploymentCanarySettings=DeploymentCanarySettings,Deployment.StageDescription=StageDescription,Deployment.CanarySetting=CanarySetting;