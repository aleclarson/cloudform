"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.TemplateInner=void 0;const resource_1=require("../resource");class TemplateInner{constructor(properties){Object.assign(this,properties)}}exports.TemplateInner=TemplateInner;class Template extends resource_1.ResourceBase{constructor(properties){super("AWS::SES::Template",properties||{})}}(exports.R=Template).Template=TemplateInner;