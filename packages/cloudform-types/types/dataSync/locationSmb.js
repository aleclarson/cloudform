"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.MountOptions=void 0;const resource_1=require("../resource");class MountOptions{constructor(properties){Object.assign(this,properties)}}exports.MountOptions=MountOptions;class LocationSMB extends resource_1.ResourceBase{constructor(properties){super("AWS::DataSync::LocationSMB",properties)}}(exports.R=LocationSMB).MountOptions=MountOptions;