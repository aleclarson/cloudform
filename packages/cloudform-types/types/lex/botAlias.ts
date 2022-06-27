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

export class CodeHookSpecification {
    LambdaCodeHook!: LambdaCodeHook

    constructor(properties: CodeHookSpecification) {
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

export class AudioLogDestination {
    S3Bucket!: S3BucketLogDestination

    constructor(properties: AudioLogDestination) {
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

export class CloudWatchLogGroupLogDestination {
    CloudWatchLogGroupArn!: Value<string>
    LogPrefix!: Value<string>

    constructor(properties: CloudWatchLogGroupLogDestination) {
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

export class AudioLogSetting {
    Destination!: AudioLogDestination
    Enabled!: Value<boolean>

    constructor(properties: AudioLogSetting) {
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

export class TextLogDestination {
    CloudWatch!: CloudWatchLogGroupLogDestination

    constructor(properties: TextLogDestination) {
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

export class S3BucketLogDestination {
    S3BucketArn!: Value<string>
    LogPrefix!: Value<string>
    KmsKeyArn?: Value<string>

    constructor(properties: S3BucketLogDestination) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    BotId: Value<string>
    BotAliasLocaleSettings?: List<BotAliasLocaleSettingsItem>
    BotAliasName: Value<string>
    BotVersion?: Value<string>
    ConversationLogSettings?: ConversationLogSettings
    Description?: Value<string>
    SentimentAnalysisSettings?: {[key: string]: any}
    BotAliasTags?: List<ResourceTag>
}

class BotAlias extends ResourceBase<Properties> {
    static CodeHookSpecification = CodeHookSpecification
    static BotAliasLocaleSettings = BotAliasLocaleSettings
    static AudioLogDestination = AudioLogDestination
    static ConversationLogSettings = ConversationLogSettings
    static CloudWatchLogGroupLogDestination = CloudWatchLogGroupLogDestination
    static LambdaCodeHook = LambdaCodeHook
    static AudioLogSetting = AudioLogSetting
    static TextLogSetting = TextLogSetting
    static TextLogDestination = TextLogDestination
    static BotAliasLocaleSettingsItem = BotAliasLocaleSettingsItem
    static S3BucketLogDestination = S3BucketLogDestination

    constructor(properties: Properties) {
        super('AWS::Lex::BotAlias', properties)
    }
}
export { BotAlias as R }
