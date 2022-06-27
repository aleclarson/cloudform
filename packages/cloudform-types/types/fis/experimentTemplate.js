"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ExperimentTemplateStopCondition{constructor(properties){Object.assign(this,properties)}}exports.ExperimentTemplateStopCondition=ExperimentTemplateStopCondition;class ExperimentTemplateTarget{constructor(properties){Object.assign(this,properties)}}exports.ExperimentTemplateTarget=ExperimentTemplateTarget;class ExperimentTemplateAction{constructor(properties){Object.assign(this,properties)}}exports.ExperimentTemplateAction=ExperimentTemplateAction;class ExperimentTemplateTargetFilter{constructor(properties){Object.assign(this,properties)}}exports.ExperimentTemplateTargetFilter=ExperimentTemplateTargetFilter;class ExperimentTemplate extends resource_1.ResourceBase{constructor(properties){super("AWS::FIS::ExperimentTemplate",properties)}}(exports.default=ExperimentTemplate).ExperimentTemplateStopCondition=ExperimentTemplateStopCondition,ExperimentTemplate.ExperimentTemplateTarget=ExperimentTemplateTarget,ExperimentTemplate.ExperimentTemplateAction=ExperimentTemplateAction,ExperimentTemplate.ExperimentTemplateTargetFilter=ExperimentTemplateTargetFilter,Object.defineProperty(exports,"__esModule",{value:!0});const index_namespace_1=require("./index.namespace");exports.default=index_namespace_1.FIS;