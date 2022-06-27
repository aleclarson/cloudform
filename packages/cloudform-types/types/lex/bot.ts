/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class SlotValueRegexFilter {
    Pattern!: Value<string>

    constructor(properties: SlotValueRegexFilter) {
        Object.assign(this, properties)
    }
}

export class FulfillmentUpdatesSpecification {
    StartResponse?: FulfillmentStartResponseSpecification
    UpdateResponse?: FulfillmentUpdateResponseSpecification
    TimeoutInSeconds?: Value<number>
    Active!: Value<boolean>

    constructor(properties: FulfillmentUpdatesSpecification) {
        Object.assign(this, properties)
    }
}

export class SlotType {
    Name!: Value<string>
    Description?: Value<string>
    ParentSlotTypeSignature?: Value<string>
    SlotTypeValues?: List<SlotTypeValue>
    ValueSelectionSetting?: SlotValueSelectionSetting
    ExternalSourceSetting?: ExternalSourceSetting

    constructor(properties: SlotType) {
        Object.assign(this, properties)
    }
}

export class CustomVocabularyItem {
    Phrase!: Value<string>
    Weight?: Value<number>

    constructor(properties: CustomVocabularyItem) {
        Object.assign(this, properties)
    }
}

export class InputContext {
    Name!: Value<string>

    constructor(properties: InputContext) {
        Object.assign(this, properties)
    }
}

export class PromptSpecification {
    MessageGroupsList!: List<MessageGroup>
    MaxRetries!: Value<number>
    AllowInterrupt?: Value<boolean>

    constructor(properties: PromptSpecification) {
        Object.assign(this, properties)
    }
}

export class CustomVocabulary {
    CustomVocabularyItems!: List<CustomVocabularyItem>

    constructor(properties: CustomVocabulary) {
        Object.assign(this, properties)
    }
}

export class VoiceSettings {
    VoiceId!: Value<string>

    constructor(properties: VoiceSettings) {
        Object.assign(this, properties)
    }
}

export class AudioLogSetting {
    Destination!: AudioLogDestination
    Enabled!: Value<boolean>

    constructor(properties: AudioLogSetting) {
        Object.assign(this, properties)
    }
}

export class IntentConfirmationSetting {
    PromptSpecification!: PromptSpecification
    DeclinationResponse!: ResponseSpecification
    IsActive?: Value<boolean>

    constructor(properties: IntentConfirmationSetting) {
        Object.assign(this, properties)
    }
}

export class Message {
    PlainTextMessage?: PlainTextMessage
    CustomPayload?: CustomPayload
    SSMLMessage?: SSMLMessage
    ImageResponseCard?: ImageResponseCard

    constructor(properties: Message) {
        Object.assign(this, properties)
    }
}

export class CodeHookSpecification {
    LambdaCodeHook!: LambdaCodeHook

    constructor(properties: CodeHookSpecification) {
        Object.assign(this, properties)
    }
}

export class WaitAndContinueSpecification {
    WaitingResponse!: ResponseSpecification
    ContinueResponse!: ResponseSpecification
    StillWaitingResponse?: StillWaitingResponseSpecification
    IsActive?: Value<boolean>

    constructor(properties: WaitAndContinueSpecification) {
        Object.assign(this, properties)
    }
}

export class TestBotAliasSettings {
    BotAliasLocaleSettings?: List<BotAliasLocaleSettingsItem>
    ConversationLogSettings?: ConversationLogSettings
    Description?: Value<string>
    SentimentAnalysisSettings?: {[key: string]: any}

    constructor(properties: TestBotAliasSettings) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLogGroupLogDestination {
    CloudWatchLogGroupArn!: Value<string>
    LogPrefix!: Value<string>

    constructor(properties: CloudWatchLogGroupLogDestination) {
        Object.assign(this, properties)
    }
}

export class SlotValueElicitationSetting {
    DefaultValueSpecification?: SlotDefaultValueSpecification
    SlotConstraint!: Value<string>
    PromptSpecification?: PromptSpecification
    SampleUtterances?: List<SampleUtterance>
    WaitAndContinueSpecification?: WaitAndContinueSpecification

    constructor(properties: SlotValueElicitationSetting) {
        Object.assign(this, properties)
    }
}

export class BotAliasLocaleSettings {
    CodeHookSpecification?: CodeHookSpecification
    Enabled!: Value<boolean>

    constructor(properties: BotAliasLocaleSettings) {
        Object.assign(this, properties)
    }
}

export class MultipleValuesSetting {
    AllowMultipleValues?: Value<boolean>

    constructor(properties: MultipleValuesSetting) {
        Object.assign(this, properties)
    }
}

export class SlotDefaultValueSpecification {
    DefaultValueList!: List<SlotDefaultValue>

    constructor(properties: SlotDefaultValueSpecification) {
        Object.assign(this, properties)
    }
}

export class ExternalSourceSetting {
    GrammarSlotTypeSetting?: GrammarSlotTypeSetting

    constructor(properties: ExternalSourceSetting) {
        Object.assign(this, properties)
    }
}

export class DialogCodeHookSetting {
    Enabled!: Value<boolean>

    constructor(properties: DialogCodeHookSetting) {
        Object.assign(this, properties)
    }
}

export class ObfuscationSetting {
    ObfuscationSettingType!: Value<string>

    constructor(properties: ObfuscationSetting) {
        Object.assign(this, properties)
    }
}

export class FulfillmentStartResponseSpecification {
    MessageGroups!: List<MessageGroup>
    DelayInSeconds!: Value<number>
    AllowInterrupt?: Value<boolean>

    constructor(properties: FulfillmentStartResponseSpecification) {
        Object.assign(this, properties)
    }
}

export class Intent {
    Name!: Value<string>
    Description?: Value<string>
    ParentIntentSignature?: Value<string>
    SampleUtterances?: List<SampleUtterance>
    DialogCodeHook?: DialogCodeHookSetting
    FulfillmentCodeHook?: FulfillmentCodeHookSetting
    IntentConfirmationSetting?: IntentConfirmationSetting
    IntentClosingSetting?: IntentClosingSetting
    InputContexts?: List<InputContext>
    OutputContexts?: List<OutputContext>
    KendraConfiguration?: KendraConfiguration
    SlotPriorities?: List<SlotPriority>
    Slots?: List<Slot>

    constructor(properties: Intent) {
        Object.assign(this, properties)
    }
}

export class ResponseSpecification {
    MessageGroupsList!: List<MessageGroup>
    AllowInterrupt?: Value<boolean>

    constructor(properties: ResponseSpecification) {
        Object.assign(this, properties)
    }
}

export class BotLocale {
    LocaleId!: Value<string>
    Description?: Value<string>
    VoiceSettings?: VoiceSettings
    NluConfidenceThreshold!: Value<number>
    Intents?: List<Intent>
    SlotTypes?: List<SlotType>
    CustomVocabulary?: CustomVocabulary

    constructor(properties: BotLocale) {
        Object.assign(this, properties)
    }
}

export class TextLogDestination {
    CloudWatch!: CloudWatchLogGroupLogDestination

    constructor(properties: TextLogDestination) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    S3Bucket!: Value<string>
    S3ObjectKey!: Value<string>
    S3ObjectVersion?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class SlotDefaultValue {
    DefaultValue!: Value<string>

    constructor(properties: SlotDefaultValue) {
        Object.assign(this, properties)
    }
}

export class SlotPriority {
    Priority!: Value<number>
    SlotName!: Value<string>

    constructor(properties: SlotPriority) {
        Object.assign(this, properties)
    }
}

export class SlotValueSelectionSetting {
    ResolutionStrategy!: Value<string>
    RegexFilter?: SlotValueRegexFilter
    AdvancedRecognitionSetting?: AdvancedRecognitionSetting

    constructor(properties: SlotValueSelectionSetting) {
        Object.assign(this, properties)
    }
}

export class AdvancedRecognitionSetting {
    AudioRecognitionStrategy?: Value<string>

    constructor(properties: AdvancedRecognitionSetting) {
        Object.assign(this, properties)
    }
}

export class ImageResponseCard {
    Title!: Value<string>
    Subtitle?: Value<string>
    ImageUrl?: Value<string>
    Buttons?: List<Button>

    constructor(properties: ImageResponseCard) {
        Object.assign(this, properties)
    }
}

export class SlotTypeValue {
    SampleValue!: SampleValue
    Synonyms?: List<SampleValue>

    constructor(properties: SlotTypeValue) {
        Object.assign(this, properties)
    }
}

export class Button {
    Text!: Value<string>
    Value!: Value<string>

    constructor(properties: Button) {
        Object.assign(this, properties)
    }
}

export class PlainTextMessage {
    Value!: Value<string>

    constructor(properties: PlainTextMessage) {
        Object.assign(this, properties)
    }
}

export class SSMLMessage {
    Value!: Value<string>

    constructor(properties: SSMLMessage) {
        Object.assign(this, properties)
    }
}

export class KendraConfiguration {
    KendraIndex!: Value<string>
    QueryFilterStringEnabled?: Value<boolean>
    QueryFilterString?: Value<string>

    constructor(properties: KendraConfiguration) {
        Object.assign(this, properties)
    }
}

export class GrammarSlotTypeSource {
    S3BucketName!: Value<string>
    S3ObjectKey!: Value<string>
    KmsKeyArn?: Value<string>

    constructor(properties: GrammarSlotTypeSource) {
        Object.assign(this, properties)
    }
}

export class MessageGroup {
    Message!: Message
    Variations?: List<Message>

    constructor(properties: MessageGroup) {
        Object.assign(this, properties)
    }
}

export class PostFulfillmentStatusSpecification {
    SuccessResponse?: ResponseSpecification
    FailureResponse?: ResponseSpecification
    TimeoutResponse?: ResponseSpecification

    constructor(properties: PostFulfillmentStatusSpecification) {
        Object.assign(this, properties)
    }
}

export class Slot {
    Name!: Value<string>
    Description?: Value<string>
    SlotTypeName!: Value<string>
    ValueElicitationSetting!: SlotValueElicitationSetting
    ObfuscationSetting?: ObfuscationSetting
    MultipleValuesSetting?: MultipleValuesSetting

    constructor(properties: Slot) {
        Object.assign(this, properties)
    }
}

export class SampleUtterance {
    Utterance!: Value<string>

    constructor(properties: SampleUtterance) {
        Object.assign(this, properties)
    }
}

export class FulfillmentUpdateResponseSpecification {
    MessageGroups!: List<MessageGroup>
    FrequencyInSeconds!: Value<number>
    AllowInterrupt?: Value<boolean>

    constructor(properties: FulfillmentUpdateResponseSpecification) {
        Object.assign(this, properties)
    }
}

export class GrammarSlotTypeSetting {
    Source?: GrammarSlotTypeSource

    constructor(properties: GrammarSlotTypeSetting) {
        Object.assign(this, properties)
    }
}

export class BotAliasLocaleSettingsItem {
    LocaleId!: Value<string>
    BotAliasLocaleSetting!: BotAliasLocaleSettings

    constructor(properties: BotAliasLocaleSettingsItem) {
        Object.assign(this, properties)
    }
}

export class IntentClosingSetting {
    ClosingResponse!: ResponseSpecification
    IsActive?: Value<boolean>

    constructor(properties: IntentClosingSetting) {
        Object.assign(this, properties)
    }
}

export class ConversationLogSettings {
    AudioLogSettings?: List<AudioLogSetting>
    TextLogSettings?: List<TextLogSetting>

    constructor(properties: ConversationLogSettings) {
        Object.assign(this, properties)
    }
}

export class AudioLogDestination {
    S3Bucket!: S3BucketLogDestination

    constructor(properties: AudioLogDestination) {
        Object.assign(this, properties)
    }
}

export class TextLogSetting {
    Destination!: TextLogDestination
    Enabled!: Value<boolean>

    constructor(properties: TextLogSetting) {
        Object.assign(this, properties)
    }
}

export class StillWaitingResponseSpecification {
    MessageGroupsList!: List<MessageGroup>
    FrequencyInSeconds!: Value<number>
    TimeoutInSeconds!: Value<number>
    AllowInterrupt?: Value<boolean>

    constructor(properties: StillWaitingResponseSpecification) {
        Object.assign(this, properties)
    }
}

export class OutputContext {
    Name!: Value<string>
    TimeToLiveInSeconds!: Value<number>
    TurnsToLive!: Value<number>

    constructor(properties: OutputContext) {
        Object.assign(this, properties)
    }
}

export class LambdaCodeHook {
    CodeHookInterfaceVersion!: Value<string>
    LambdaArn!: Value<string>

    constructor(properties: LambdaCodeHook) {
        Object.assign(this, properties)
    }
}

export class S3BucketLogDestination {
    S3BucketArn!: Value<string>
    LogPrefix!: Value<string>
    KmsKeyArn?: Value<string>

    constructor(properties: S3BucketLogDestination) {
        Object.assign(this, properties)
    }
}

export class FulfillmentCodeHookSetting {
    FulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification
    PostFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification
    Enabled!: Value<boolean>

    constructor(properties: FulfillmentCodeHookSetting) {
        Object.assign(this, properties)
    }
}

export class CustomPayload {
    Value!: Value<string>

    constructor(properties: CustomPayload) {
        Object.assign(this, properties)
    }
}

export class SampleValue {
    Value!: Value<string>

    constructor(properties: SampleValue) {
        Object.assign(this, properties)
    }
}

export interface BotProperties {
    Name: Value<string>
    Description?: Value<string>
    RoleArn: Value<string>
    DataPrivacy: {[key: string]: any}
    IdleSessionTTLInSeconds: Value<number>
    BotLocales?: List<BotLocale>
    BotFileS3Location?: S3Location
    BotTags?: List<ResourceTag>
    TestBotAliasTags?: List<ResourceTag>
    AutoBuildBotLocales?: Value<boolean>
    TestBotAliasSettings?: TestBotAliasSettings
}

export default class Bot extends ResourceBase<BotProperties> {
    static SlotValueRegexFilter = SlotValueRegexFilter
    static FulfillmentUpdatesSpecification = FulfillmentUpdatesSpecification
    static SlotType = SlotType
    static CustomVocabularyItem = CustomVocabularyItem
    static InputContext = InputContext
    static PromptSpecification = PromptSpecification
    static CustomVocabulary = CustomVocabulary
    static VoiceSettings = VoiceSettings
    static AudioLogSetting = AudioLogSetting
    static IntentConfirmationSetting = IntentConfirmationSetting
    static Message = Message
    static CodeHookSpecification = CodeHookSpecification
    static WaitAndContinueSpecification = WaitAndContinueSpecification
    static TestBotAliasSettings = TestBotAliasSettings
    static CloudWatchLogGroupLogDestination = CloudWatchLogGroupLogDestination
    static SlotValueElicitationSetting = SlotValueElicitationSetting
    static BotAliasLocaleSettings = BotAliasLocaleSettings
    static MultipleValuesSetting = MultipleValuesSetting
    static SlotDefaultValueSpecification = SlotDefaultValueSpecification
    static ExternalSourceSetting = ExternalSourceSetting
    static DialogCodeHookSetting = DialogCodeHookSetting
    static ObfuscationSetting = ObfuscationSetting
    static FulfillmentStartResponseSpecification = FulfillmentStartResponseSpecification
    static Intent = Intent
    static ResponseSpecification = ResponseSpecification
    static BotLocale = BotLocale
    static TextLogDestination = TextLogDestination
    static S3Location = S3Location
    static SlotDefaultValue = SlotDefaultValue
    static SlotPriority = SlotPriority
    static SlotValueSelectionSetting = SlotValueSelectionSetting
    static AdvancedRecognitionSetting = AdvancedRecognitionSetting
    static ImageResponseCard = ImageResponseCard
    static SlotTypeValue = SlotTypeValue
    static Button = Button
    static PlainTextMessage = PlainTextMessage
    static SSMLMessage = SSMLMessage
    static KendraConfiguration = KendraConfiguration
    static GrammarSlotTypeSource = GrammarSlotTypeSource
    static MessageGroup = MessageGroup
    static PostFulfillmentStatusSpecification = PostFulfillmentStatusSpecification
    static Slot = Slot
    static SampleUtterance = SampleUtterance
    static FulfillmentUpdateResponseSpecification = FulfillmentUpdateResponseSpecification
    static GrammarSlotTypeSetting = GrammarSlotTypeSetting
    static BotAliasLocaleSettingsItem = BotAliasLocaleSettingsItem
    static IntentClosingSetting = IntentClosingSetting
    static ConversationLogSettings = ConversationLogSettings
    static AudioLogDestination = AudioLogDestination
    static TextLogSetting = TextLogSetting
    static StillWaitingResponseSpecification = StillWaitingResponseSpecification
    static OutputContext = OutputContext
    static LambdaCodeHook = LambdaCodeHook
    static S3BucketLogDestination = S3BucketLogDestination
    static FulfillmentCodeHookSetting = FulfillmentCodeHookSetting
    static CustomPayload = CustomPayload
    static SampleValue = SampleValue

    constructor(properties: BotProperties) {
        super('AWS::Lex::Bot', properties)
    }
}
