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

import * as _0 from './inputSecurityGroup'
import * as _1 from './channel'
import * as _2 from './input'

export namespace MediaLive {
  export const InputSecurityGroup = _0.R
  export const Channel = _1.R
  export const Input = _2.R

  export type InputSecurityGroup = _0.R
  export type Channel = _1.R
  export type Input = _2.R

  export namespace InputSecurityGroup {
    export type InputWhitelistRuleCidr = _0.InputWhitelistRuleCidr
  }
  export namespace Channel {
    export type HlsInputSettings = _1.HlsInputSettings
    export type DvbSubDestinationSettings = _1.DvbSubDestinationSettings
    export type Rec709Settings = _1.Rec709Settings
    export type VideoCodecSettings = _1.VideoCodecSettings
    export type HlsSettings = _1.HlsSettings
    export type FrameCaptureSettings = _1.FrameCaptureSettings
    export type MotionGraphicsSettings = _1.MotionGraphicsSettings
    export type FrameCaptureCdnSettings = _1.FrameCaptureCdnSettings
    export type NielsenNaesIiNw = _1.NielsenNaesIiNw
    export type InputLossBehavior = _1.InputLossBehavior
    export type MultiplexProgramChannelDestinationSettings = _1.MultiplexProgramChannelDestinationSettings
    export type HlsCdnSettings = _1.HlsCdnSettings
    export type HlsOutputSettings = _1.HlsOutputSettings
    export type EmbeddedPlusScte20DestinationSettings = _1.EmbeddedPlusScte20DestinationSettings
    export type FrameCaptureS3Settings = _1.FrameCaptureS3Settings
    export type ArchiveCdnSettings = _1.ArchiveCdnSettings
    export type Scte27SourceSettings = _1.Scte27SourceSettings
    export type AudioTrackSelection = _1.AudioTrackSelection
    export type EbuTtDDestinationSettings = _1.EbuTtDDestinationSettings
    export type VideoSelectorPid = _1.VideoSelectorPid
    export type FailoverCondition = _1.FailoverCondition
    export type Hdr10Settings = _1.Hdr10Settings
    export type StaticKeySettings = _1.StaticKeySettings
    export type InputLocation = _1.InputLocation
    export type AudioLanguageSelection = _1.AudioLanguageSelection
    export type CaptionRectangle = _1.CaptionRectangle
    export type ArchiveS3Settings = _1.ArchiveS3Settings
    export type SmpteTtDestinationSettings = _1.SmpteTtDestinationSettings
    export type AribSourceSettings = _1.AribSourceSettings
    export type Mp2Settings = _1.Mp2Settings
    export type AudioSilenceFailoverSettings = _1.AudioSilenceFailoverSettings
    export type Fmp4HlsSettings = _1.Fmp4HlsSettings
    export type Scte35SpliceInsert = _1.Scte35SpliceInsert
    export type AudioChannelMapping = _1.AudioChannelMapping
    export type FeatureActivations = _1.FeatureActivations
    export type OutputGroup = _1.OutputGroup
    export type UdpOutputSettings = _1.UdpOutputSettings
    export type Ac3Settings = _1.Ac3Settings
    export type Eac3Settings = _1.Eac3Settings
    export type MediaPackageOutputSettings = _1.MediaPackageOutputSettings
    export type Rec601Settings = _1.Rec601Settings
    export type H264Settings = _1.H264Settings
    export type H264FilterSettings = _1.H264FilterSettings
    export type FailoverConditionSettings = _1.FailoverConditionSettings
    export type Mpeg2Settings = _1.Mpeg2Settings
    export type AudioSelectorSettings = _1.AudioSelectorSettings
    export type UdpContainerSettings = _1.UdpContainerSettings
    export type TimecodeConfig = _1.TimecodeConfig
    export type VideoSelector = _1.VideoSelector
    export type DvbTdtSettings = _1.DvbTdtSettings
    export type HlsGroupSettings = _1.HlsGroupSettings
    export type OutputDestinationSettings = _1.OutputDestinationSettings
    export type AvailConfiguration = _1.AvailConfiguration
    export type TeletextDestinationSettings = _1.TeletextDestinationSettings
    export type H265Settings = _1.H265Settings
    export type AudioCodecSettings = _1.AudioCodecSettings
    export type DvbNitSettings = _1.DvbNitSettings
    export type WebvttDestinationSettings = _1.WebvttDestinationSettings
    export type AacSettings = _1.AacSettings
    export type Scte35TimeSignalApos = _1.Scte35TimeSignalApos
    export type FecOutputSettings = _1.FecOutputSettings
    export type OutputDestination = _1.OutputDestination
    export type AncillarySourceSettings = _1.AncillarySourceSettings
    export type Mpeg2FilterSettings = _1.Mpeg2FilterSettings
    export type CaptionSelector = _1.CaptionSelector
    export type VideoBlackFailoverSettings = _1.VideoBlackFailoverSettings
    export type RtmpOutputSettings = _1.RtmpOutputSettings
    export type RtmpCaptionInfoDestinationSettings = _1.RtmpCaptionInfoDestinationSettings
    export type TtmlDestinationSettings = _1.TtmlDestinationSettings
    export type M2tsSettings = _1.M2tsSettings
    export type HlsWebdavSettings = _1.HlsWebdavSettings
    export type NielsenConfiguration = _1.NielsenConfiguration
    export type GlobalConfiguration = _1.GlobalConfiguration
    export type MediaPackageOutputDestinationSettings = _1.MediaPackageOutputDestinationSettings
    export type AudioOnlyHlsSettings = _1.AudioOnlyHlsSettings
    export type OutputLocationRef = _1.OutputLocationRef
    export type Scte27DestinationSettings = _1.Scte27DestinationSettings
    export type AutomaticInputFailoverSettings = _1.AutomaticInputFailoverSettings
    export type FrameCaptureGroupSettings = _1.FrameCaptureGroupSettings
    export type ArchiveOutputSettings = _1.ArchiveOutputSettings
    export type ArchiveGroupSettings = _1.ArchiveGroupSettings
    export type RawSettings = _1.RawSettings
    export type DvbSdtSettings = _1.DvbSdtSettings
    export type VideoSelectorProgramId = _1.VideoSelectorProgramId
    export type NielsenWatermarksSettings = _1.NielsenWatermarksSettings
    export type InputAttachment = _1.InputAttachment
    export type InputChannelLevel = _1.InputChannelLevel
    export type StandardHlsSettings = _1.StandardHlsSettings
    export type PassThroughSettings = _1.PassThroughSettings
    export type NielsenCBET = _1.NielsenCBET
    export type ArchiveContainerSettings = _1.ArchiveContainerSettings
    export type EmbeddedSourceSettings = _1.EmbeddedSourceSettings
    export type InputSpecification = _1.InputSpecification
    export type FrameCaptureOutputSettings = _1.FrameCaptureOutputSettings
    export type EncoderSettings = _1.EncoderSettings
    export type AvailSettings = _1.AvailSettings
    export type H264ColorSpaceSettings = _1.H264ColorSpaceSettings
    export type MediaPackageGroupSettings = _1.MediaPackageGroupSettings
    export type MultiplexOutputSettings = _1.MultiplexOutputSettings
    export type H265ColorSpaceSettings = _1.H265ColorSpaceSettings
    export type AudioHlsRenditionSelection = _1.AudioHlsRenditionSelection
    export type EmbeddedDestinationSettings = _1.EmbeddedDestinationSettings
    export type AvailBlanking = _1.AvailBlanking
    export type InputSettings = _1.InputSettings
    export type AudioNormalizationSettings = _1.AudioNormalizationSettings
    export type AudioWatermarkSettings = _1.AudioWatermarkSettings
    export type MultiplexGroupSettings = _1.MultiplexGroupSettings
    export type InputLossFailoverSettings = _1.InputLossFailoverSettings
    export type AudioSelector = _1.AudioSelector
    export type AudioPidSelection = _1.AudioPidSelection
    export type CaptionLanguageMapping = _1.CaptionLanguageMapping
    export type DvbSubSourceSettings = _1.DvbSubSourceSettings
    export type CaptionSelectorSettings = _1.CaptionSelectorSettings
    export type VideoSelectorSettings = _1.VideoSelectorSettings
    export type VpcOutputSettings = _1.VpcOutputSettings
    export type TeletextSourceSettings = _1.TeletextSourceSettings
    export type CaptionDescription = _1.CaptionDescription
    export type MotionGraphicsConfiguration = _1.MotionGraphicsConfiguration
    export type VideoSelectorColorSpaceSettings = _1.VideoSelectorColorSpaceSettings
    export type Output = _1.Output
    export type NetworkInputSettings = _1.NetworkInputSettings
    export type H265FilterSettings = _1.H265FilterSettings
    export type HlsBasicPutSettings = _1.HlsBasicPutSettings
    export type Scte20PlusEmbeddedDestinationSettings = _1.Scte20PlusEmbeddedDestinationSettings
    export type Scte20SourceSettings = _1.Scte20SourceSettings
    export type AudioTrack = _1.AudioTrack
    export type AudioDescription = _1.AudioDescription
    export type BurnInDestinationSettings = _1.BurnInDestinationSettings
    export type RtmpGroupSettings = _1.RtmpGroupSettings
    export type MsSmoothOutputSettings = _1.MsSmoothOutputSettings
    export type CaptionDestinationSettings = _1.CaptionDestinationSettings
    export type MsSmoothGroupSettings = _1.MsSmoothGroupSettings
    export type WavSettings = _1.WavSettings
    export type KeyProviderSettings = _1.KeyProviderSettings
    export type CdiInputSpecification = _1.CdiInputSpecification
    export type OutputGroupSettings = _1.OutputGroupSettings
    export type HtmlMotionGraphicsSettings = _1.HtmlMotionGraphicsSettings
    export type OutputSettings = _1.OutputSettings
    export type HlsS3Settings = _1.HlsS3Settings
    export type VideoDescription = _1.VideoDescription
    export type BlackoutSlate = _1.BlackoutSlate
    export type ColorSpacePassthroughSettings = _1.ColorSpacePassthroughSettings
    export type HlsMediaStoreSettings = _1.HlsMediaStoreSettings
    export type M3u8Settings = _1.M3u8Settings
    export type AribDestinationSettings = _1.AribDestinationSettings
    export type UdpGroupSettings = _1.UdpGroupSettings
    export type FrameCaptureHlsSettings = _1.FrameCaptureHlsSettings
    export type RemixSettings = _1.RemixSettings
    export type TemporalFilterSettings = _1.TemporalFilterSettings
    export type HlsAkamaiSettings = _1.HlsAkamaiSettings
  }
  export namespace Input {
    export type InputSourceRequest = _2.InputSourceRequest
    export type InputDeviceRequest = _2.InputDeviceRequest
    export type InputDeviceSettings = _2.InputDeviceSettings
    export type InputVpcRequest = _2.InputVpcRequest
    export type InputDestinationRequest = _2.InputDestinationRequest
    export type MediaConnectFlowRequest = _2.MediaConnectFlowRequest
  }
}
