"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.BackupSelectionResourceType=exports.ConditionResourceType=void 0;const resource_1=require("../resource");class ConditionResourceType{constructor(properties){Object.assign(this,properties)}}exports.ConditionResourceType=ConditionResourceType;class BackupSelectionResourceType{constructor(properties){Object.assign(this,properties)}}exports.BackupSelectionResourceType=BackupSelectionResourceType;class BackupSelection extends resource_1.ResourceBase{constructor(properties){super("AWS::Backup::BackupSelection",properties)}}(exports.R=BackupSelection).ConditionResourceType=ConditionResourceType,BackupSelection.BackupSelectionResourceType=BackupSelectionResourceType;