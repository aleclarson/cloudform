"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.FeatureDefinition=void 0;const resource_1=require("../resource");class FeatureDefinition{constructor(properties){Object.assign(this,properties)}}exports.FeatureDefinition=FeatureDefinition;class FeatureGroup extends resource_1.ResourceBase{constructor(properties){super("AWS::SageMaker::FeatureGroup",properties)}}(exports.R=FeatureGroup).FeatureDefinition=FeatureDefinition;