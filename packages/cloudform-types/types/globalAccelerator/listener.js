"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class PortRange{constructor(properties){Object.assign(this,properties)}}exports.PortRange=PortRange;class Listener extends resource_1.ResourceBase{constructor(properties){super("AWS::GlobalAccelerator::Listener",properties)}}(exports.default=Listener).PortRange=PortRange;