"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class TrafficMirrorPortRange{constructor(properties){Object.assign(this,properties)}}exports.TrafficMirrorPortRange=TrafficMirrorPortRange;class TrafficMirrorFilterRule extends resource_1.ResourceBase{constructor(properties){super("AWS::EC2::TrafficMirrorFilterRule",properties)}}(exports.default=TrafficMirrorFilterRule).TrafficMirrorPortRange=TrafficMirrorPortRange,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class TrafficMirrorSession extends resource_1.ResourceBase{constructor(properties){super("AWS::EC2::TrafficMirrorSession",properties)}}exports.default=TrafficMirrorSession;