"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class RobotSoftwareSuite{constructor(properties){Object.assign(this,properties)}}exports.RobotSoftwareSuite=RobotSoftwareSuite;class SourceConfig{constructor(properties){Object.assign(this,properties)}}exports.SourceConfig=SourceConfig;class RobotApplication extends resource_1.ResourceBase{constructor(properties){super("AWS::RoboMaker::RobotApplication",properties)}}(exports.default=RobotApplication).RobotSoftwareSuite=RobotSoftwareSuite,RobotApplication.SourceConfig=SourceConfig,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class RobotApplicationVersion extends resource_1.ResourceBase{constructor(properties){super("AWS::RoboMaker::RobotApplicationVersion",properties)}}exports.default=RobotApplicationVersion;