"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class RegionalConfiguration{constructor(properties){Object.assign(this,properties)}}exports.RegionalConfiguration=RegionalConfiguration;class ReshardingConfiguration{constructor(properties){Object.assign(this,properties)}}exports.ReshardingConfiguration=ReshardingConfiguration;class GlobalReplicationGroupMember{constructor(properties){Object.assign(this,properties)}}exports.GlobalReplicationGroupMember=GlobalReplicationGroupMember;class GlobalReplicationGroup extends resource_1.ResourceBase{constructor(properties){super("AWS::ElastiCache::GlobalReplicationGroup",properties)}}(exports.default=GlobalReplicationGroup).RegionalConfiguration=RegionalConfiguration,GlobalReplicationGroup.ReshardingConfiguration=ReshardingConfiguration,GlobalReplicationGroup.GlobalReplicationGroupMember=GlobalReplicationGroupMember;