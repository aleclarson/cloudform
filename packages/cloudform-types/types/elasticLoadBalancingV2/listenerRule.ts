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

export class SourceIpConfig {
    Values?: List<Value<string>>

    constructor(properties: SourceIpConfig) {
        Object.assign(this, properties)
    }
}

export class AuthenticateOidcConfig {
    OnUnauthenticatedRequest?: Value<string>
    TokenEndpoint!: Value<string>
    SessionTimeout?: Value<number>
    Scope?: Value<string>
    Issuer!: Value<string>
    ClientSecret?: Value<string>
    UserInfoEndpoint!: Value<string>
    ClientId!: Value<string>
    AuthorizationEndpoint!: Value<string>
    SessionCookieName?: Value<string>
    UseExistingClientSecret?: Value<boolean>
    AuthenticationRequestExtraParams?: {[key: string]: Value<string>}

    constructor(properties: AuthenticateOidcConfig) {
        Object.assign(this, properties)
    }
}

export class AuthenticateCognitoConfig {
    OnUnauthenticatedRequest?: Value<string>
    UserPoolClientId!: Value<string>
    UserPoolDomain!: Value<string>
    SessionTimeout?: Value<number>
    Scope?: Value<string>
    SessionCookieName?: Value<string>
    UserPoolArn!: Value<string>
    AuthenticationRequestExtraParams?: {[key: string]: Value<string>}

    constructor(properties: AuthenticateCognitoConfig) {
        Object.assign(this, properties)
    }
}

export class QueryStringKeyValue {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: QueryStringKeyValue) {
        Object.assign(this, properties)
    }
}

export class QueryStringConfig {
    Values?: List<QueryStringKeyValue>

    constructor(properties: QueryStringConfig) {
        Object.assign(this, properties)
    }
}

export class PathPatternConfig {
    Values?: List<Value<string>>

    constructor(properties: PathPatternConfig) {
        Object.assign(this, properties)
    }
}

export class RuleCondition {
    Field?: Value<string>
    Values?: List<Value<string>>
    HttpRequestMethodConfig?: HttpRequestMethodConfig
    PathPatternConfig?: PathPatternConfig
    HttpHeaderConfig?: HttpHeaderConfig
    SourceIpConfig?: SourceIpConfig
    HostHeaderConfig?: HostHeaderConfig
    QueryStringConfig?: QueryStringConfig

    constructor(properties: RuleCondition) {
        Object.assign(this, properties)
    }
}

export class RedirectConfig {
    Path?: Value<string>
    Query?: Value<string>
    Port?: Value<string>
    Host?: Value<string>
    Protocol?: Value<string>
    StatusCode!: Value<string>

    constructor(properties: RedirectConfig) {
        Object.assign(this, properties)
    }
}

export class HostHeaderConfig {
    Values?: List<Value<string>>

    constructor(properties: HostHeaderConfig) {
        Object.assign(this, properties)
    }
}

export class FixedResponseConfig {
    ContentType?: Value<string>
    StatusCode!: Value<string>
    MessageBody?: Value<string>

    constructor(properties: FixedResponseConfig) {
        Object.assign(this, properties)
    }
}

export class Action {
    Order?: Value<number>
    TargetGroupArn?: Value<string>
    FixedResponseConfig?: FixedResponseConfig
    AuthenticateCognitoConfig?: AuthenticateCognitoConfig
    Type!: Value<string>
    RedirectConfig?: RedirectConfig
    ForwardConfig?: ForwardConfig
    AuthenticateOidcConfig?: AuthenticateOidcConfig

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class HttpHeaderConfig {
    Values?: List<Value<string>>
    HttpHeaderName?: Value<string>

    constructor(properties: HttpHeaderConfig) {
        Object.assign(this, properties)
    }
}

export class ForwardConfig {
    TargetGroupStickinessConfig?: TargetGroupStickinessConfig
    TargetGroups?: List<TargetGroupTuple>

    constructor(properties: ForwardConfig) {
        Object.assign(this, properties)
    }
}

export class TargetGroupTuple {
    TargetGroupArn?: Value<string>
    Weight?: Value<number>

    constructor(properties: TargetGroupTuple) {
        Object.assign(this, properties)
    }
}

export class HttpRequestMethodConfig {
    Values?: List<Value<string>>

    constructor(properties: HttpRequestMethodConfig) {
        Object.assign(this, properties)
    }
}

export class TargetGroupStickinessConfig {
    Enabled?: Value<boolean>
    DurationSeconds?: Value<number>

    constructor(properties: TargetGroupStickinessConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    ListenerArn: Value<string>
    Actions: List<Action>
    Priority: Value<number>
    Conditions: List<RuleCondition>
}

class ListenerRule extends ResourceBase<Properties> {
    static SourceIpConfig = SourceIpConfig
    static AuthenticateOidcConfig = AuthenticateOidcConfig
    static AuthenticateCognitoConfig = AuthenticateCognitoConfig
    static QueryStringKeyValue = QueryStringKeyValue
    static QueryStringConfig = QueryStringConfig
    static PathPatternConfig = PathPatternConfig
    static RuleCondition = RuleCondition
    static RedirectConfig = RedirectConfig
    static HostHeaderConfig = HostHeaderConfig
    static FixedResponseConfig = FixedResponseConfig
    static Action = Action
    static HttpHeaderConfig = HttpHeaderConfig
    static ForwardConfig = ForwardConfig
    static TargetGroupTuple = TargetGroupTuple
    static HttpRequestMethodConfig = HttpRequestMethodConfig
    static TargetGroupStickinessConfig = TargetGroupStickinessConfig

    constructor(properties: Properties) {
        super('AWS::ElasticLoadBalancingV2::ListenerRule', properties)
    }
}
export { ListenerRule as R }
