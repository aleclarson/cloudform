"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.Field=exports.FieldIdentifier=exports.DefaultFieldValue=void 0;const resource_1=require("../resource");class DefaultFieldValue{constructor(properties){Object.assign(this,properties)}}exports.DefaultFieldValue=DefaultFieldValue;class FieldIdentifier{constructor(properties){Object.assign(this,properties)}}exports.FieldIdentifier=FieldIdentifier;class Field{constructor(properties){Object.assign(this,properties)}}exports.Field=Field;class TaskTemplate extends resource_1.ResourceBase{constructor(properties){super("AWS::Connect::TaskTemplate",properties)}}(exports.R=TaskTemplate).DefaultFieldValue=DefaultFieldValue,TaskTemplate.FieldIdentifier=FieldIdentifier,TaskTemplate.Field=Field;