"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.TagSpecification=void 0;const resource_1=require("../resource");class TagSpecification{constructor(properties){Object.assign(this,properties)}}exports.TagSpecification=TagSpecification;class CapacityReservation extends resource_1.ResourceBase{constructor(properties){super("AWS::EC2::CapacityReservation",properties)}}(exports.R=CapacityReservation).TagSpecification=TagSpecification;