"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class DimensionConfiguration{constructor(properties){Object.assign(this,properties)}}exports.DimensionConfiguration=DimensionConfiguration;class CloudWatchDestination{constructor(properties){Object.assign(this,properties)}}exports.CloudWatchDestination=CloudWatchDestination;class SnsDestination{constructor(properties){Object.assign(this,properties)}}exports.SnsDestination=SnsDestination;class PinpointDestination{constructor(properties){Object.assign(this,properties)}}exports.PinpointDestination=PinpointDestination;class KinesisFirehoseDestination{constructor(properties){Object.assign(this,properties)}}exports.KinesisFirehoseDestination=KinesisFirehoseDestination;class EventDestination{constructor(properties){Object.assign(this,properties)}}exports.EventDestination=EventDestination;class ConfigurationSetEventDestination extends resource_1.ResourceBase{constructor(properties){super("AWS::PinpointEmail::ConfigurationSetEventDestination",properties)}}(exports.default=ConfigurationSetEventDestination).DimensionConfiguration=DimensionConfiguration,ConfigurationSetEventDestination.CloudWatchDestination=CloudWatchDestination,ConfigurationSetEventDestination.SnsDestination=SnsDestination,ConfigurationSetEventDestination.PinpointDestination=PinpointDestination,ConfigurationSetEventDestination.KinesisFirehoseDestination=KinesisFirehoseDestination,ConfigurationSetEventDestination.EventDestination=EventDestination;