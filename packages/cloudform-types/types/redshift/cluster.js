"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.LoggingProperties=exports.Endpoint=void 0;const resource_1=require("../resource");class Endpoint{constructor(properties){Object.assign(this,properties)}}exports.Endpoint=Endpoint;class LoggingProperties{constructor(properties){Object.assign(this,properties)}}exports.LoggingProperties=LoggingProperties;class Cluster extends resource_1.ResourceBase{constructor(properties){super("AWS::Redshift::Cluster",properties)}}(exports.R=Cluster).Endpoint=Endpoint,Cluster.LoggingProperties=LoggingProperties;