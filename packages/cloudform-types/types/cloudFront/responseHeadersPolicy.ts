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

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class XSSProtection {
    ModeBlock?: Value<boolean>
    Override!: Value<boolean>
    Protection!: Value<boolean>
    ReportUri?: Value<string>

    constructor(properties: XSSProtection) {
        Object.assign(this, properties)
    }
}

export class ResponseHeadersPolicyConfig {
    Comment?: Value<string>
    CorsConfig?: CorsConfig
    CustomHeadersConfig?: CustomHeadersConfig
    Name!: Value<string>
    SecurityHeadersConfig?: SecurityHeadersConfig

    constructor(properties: ResponseHeadersPolicyConfig) {
        Object.assign(this, properties)
    }
}

export class AccessControlExposeHeaders {
    Items!: List<Value<string>>

    constructor(properties: AccessControlExposeHeaders) {
        Object.assign(this, properties)
    }
}

export class CorsConfig {
    AccessControlAllowCredentials!: Value<boolean>
    AccessControlAllowHeaders!: AccessControlAllowHeaders
    AccessControlAllowMethods!: AccessControlAllowMethods
    AccessControlAllowOrigins!: AccessControlAllowOrigins
    AccessControlExposeHeaders?: AccessControlExposeHeaders
    AccessControlMaxAgeSec?: Value<number>
    OriginOverride!: Value<boolean>

    constructor(properties: CorsConfig) {
        Object.assign(this, properties)
    }
}

export class AccessControlAllowMethods {
    Items!: List<Value<string>>

    constructor(properties: AccessControlAllowMethods) {
        Object.assign(this, properties)
    }
}

export class ReferrerPolicy {
    Override!: Value<boolean>
    ReferrerPolicy!: Value<string>

    constructor(properties: ReferrerPolicy) {
        Object.assign(this, properties)
    }
}

export class AccessControlAllowHeaders {
    Items!: List<Value<string>>

    constructor(properties: AccessControlAllowHeaders) {
        Object.assign(this, properties)
    }
}

export class FrameOptions {
    FrameOption!: Value<string>
    Override!: Value<boolean>

    constructor(properties: FrameOptions) {
        Object.assign(this, properties)
    }
}

export class CustomHeader {
    Header!: Value<string>
    Override!: Value<boolean>
    Value!: Value<string>

    constructor(properties: CustomHeader) {
        Object.assign(this, properties)
    }
}

export class ContentSecurityPolicy {
    ContentSecurityPolicy!: Value<string>
    Override!: Value<boolean>

    constructor(properties: ContentSecurityPolicy) {
        Object.assign(this, properties)
    }
}

export class SecurityHeadersConfig {
    ContentSecurityPolicy?: ContentSecurityPolicy
    ContentTypeOptions?: ContentTypeOptions
    FrameOptions?: FrameOptions
    ReferrerPolicy?: ReferrerPolicy
    StrictTransportSecurity?: StrictTransportSecurity
    XSSProtection?: XSSProtection

    constructor(properties: SecurityHeadersConfig) {
        Object.assign(this, properties)
    }
}

export class StrictTransportSecurity {
    AccessControlMaxAgeSec!: Value<number>
    IncludeSubdomains?: Value<boolean>
    Override!: Value<boolean>
    Preload?: Value<boolean>

    constructor(properties: StrictTransportSecurity) {
        Object.assign(this, properties)
    }
}

export class AccessControlAllowOrigins {
    Items!: List<Value<string>>

    constructor(properties: AccessControlAllowOrigins) {
        Object.assign(this, properties)
    }
}

export class ContentTypeOptions {
    Override!: Value<boolean>

    constructor(properties: ContentTypeOptions) {
        Object.assign(this, properties)
    }
}

export class CustomHeadersConfig {
    Items!: List<CustomHeader>

    constructor(properties: CustomHeadersConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig
}

class ResponseHeadersPolicy extends ResourceBase<Properties> {
    static XSSProtection = XSSProtection
    static ResponseHeadersPolicyConfig = ResponseHeadersPolicyConfig
    static AccessControlExposeHeaders = AccessControlExposeHeaders
    static CorsConfig = CorsConfig
    static AccessControlAllowMethods = AccessControlAllowMethods
    static ReferrerPolicy = ReferrerPolicy
    static AccessControlAllowHeaders = AccessControlAllowHeaders
    static FrameOptions = FrameOptions
    static CustomHeader = CustomHeader
    static ContentSecurityPolicy = ContentSecurityPolicy
    static SecurityHeadersConfig = SecurityHeadersConfig
    static StrictTransportSecurity = StrictTransportSecurity
    static AccessControlAllowOrigins = AccessControlAllowOrigins
    static ContentTypeOptions = ContentTypeOptions
    static CustomHeadersConfig = CustomHeadersConfig

    constructor(properties: Properties) {
        super('AWS::CloudFront::ResponseHeadersPolicy', properties)
    }
}
export { ResponseHeadersPolicy as R }
