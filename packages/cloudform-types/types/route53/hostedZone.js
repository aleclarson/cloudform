"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.VPC=exports.QueryLoggingConfig=exports.HostedZoneConfig=exports.HostedZoneTag=void 0;const resource_1=require("../resource");class HostedZoneTag{constructor(properties){Object.assign(this,properties)}}exports.HostedZoneTag=HostedZoneTag;class HostedZoneConfig{constructor(properties){Object.assign(this,properties)}}exports.HostedZoneConfig=HostedZoneConfig;class QueryLoggingConfig{constructor(properties){Object.assign(this,properties)}}exports.QueryLoggingConfig=QueryLoggingConfig;class VPC{constructor(properties){Object.assign(this,properties)}}exports.VPC=VPC;class HostedZone extends resource_1.ResourceBase{constructor(properties){super("AWS::Route53::HostedZone",properties||{})}}(exports.R=HostedZone).HostedZoneTag=HostedZoneTag,HostedZone.HostedZoneConfig=HostedZoneConfig,HostedZone.QueryLoggingConfig=QueryLoggingConfig,HostedZone.VPC=VPC;