"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ConnectionPoolConfigurationInfoFormat=void 0;const resource_1=require("../resource");class ConnectionPoolConfigurationInfoFormat{constructor(properties){Object.assign(this,properties)}}exports.ConnectionPoolConfigurationInfoFormat=ConnectionPoolConfigurationInfoFormat;class DBProxyTargetGroup extends resource_1.ResourceBase{constructor(properties){super("AWS::RDS::DBProxyTargetGroup",properties)}}(exports.R=DBProxyTargetGroup).ConnectionPoolConfigurationInfoFormat=ConnectionPoolConfigurationInfoFormat;