"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class Workflow extends resource_1.ResourceBase{constructor(properties){super("AWS::Glue::Workflow",properties||{})}}exports.default=Workflow,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ConnectorDefinitionVersion{constructor(properties){Object.assign(this,properties)}}exports.ConnectorDefinitionVersion=ConnectorDefinitionVersion;class Connector{constructor(properties){Object.assign(this,properties)}}exports.Connector=Connector;class ConnectorDefinition extends resource_1.ResourceBase{constructor(properties){super("AWS::Greengrass::ConnectorDefinition",properties)}}(exports.default=ConnectorDefinition).ConnectorDefinitionVersion=ConnectorDefinitionVersion,ConnectorDefinition.Connector=Connector;