"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class VPCConfig{constructor(properties){Object.assign(this,properties)}}exports.VPCConfig=VPCConfig;class Schedule{constructor(properties){Object.assign(this,properties)}}exports.Schedule=Schedule;class Code{constructor(properties){Object.assign(this,properties)}}exports.Code=Code;class RunConfig{constructor(properties){Object.assign(this,properties)}}exports.RunConfig=RunConfig;class Canary extends resource_1.ResourceBase{constructor(properties){super("AWS::Synthetics::Canary",properties)}}(exports.default=Canary).VPCConfig=VPCConfig,Canary.Schedule=Schedule,Canary.Code=Code,Canary.RunConfig=RunConfig;