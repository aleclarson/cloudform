"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class Policy{constructor(properties){Object.assign(this,properties)}}exports.Policy=Policy;class Role extends resource_1.ResourceBase{constructor(properties){super("AWS::IAM::Role",properties)}}(exports.default=Role).Policy=Policy;