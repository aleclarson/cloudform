"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.MountOptions=exports.OnPremConfig=void 0;const resource_1=require("../resource");class OnPremConfig{constructor(properties){Object.assign(this,properties)}}exports.OnPremConfig=OnPremConfig;class MountOptions{constructor(properties){Object.assign(this,properties)}}exports.MountOptions=MountOptions;class LocationNFS extends resource_1.ResourceBase{constructor(properties){super("AWS::DataSync::LocationNFS",properties)}}(exports.R=LocationNFS).OnPremConfig=OnPremConfig,LocationNFS.MountOptions=MountOptions;