"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.DBClusterRole=void 0;const resource_1=require("../resource");class DBClusterRole{constructor(properties){Object.assign(this,properties)}}exports.DBClusterRole=DBClusterRole;class DBCluster extends resource_1.ResourceBase{constructor(properties){super("AWS::Neptune::DBCluster",properties||{})}}(exports.R=DBCluster).DBClusterRole=DBClusterRole;