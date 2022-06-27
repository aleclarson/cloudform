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

import * as _0 from './voiceChannel'
import * as _1 from './eventStream'
import * as _2 from './emailTemplate'
import * as _3 from './baiduChannel'
import * as _4 from './gcmChannel'
import * as _5 from './apnsChannel'
import * as _6 from './inAppTemplate'
import * as _7 from './campaign'
import * as _8 from './apnsVoipSandboxChannel'
import * as _9 from './apnsVoipChannel'
import * as _a from './emailChannel'
import * as _b from './smsChannel'
import * as _c from './smsTemplate'
import * as _d from './segment'
import * as _e from './apnsSandboxChannel'
import * as _f from './admChannel'
import * as _10 from './applicationSettings'
import * as _11 from './pushTemplate'
import * as _12 from './app'

export namespace Pinpoint {
  export const VoiceChannel = _0.R
  export const EventStream = _1.R
  export const EmailTemplate = _2.R
  export const BaiduChannel = _3.R
  export const GCMChannel = _4.R
  export const APNSChannel = _5.R
  export const InAppTemplate = _6.R
  export const Campaign = _7.R
  export const APNSVoipSandboxChannel = _8.R
  export const APNSVoipChannel = _9.R
  export const EmailChannel = _a.R
  export const SMSChannel = _b.R
  export const SmsTemplate = _c.R
  export const Segment = _d.R
  export const APNSSandboxChannel = _e.R
  export const ADMChannel = _f.R
  export const ApplicationSettings = _10.R
  export const PushTemplate = _11.R
  export const App = _12.R

  export type VoiceChannel = _0.R
  export type EventStream = _1.R
  export type EmailTemplate = _2.R
  export type BaiduChannel = _3.R
  export type GCMChannel = _4.R
  export type APNSChannel = _5.R
  export type InAppTemplate = _6.R
  export type Campaign = _7.R
  export type APNSVoipSandboxChannel = _8.R
  export type APNSVoipChannel = _9.R
  export type EmailChannel = _a.R
  export type SMSChannel = _b.R
  export type SmsTemplate = _c.R
  export type Segment = _d.R
  export type APNSSandboxChannel = _e.R
  export type ADMChannel = _f.R
  export type ApplicationSettings = _10.R
  export type PushTemplate = _11.R
  export type App = _12.R

  export namespace InAppTemplate {
    export type DefaultButtonConfiguration = _6.DefaultButtonConfiguration
    export type ButtonConfig = _6.ButtonConfig
    export type InAppMessageContent = _6.InAppMessageContent
    export type BodyConfig = _6.BodyConfig
    export type HeaderConfig = _6.HeaderConfig
    export type OverrideButtonConfiguration = _6.OverrideButtonConfiguration
  }
  export namespace Campaign {
    export type MetricDimension = _7.MetricDimension
    export type InAppMessageButton = _7.InAppMessageButton
    export type InAppMessageBodyConfig = _7.InAppMessageBodyConfig
    export type InAppMessageContent = _7.InAppMessageContent
    export type DefaultButtonConfiguration = _7.DefaultButtonConfiguration
    export type CampaignCustomMessage = _7.CampaignCustomMessage
    export type InAppMessageHeaderConfig = _7.InAppMessageHeaderConfig
    export type Schedule = _7.Schedule
    export type TemplateConfiguration = _7.TemplateConfiguration
    export type QuietTime = _7.QuietTime
    export type Message = _7.Message
    export type CampaignInAppMessage = _7.CampaignInAppMessage
    export type CampaignEventFilter = _7.CampaignEventFilter
    export type Template = _7.Template
    export type CampaignSmsMessage = _7.CampaignSmsMessage
    export type WriteTreatmentResource = _7.WriteTreatmentResource
    export type SetDimension = _7.SetDimension
    export type EventDimensions = _7.EventDimensions
    export type CustomDeliveryConfiguration = _7.CustomDeliveryConfiguration
    export type OverrideButtonConfiguration = _7.OverrideButtonConfiguration
    export type Limits = _7.Limits
    export type AttributeDimension = _7.AttributeDimension
    export type MessageConfiguration = _7.MessageConfiguration
    export type CampaignHook = _7.CampaignHook
    export type CampaignEmailMessage = _7.CampaignEmailMessage
  }
  export namespace Segment {
    export type AttributeDimension = _d.AttributeDimension
    export type Recency = _d.Recency
    export type Groups = _d.Groups
    export type Location = _d.Location
    export type SegmentGroups = _d.SegmentGroups
    export type Coordinates = _d.Coordinates
    export type SegmentDimensions = _d.SegmentDimensions
    export type SourceSegments = _d.SourceSegments
    export type GPSPoint = _d.GPSPoint
    export type Demographic = _d.Demographic
    export type SetDimension = _d.SetDimension
    export type Behavior = _d.Behavior
  }
  export namespace ApplicationSettings {
    export type CampaignHook = _10.CampaignHook
    export type Limits = _10.Limits
    export type QuietTime = _10.QuietTime
  }
  export namespace PushTemplate {
    export type DefaultPushNotificationTemplate = _11.DefaultPushNotificationTemplate
    export type AndroidPushNotificationTemplate = _11.AndroidPushNotificationTemplate
    export type APNSPushNotificationTemplate = _11.APNSPushNotificationTemplate
  }
}
