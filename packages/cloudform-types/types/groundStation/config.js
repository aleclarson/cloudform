"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.Eirp=exports.DecodeConfig=exports.AntennaUplinkConfig=exports.ConfigData=exports.TrackingConfig=exports.FrequencyBandwidth=exports.SpectrumConfig=exports.Frequency=exports.UplinkSpectrumConfig=exports.AntennaDownlinkDemodDecodeConfig=exports.DemodulationConfig=exports.AntennaDownlinkConfig=exports.DataflowEndpointConfig=exports.UplinkEchoConfig=exports.S3RecordingConfig=void 0;const resource_1=require("../resource");class S3RecordingConfig{constructor(properties){Object.assign(this,properties)}}exports.S3RecordingConfig=S3RecordingConfig;class UplinkEchoConfig{constructor(properties){Object.assign(this,properties)}}exports.UplinkEchoConfig=UplinkEchoConfig;class DataflowEndpointConfig{constructor(properties){Object.assign(this,properties)}}exports.DataflowEndpointConfig=DataflowEndpointConfig;class AntennaDownlinkConfig{constructor(properties){Object.assign(this,properties)}}exports.AntennaDownlinkConfig=AntennaDownlinkConfig;class DemodulationConfig{constructor(properties){Object.assign(this,properties)}}exports.DemodulationConfig=DemodulationConfig;class AntennaDownlinkDemodDecodeConfig{constructor(properties){Object.assign(this,properties)}}exports.AntennaDownlinkDemodDecodeConfig=AntennaDownlinkDemodDecodeConfig;class UplinkSpectrumConfig{constructor(properties){Object.assign(this,properties)}}exports.UplinkSpectrumConfig=UplinkSpectrumConfig;class Frequency{constructor(properties){Object.assign(this,properties)}}exports.Frequency=Frequency;class SpectrumConfig{constructor(properties){Object.assign(this,properties)}}exports.SpectrumConfig=SpectrumConfig;class FrequencyBandwidth{constructor(properties){Object.assign(this,properties)}}exports.FrequencyBandwidth=FrequencyBandwidth;class TrackingConfig{constructor(properties){Object.assign(this,properties)}}exports.TrackingConfig=TrackingConfig;class ConfigData{constructor(properties){Object.assign(this,properties)}}exports.ConfigData=ConfigData;class AntennaUplinkConfig{constructor(properties){Object.assign(this,properties)}}exports.AntennaUplinkConfig=AntennaUplinkConfig;class DecodeConfig{constructor(properties){Object.assign(this,properties)}}exports.DecodeConfig=DecodeConfig;class Eirp{constructor(properties){Object.assign(this,properties)}}exports.Eirp=Eirp;class Config extends resource_1.ResourceBase{constructor(properties){super("AWS::GroundStation::Config",properties)}}(exports.R=Config).S3RecordingConfig=S3RecordingConfig,Config.UplinkEchoConfig=UplinkEchoConfig,Config.DataflowEndpointConfig=DataflowEndpointConfig,Config.AntennaDownlinkConfig=AntennaDownlinkConfig,Config.DemodulationConfig=DemodulationConfig,Config.AntennaDownlinkDemodDecodeConfig=AntennaDownlinkDemodDecodeConfig,Config.UplinkSpectrumConfig=UplinkSpectrumConfig,Config.Frequency=Frequency,Config.SpectrumConfig=SpectrumConfig,Config.FrequencyBandwidth=FrequencyBandwidth,Config.TrackingConfig=TrackingConfig,Config.ConfigData=ConfigData,Config.AntennaUplinkConfig=AntennaUplinkConfig,Config.DecodeConfig=DecodeConfig,Config.Eirp=Eirp;