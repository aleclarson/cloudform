/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import * as _0 from './config'
import * as _1 from './dataflowEndpointGroup'
import * as _2 from './missionProfile'

export namespace GroundStation {
  export const Config = _0.R
  export const DataflowEndpointGroup = _1.R
  export const MissionProfile = _2.R

  export type Config = _0.R
  export type DataflowEndpointGroup = _1.R
  export type MissionProfile = _2.R

  export namespace Config {
    export type S3RecordingConfig = _0.S3RecordingConfig
    export type UplinkEchoConfig = _0.UplinkEchoConfig
    export type DataflowEndpointConfig = _0.DataflowEndpointConfig
    export type AntennaDownlinkConfig = _0.AntennaDownlinkConfig
    export type DemodulationConfig = _0.DemodulationConfig
    export type AntennaDownlinkDemodDecodeConfig = _0.AntennaDownlinkDemodDecodeConfig
    export type UplinkSpectrumConfig = _0.UplinkSpectrumConfig
    export type Frequency = _0.Frequency
    export type SpectrumConfig = _0.SpectrumConfig
    export type FrequencyBandwidth = _0.FrequencyBandwidth
    export type TrackingConfig = _0.TrackingConfig
    export type ConfigData = _0.ConfigData
    export type AntennaUplinkConfig = _0.AntennaUplinkConfig
    export type DecodeConfig = _0.DecodeConfig
    export type Eirp = _0.Eirp
  }
  export namespace DataflowEndpointGroup {
    export type DataflowEndpoint = _1.DataflowEndpoint
    export type SecurityDetails = _1.SecurityDetails
    export type SocketAddress = _1.SocketAddress
    export type EndpointDetails = _1.EndpointDetails
  }
  export namespace MissionProfile {
    export type DataflowEdge = _2.DataflowEdge
  }
}
