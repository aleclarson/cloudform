"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.Filter=exports.ArchiveRule=void 0;const resource_1=require("../resource");class ArchiveRule{constructor(properties){Object.assign(this,properties)}}exports.ArchiveRule=ArchiveRule;class Filter{constructor(properties){Object.assign(this,properties)}}exports.Filter=Filter;class Analyzer extends resource_1.ResourceBase{constructor(properties){super("AWS::AccessAnalyzer::Analyzer",properties)}}(exports.R=Analyzer).ArchiveRule=ArchiveRule,Analyzer.Filter=Filter;