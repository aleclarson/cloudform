"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.SOA=exports.PublicDnsPropertiesMutable=exports.Properties=void 0;const resource_1=require("../resource");class Properties{constructor(properties){Object.assign(this,properties)}}exports.Properties=Properties;class PublicDnsPropertiesMutable{constructor(properties){Object.assign(this,properties)}}exports.PublicDnsPropertiesMutable=PublicDnsPropertiesMutable;class SOA{constructor(properties){Object.assign(this,properties)}}exports.SOA=SOA;class PublicDnsNamespace extends resource_1.ResourceBase{constructor(properties){super("AWS::ServiceDiscovery::PublicDnsNamespace",properties)}}(exports.R=PublicDnsNamespace).Properties=Properties,PublicDnsNamespace.PublicDnsPropertiesMutable=PublicDnsPropertiesMutable,PublicDnsNamespace.SOA=SOA;