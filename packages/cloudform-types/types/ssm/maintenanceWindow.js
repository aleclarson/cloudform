"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class MaintenanceWindow extends resource_1.ResourceBase{constructor(properties){super("AWS::SSM::MaintenanceWindow",properties)}}exports.default=MaintenanceWindow,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class Targets{constructor(properties){Object.assign(this,properties)}}exports.Targets=Targets;class MaintenanceWindowTarget extends resource_1.ResourceBase{constructor(properties){super("AWS::SSM::MaintenanceWindowTarget",properties)}}(exports.default=MaintenanceWindowTarget).Targets=Targets;