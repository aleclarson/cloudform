"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class HadoopJarStepConfig{constructor(properties){Object.assign(this,properties)}}exports.HadoopJarStepConfig=HadoopJarStepConfig;class KeyValue{constructor(properties){Object.assign(this,properties)}}exports.KeyValue=KeyValue;class Step extends resource_1.ResourceBase{constructor(properties){super("AWS::EMR::Step",properties)}}(exports.default=Step).HadoopJarStepConfig=HadoopJarStepConfig,Step.KeyValue=KeyValue,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class Studio extends resource_1.ResourceBase{constructor(properties){super("AWS::EMR::Studio",properties)}}exports.default=Studio;