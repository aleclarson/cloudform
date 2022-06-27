"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class OrganizationAggregationSource{constructor(properties){Object.assign(this,properties)}}exports.OrganizationAggregationSource=OrganizationAggregationSource;class AccountAggregationSource{constructor(properties){Object.assign(this,properties)}}exports.AccountAggregationSource=AccountAggregationSource;class ConfigurationAggregator extends resource_1.ResourceBase{constructor(properties){super("AWS::Config::ConfigurationAggregator",properties||{})}}(exports.default=ConfigurationAggregator).OrganizationAggregationSource=OrganizationAggregationSource,ConfigurationAggregator.AccountAggregationSource=AccountAggregationSource,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class RecordingGroup{constructor(properties){Object.assign(this,properties)}}exports.RecordingGroup=RecordingGroup;class ConfigurationRecorder extends resource_1.ResourceBase{constructor(properties){super("AWS::Config::ConfigurationRecorder",properties)}}(exports.default=ConfigurationRecorder).RecordingGroup=RecordingGroup;