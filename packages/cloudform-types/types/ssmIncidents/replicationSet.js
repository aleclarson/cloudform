"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ReplicationRegion=exports.RegionConfiguration=void 0;const resource_1=require("../resource");class RegionConfiguration{constructor(properties){Object.assign(this,properties)}}exports.RegionConfiguration=RegionConfiguration;class ReplicationRegion{constructor(properties){Object.assign(this,properties)}}exports.ReplicationRegion=ReplicationRegion;class ReplicationSet extends resource_1.ResourceBase{constructor(properties){super("AWS::SSMIncidents::ReplicationSet",properties)}}(exports.R=ReplicationSet).RegionConfiguration=RegionConfiguration,ReplicationSet.ReplicationRegion=ReplicationRegion;