"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.EnvironmentVariable=exports.BasicAuthConfig=void 0;const resource_1=require("../resource");class BasicAuthConfig{constructor(properties){Object.assign(this,properties)}}exports.BasicAuthConfig=BasicAuthConfig;class EnvironmentVariable{constructor(properties){Object.assign(this,properties)}}exports.EnvironmentVariable=EnvironmentVariable;class Branch extends resource_1.ResourceBase{constructor(properties){super("AWS::Amplify::Branch",properties)}}(exports.R=Branch).BasicAuthConfig=BasicAuthConfig,Branch.EnvironmentVariable=EnvironmentVariable;