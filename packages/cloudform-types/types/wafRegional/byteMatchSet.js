"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ByteMatchTuple{constructor(properties){Object.assign(this,properties)}}exports.ByteMatchTuple=ByteMatchTuple;class FieldToMatch{constructor(properties){Object.assign(this,properties)}}exports.FieldToMatch=FieldToMatch;class ByteMatchSet extends resource_1.ResourceBase{constructor(properties){super("AWS::WAFRegional::ByteMatchSet",properties)}}(exports.default=ByteMatchSet).ByteMatchTuple=ByteMatchTuple,ByteMatchSet.FieldToMatch=FieldToMatch,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class GeoMatchConstraint{constructor(properties){Object.assign(this,properties)}}exports.GeoMatchConstraint=GeoMatchConstraint;class GeoMatchSet extends resource_1.ResourceBase{constructor(properties){super("AWS::WAFRegional::GeoMatchSet",properties)}}(exports.default=GeoMatchSet).GeoMatchConstraint=GeoMatchConstraint;