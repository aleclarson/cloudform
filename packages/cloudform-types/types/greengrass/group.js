"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.GroupVersion=void 0;const resource_1=require("../resource");class GroupVersion{constructor(properties){Object.assign(this,properties)}}exports.GroupVersion=GroupVersion;class Group extends resource_1.ResourceBase{constructor(properties){super("AWS::Greengrass::Group",properties)}}(exports.R=Group).GroupVersion=GroupVersion;