"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.Policy=exports.LoginProfile=void 0;const resource_1=require("../resource");class LoginProfile{constructor(properties){Object.assign(this,properties)}}exports.LoginProfile=LoginProfile;class Policy{constructor(properties){Object.assign(this,properties)}}exports.Policy=Policy;class User extends resource_1.ResourceBase{constructor(properties){super("AWS::IAM::User",properties||{})}}(exports.R=User).LoginProfile=LoginProfile,User.Policy=Policy;