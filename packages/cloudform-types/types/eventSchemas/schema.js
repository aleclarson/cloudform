"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.TagsEntry=void 0;const resource_1=require("../resource");class TagsEntry{constructor(properties){Object.assign(this,properties)}}exports.TagsEntry=TagsEntry;class Schema extends resource_1.ResourceBase{constructor(properties){super("AWS::EventSchemas::Schema",properties)}}(exports.R=Schema).TagsEntry=TagsEntry;