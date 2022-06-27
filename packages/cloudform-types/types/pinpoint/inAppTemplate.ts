/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DefaultButtonConfiguration {
    BackgroundColor?: Value<string>
    BorderRadius?: Value<number>
    ButtonAction?: Value<string>
    Link?: Value<string>
    Text?: Value<string>
    TextColor?: Value<string>

    constructor(properties: DefaultButtonConfiguration) {
        Object.assign(this, properties)
    }
}

export class ButtonConfig {
    Android?: OverrideButtonConfiguration
    DefaultConfig?: DefaultButtonConfiguration
    IOS?: OverrideButtonConfiguration
    Web?: OverrideButtonConfiguration

    constructor(properties: ButtonConfig) {
        Object.assign(this, properties)
    }
}

export class InAppMessageContent {
    BackgroundColor?: Value<string>
    BodyConfig?: BodyConfig
    HeaderConfig?: HeaderConfig
    ImageUrl?: Value<string>
    PrimaryBtn?: ButtonConfig
    SecondaryBtn?: ButtonConfig

    constructor(properties: InAppMessageContent) {
        Object.assign(this, properties)
    }
}

export class BodyConfig {
    Alignment?: Value<string>
    Body?: Value<string>
    TextColor?: Value<string>

    constructor(properties: BodyConfig) {
        Object.assign(this, properties)
    }
}

export class HeaderConfig {
    Alignment?: Value<string>
    Header?: Value<string>
    TextColor?: Value<string>

    constructor(properties: HeaderConfig) {
        Object.assign(this, properties)
    }
}

export class OverrideButtonConfiguration {
    ButtonAction?: Value<string>
    Link?: Value<string>

    constructor(properties: OverrideButtonConfiguration) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Content?: List<InAppMessageContent>
    CustomConfig?: {[key: string]: any}
    Layout?: Value<string>
    Tags?: {[key: string]: any}
    TemplateDescription?: Value<string>
    TemplateName: Value<string>
}

class InAppTemplate extends ResourceBase<Properties> {
    static DefaultButtonConfiguration = DefaultButtonConfiguration
    static ButtonConfig = ButtonConfig
    static InAppMessageContent = InAppMessageContent
    static BodyConfig = BodyConfig
    static HeaderConfig = HeaderConfig
    static OverrideButtonConfiguration = OverrideButtonConfiguration

    constructor(properties: Properties) {
        super('AWS::Pinpoint::InAppTemplate', properties)
    }
}
export { InAppTemplate as R }
