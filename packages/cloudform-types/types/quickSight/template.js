"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.TemplateSourceAnalysis=exports.TemplateSourceEntity=exports.DataSetReference=exports.TemplateSourceTemplate=exports.ResourcePermission=void 0;const resource_1=require("../resource");class ResourcePermission{constructor(properties){Object.assign(this,properties)}}exports.ResourcePermission=ResourcePermission;class TemplateSourceTemplate{constructor(properties){Object.assign(this,properties)}}exports.TemplateSourceTemplate=TemplateSourceTemplate;class DataSetReference{constructor(properties){Object.assign(this,properties)}}exports.DataSetReference=DataSetReference;class TemplateSourceEntity{constructor(properties){Object.assign(this,properties)}}exports.TemplateSourceEntity=TemplateSourceEntity;class TemplateSourceAnalysis{constructor(properties){Object.assign(this,properties)}}exports.TemplateSourceAnalysis=TemplateSourceAnalysis;class Template extends resource_1.ResourceBase{constructor(properties){super("AWS::QuickSight::Template",properties)}}(exports.R=Template).ResourcePermission=ResourcePermission,Template.TemplateSourceTemplate=TemplateSourceTemplate,Template.DataSetReference=DataSetReference,Template.TemplateSourceEntity=TemplateSourceEntity,Template.TemplateSourceAnalysis=TemplateSourceAnalysis;