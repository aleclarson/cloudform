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

import * as _0 from './bot'
import * as _1 from './botAlias'
import * as _2 from './resourcePolicy'
import * as _3 from './botVersion'

export namespace Lex {
  export const Bot = _0.R
  export const BotAlias = _1.R
  export const ResourcePolicy = _2.R
  export const BotVersion = _3.R

  export type Bot = _0.R
  export type BotAlias = _1.R
  export type ResourcePolicy = _2.R
  export type BotVersion = _3.R

  export namespace Bot {
    export type SlotValueRegexFilter = _0.SlotValueRegexFilter
    export type FulfillmentUpdatesSpecification = _0.FulfillmentUpdatesSpecification
    export type SlotType = _0.SlotType
    export type CustomVocabularyItem = _0.CustomVocabularyItem
    export type InputContext = _0.InputContext
    export type PromptSpecification = _0.PromptSpecification
    export type CustomVocabulary = _0.CustomVocabulary
    export type VoiceSettings = _0.VoiceSettings
    export type AudioLogSetting = _0.AudioLogSetting
    export type IntentConfirmationSetting = _0.IntentConfirmationSetting
    export type Message = _0.Message
    export type CodeHookSpecification = _0.CodeHookSpecification
    export type WaitAndContinueSpecification = _0.WaitAndContinueSpecification
    export type TestBotAliasSettings = _0.TestBotAliasSettings
    export type CloudWatchLogGroupLogDestination = _0.CloudWatchLogGroupLogDestination
    export type SlotValueElicitationSetting = _0.SlotValueElicitationSetting
    export type BotAliasLocaleSettings = _0.BotAliasLocaleSettings
    export type MultipleValuesSetting = _0.MultipleValuesSetting
    export type SlotDefaultValueSpecification = _0.SlotDefaultValueSpecification
    export type ExternalSourceSetting = _0.ExternalSourceSetting
    export type DialogCodeHookSetting = _0.DialogCodeHookSetting
    export type ObfuscationSetting = _0.ObfuscationSetting
    export type FulfillmentStartResponseSpecification = _0.FulfillmentStartResponseSpecification
    export type Intent = _0.Intent
    export type ResponseSpecification = _0.ResponseSpecification
    export type BotLocale = _0.BotLocale
    export type TextLogDestination = _0.TextLogDestination
    export type S3Location = _0.S3Location
    export type SlotDefaultValue = _0.SlotDefaultValue
    export type SlotPriority = _0.SlotPriority
    export type SlotValueSelectionSetting = _0.SlotValueSelectionSetting
    export type AdvancedRecognitionSetting = _0.AdvancedRecognitionSetting
    export type ImageResponseCard = _0.ImageResponseCard
    export type SlotTypeValue = _0.SlotTypeValue
    export type Button = _0.Button
    export type PlainTextMessage = _0.PlainTextMessage
    export type SSMLMessage = _0.SSMLMessage
    export type KendraConfiguration = _0.KendraConfiguration
    export type GrammarSlotTypeSource = _0.GrammarSlotTypeSource
    export type MessageGroup = _0.MessageGroup
    export type PostFulfillmentStatusSpecification = _0.PostFulfillmentStatusSpecification
    export type Slot = _0.Slot
    export type SampleUtterance = _0.SampleUtterance
    export type FulfillmentUpdateResponseSpecification = _0.FulfillmentUpdateResponseSpecification
    export type GrammarSlotTypeSetting = _0.GrammarSlotTypeSetting
    export type BotAliasLocaleSettingsItem = _0.BotAliasLocaleSettingsItem
    export type IntentClosingSetting = _0.IntentClosingSetting
    export type ConversationLogSettings = _0.ConversationLogSettings
    export type AudioLogDestination = _0.AudioLogDestination
    export type TextLogSetting = _0.TextLogSetting
    export type StillWaitingResponseSpecification = _0.StillWaitingResponseSpecification
    export type OutputContext = _0.OutputContext
    export type LambdaCodeHook = _0.LambdaCodeHook
    export type S3BucketLogDestination = _0.S3BucketLogDestination
    export type FulfillmentCodeHookSetting = _0.FulfillmentCodeHookSetting
    export type CustomPayload = _0.CustomPayload
    export type SampleValue = _0.SampleValue
  }
  export namespace BotAlias {
    export type CodeHookSpecification = _1.CodeHookSpecification
    export type BotAliasLocaleSettings = _1.BotAliasLocaleSettings
    export type AudioLogDestination = _1.AudioLogDestination
    export type ConversationLogSettings = _1.ConversationLogSettings
    export type CloudWatchLogGroupLogDestination = _1.CloudWatchLogGroupLogDestination
    export type LambdaCodeHook = _1.LambdaCodeHook
    export type AudioLogSetting = _1.AudioLogSetting
    export type TextLogSetting = _1.TextLogSetting
    export type TextLogDestination = _1.TextLogDestination
    export type BotAliasLocaleSettingsItem = _1.BotAliasLocaleSettingsItem
    export type S3BucketLogDestination = _1.S3BucketLogDestination
  }
  export namespace ResourcePolicy {
    export type Policy = _2.Policy
  }
  export namespace BotVersion {
    export type BotVersionLocaleDetails = _3.BotVersionLocaleDetails
    export type BotVersionLocaleSpecification = _3.BotVersionLocaleSpecification
  }
}
