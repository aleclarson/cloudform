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

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class JsonMatchPattern {
    All?: {[key: string]: any}
    IncludedPaths?: List<Value<string>>

    constructor(properties: JsonMatchPattern) {
        Object.assign(this, properties)
    }
}

export class XssMatchStatement {
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>

    constructor(properties: XssMatchStatement) {
        Object.assign(this, properties)
    }
}

export class LabelMatchStatement {
    Scope!: Value<string>
    Key!: Value<string>

    constructor(properties: LabelMatchStatement) {
        Object.assign(this, properties)
    }
}

export class RuleAction {
    Allow?: {[key: string]: any}
    Block?: {[key: string]: any}
    Count?: {[key: string]: any}
    Captcha?: {[key: string]: any}

    constructor(properties: RuleAction) {
        Object.assign(this, properties)
    }
}

export class Statement {
    ByteMatchStatement?: ByteMatchStatement
    SqliMatchStatement?: SqliMatchStatement
    XssMatchStatement?: XssMatchStatement
    SizeConstraintStatement?: SizeConstraintStatement
    GeoMatchStatement?: GeoMatchStatement
    IPSetReferenceStatement?: IPSetReferenceStatement
    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
    RateBasedStatement?: RateBasedStatement
    AndStatement?: AndStatement
    OrStatement?: OrStatement
    NotStatement?: NotStatement
    LabelMatchStatement?: LabelMatchStatement
    RegexMatchStatement?: RegexMatchStatement

    constructor(properties: Statement) {
        Object.assign(this, properties)
    }
}

export class LabelSummary {
    Name?: Value<string>

    constructor(properties: LabelSummary) {
        Object.assign(this, properties)
    }
}

export class FieldToMatch {
    SingleHeader?: {[key: string]: any}
    SingleQueryArgument?: {[key: string]: any}
    AllQueryArguments?: {[key: string]: any}
    UriPath?: {[key: string]: any}
    QueryString?: {[key: string]: any}
    Body?: Body
    Method?: {[key: string]: any}
    JsonBody?: JsonBody
    Headers?: Headers
    Cookies?: Cookies

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export class IPSetReferenceStatement {
    Arn!: Value<string>
    IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration

    constructor(properties: IPSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class CaptchaConfig {
    ImmunityTimeProperty?: ImmunityTimeProperty

    constructor(properties: CaptchaConfig) {
        Object.assign(this, properties)
    }
}

export class RateBasedStatement {
    Limit!: Value<number>
    AggregateKeyType!: Value<string>
    ScopeDownStatement?: Statement
    ForwardedIPConfig?: ForwardedIPConfiguration

    constructor(properties: RateBasedStatement) {
        Object.assign(this, properties)
    }
}

export class HeaderMatchPattern {
    All?: {[key: string]: any}
    IncludedHeaders?: List<Value<string>>
    ExcludedHeaders?: List<Value<string>>

    constructor(properties: HeaderMatchPattern) {
        Object.assign(this, properties)
    }
}

export class ImmunityTimeProperty {
    ImmunityTime!: Value<number>

    constructor(properties: ImmunityTimeProperty) {
        Object.assign(this, properties)
    }
}

export class VisibilityConfig {
    SampledRequestsEnabled!: Value<boolean>
    CloudWatchMetricsEnabled!: Value<boolean>
    MetricName!: Value<string>

    constructor(properties: VisibilityConfig) {
        Object.assign(this, properties)
    }
}

export class GeoMatchStatement {
    CountryCodes?: List<Value<string>>
    ForwardedIPConfig?: ForwardedIPConfiguration

    constructor(properties: GeoMatchStatement) {
        Object.assign(this, properties)
    }
}

export class AndStatement {
    Statements!: List<Statement>

    constructor(properties: AndStatement) {
        Object.assign(this, properties)
    }
}

export class IPSetForwardedIPConfiguration {
    HeaderName!: Value<string>
    FallbackBehavior!: Value<string>
    Position!: Value<string>

    constructor(properties: IPSetForwardedIPConfiguration) {
        Object.assign(this, properties)
    }
}

export class RegexMatchStatement {
    RegexString!: Value<string>
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>

    constructor(properties: RegexMatchStatement) {
        Object.assign(this, properties)
    }
}

export class TextTransformation {
    Priority!: Value<number>
    Type!: Value<string>

    constructor(properties: TextTransformation) {
        Object.assign(this, properties)
    }
}

export class Body {
    OversizeHandling?: Value<string>

    constructor(properties: Body) {
        Object.assign(this, properties)
    }
}

export class ByteMatchStatement {
    SearchString?: Value<string>
    SearchStringBase64?: Value<string>
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>
    PositionalConstraint!: Value<string>

    constructor(properties: ByteMatchStatement) {
        Object.assign(this, properties)
    }
}

export class RegexPatternSetReferenceStatement {
    Arn!: Value<string>
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>

    constructor(properties: RegexPatternSetReferenceStatement) {
        Object.assign(this, properties)
    }
}

export class CookieMatchPattern {
    All?: {[key: string]: any}
    IncludedCookies?: List<Value<string>>
    ExcludedCookies?: List<Value<string>>

    constructor(properties: CookieMatchPattern) {
        Object.assign(this, properties)
    }
}

export class OrStatement {
    Statements!: List<Statement>

    constructor(properties: OrStatement) {
        Object.assign(this, properties)
    }
}

export class Headers {
    MatchPattern!: HeaderMatchPattern
    MatchScope!: Value<string>
    OversizeHandling!: Value<string>

    constructor(properties: Headers) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Name!: Value<string>
    Priority!: Value<number>
    Statement!: Statement
    Action?: RuleAction
    RuleLabels?: List<Label>
    VisibilityConfig!: VisibilityConfig
    CaptchaConfig?: CaptchaConfig

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class JsonBody {
    MatchPattern!: JsonMatchPattern
    MatchScope!: Value<string>
    InvalidFallbackBehavior?: Value<string>
    OversizeHandling?: Value<string>

    constructor(properties: JsonBody) {
        Object.assign(this, properties)
    }
}

export class CustomResponseBody {
    ContentType!: Value<string>
    Content!: Value<string>

    constructor(properties: CustomResponseBody) {
        Object.assign(this, properties)
    }
}

export class Label {
    Name!: Value<string>

    constructor(properties: Label) {
        Object.assign(this, properties)
    }
}

export class Cookies {
    MatchPattern!: CookieMatchPattern
    MatchScope!: Value<string>
    OversizeHandling!: Value<string>

    constructor(properties: Cookies) {
        Object.assign(this, properties)
    }
}

export class SqliMatchStatement {
    FieldToMatch!: FieldToMatch
    TextTransformations!: List<TextTransformation>

    constructor(properties: SqliMatchStatement) {
        Object.assign(this, properties)
    }
}

export class NotStatement {
    Statement!: Statement

    constructor(properties: NotStatement) {
        Object.assign(this, properties)
    }
}

export class ForwardedIPConfiguration {
    HeaderName!: Value<string>
    FallbackBehavior!: Value<string>

    constructor(properties: ForwardedIPConfiguration) {
        Object.assign(this, properties)
    }
}

export class SizeConstraintStatement {
    FieldToMatch!: FieldToMatch
    ComparisonOperator!: Value<string>
    Size!: Value<number>
    TextTransformations!: List<TextTransformation>

    constructor(properties: SizeConstraintStatement) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Capacity: Value<number>
    Description?: Value<string>
    Name?: Value<string>
    Scope: Value<string>
    Rules?: List<Rule>
    VisibilityConfig: VisibilityConfig
    Tags?: List<ResourceTag>
    CustomResponseBodies?: {[key: string]: CustomResponseBody}
}

class RuleGroup extends ResourceBase<Properties> {
    static JsonMatchPattern = JsonMatchPattern
    static XssMatchStatement = XssMatchStatement
    static LabelMatchStatement = LabelMatchStatement
    static RuleAction = RuleAction
    static Statement = Statement
    static LabelSummary = LabelSummary
    static FieldToMatch = FieldToMatch
    static IPSetReferenceStatement = IPSetReferenceStatement
    static CaptchaConfig = CaptchaConfig
    static RateBasedStatement = RateBasedStatement
    static HeaderMatchPattern = HeaderMatchPattern
    static ImmunityTimeProperty = ImmunityTimeProperty
    static VisibilityConfig = VisibilityConfig
    static GeoMatchStatement = GeoMatchStatement
    static AndStatement = AndStatement
    static IPSetForwardedIPConfiguration = IPSetForwardedIPConfiguration
    static RegexMatchStatement = RegexMatchStatement
    static TextTransformation = TextTransformation
    static Body = Body
    static ByteMatchStatement = ByteMatchStatement
    static RegexPatternSetReferenceStatement = RegexPatternSetReferenceStatement
    static CookieMatchPattern = CookieMatchPattern
    static OrStatement = OrStatement
    static Headers = Headers
    static Rule = Rule
    static JsonBody = JsonBody
    static CustomResponseBody = CustomResponseBody
    static Label = Label
    static Cookies = Cookies
    static SqliMatchStatement = SqliMatchStatement
    static NotStatement = NotStatement
    static ForwardedIPConfiguration = ForwardedIPConfiguration
    static SizeConstraintStatement = SizeConstraintStatement

    constructor(properties: Properties) {
        super('AWS::WAFv2::RuleGroup', properties)
    }
}
export { RuleGroup as R }
