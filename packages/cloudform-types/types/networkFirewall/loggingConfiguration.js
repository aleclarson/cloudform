"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class LogDestinationConfig{constructor(properties){Object.assign(this,properties)}}exports.LogDestinationConfig=LogDestinationConfig;class LoggingConfigurationInner{constructor(properties){Object.assign(this,properties)}}exports.LoggingConfigurationInner=LoggingConfigurationInner;class LoggingConfiguration extends resource_1.ResourceBase{constructor(properties){super("AWS::NetworkFirewall::LoggingConfiguration",properties)}}(exports.default=LoggingConfiguration).LogDestinationConfig=LogDestinationConfig,LoggingConfiguration.LoggingConfiguration=LoggingConfigurationInner;