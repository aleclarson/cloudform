"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.IEMap=exports.PolicyTag=void 0;const resource_1=require("../resource");class PolicyTag{constructor(properties){Object.assign(this,properties)}}exports.PolicyTag=PolicyTag;class IEMap{constructor(properties){Object.assign(this,properties)}}exports.IEMap=IEMap;class Policy extends resource_1.ResourceBase{constructor(properties){super("AWS::FMS::Policy",properties)}}(exports.R=Policy).PolicyTag=PolicyTag,Policy.ResourceTag=resource_1.ResourceTag,Policy.IEMap=IEMap;