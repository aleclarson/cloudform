"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.Targets=void 0;const resource_1=require("../resource");class Targets{constructor(properties){Object.assign(this,properties)}}exports.Targets=Targets;class MaintenanceWindowTarget extends resource_1.ResourceBase{constructor(properties){super("AWS::SSM::MaintenanceWindowTarget",properties)}}(exports.R=MaintenanceWindowTarget).Targets=Targets;