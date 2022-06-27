"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class LocationCapacity{constructor(properties){Object.assign(this,properties)}}exports.LocationCapacity=LocationCapacity;class CertificateConfiguration{constructor(properties){Object.assign(this,properties)}}exports.CertificateConfiguration=CertificateConfiguration;class LocationConfiguration{constructor(properties){Object.assign(this,properties)}}exports.LocationConfiguration=LocationConfiguration;class IpPermission{constructor(properties){Object.assign(this,properties)}}exports.IpPermission=IpPermission;class ServerProcess{constructor(properties){Object.assign(this,properties)}}exports.ServerProcess=ServerProcess;class ResourceCreationLimitPolicy{constructor(properties){Object.assign(this,properties)}}exports.ResourceCreationLimitPolicy=ResourceCreationLimitPolicy;class RuntimeConfiguration{constructor(properties){Object.assign(this,properties)}}exports.RuntimeConfiguration=RuntimeConfiguration;class Fleet extends resource_1.ResourceBase{constructor(properties){super("AWS::GameLift::Fleet",properties||{})}}(exports.default=Fleet).LocationCapacity=LocationCapacity,Fleet.CertificateConfiguration=CertificateConfiguration,Fleet.LocationConfiguration=LocationConfiguration,Fleet.IpPermission=IpPermission,Fleet.ServerProcess=ServerProcess,Fleet.ResourceCreationLimitPolicy=ResourceCreationLimitPolicy,Fleet.RuntimeConfiguration=RuntimeConfiguration;