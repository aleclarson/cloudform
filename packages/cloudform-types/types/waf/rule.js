"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.Predicate=void 0;const resource_1=require("../resource");class Predicate{constructor(properties){Object.assign(this,properties)}}exports.Predicate=Predicate;class Rule extends resource_1.ResourceBase{constructor(properties){super("AWS::WAF::Rule",properties)}}(exports.R=Rule).Predicate=Predicate;