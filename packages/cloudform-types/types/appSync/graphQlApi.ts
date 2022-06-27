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

export class LambdaAuthorizerConfig {
    IdentityValidationExpression?: Value<string>
    AuthorizerUri?: Value<string>
    AuthorizerResultTtlInSeconds?: Value<number>

    constructor(properties: LambdaAuthorizerConfig) {
        Object.assign(this, properties)
    }
}

export class OpenIDConnectConfig {
    Issuer?: Value<string>
    ClientId?: Value<string>
    AuthTTL?: Value<number>
    IatTTL?: Value<number>

    constructor(properties: OpenIDConnectConfig) {
        Object.assign(this, properties)
    }
}

export class CognitoUserPoolConfig {
    AppIdClientRegex?: Value<string>
    UserPoolId?: Value<string>
    AwsRegion?: Value<string>

    constructor(properties: CognitoUserPoolConfig) {
        Object.assign(this, properties)
    }
}

export class UserPoolConfig {
    AppIdClientRegex?: Value<string>
    UserPoolId?: Value<string>
    AwsRegion?: Value<string>
    DefaultAction?: Value<string>

    constructor(properties: UserPoolConfig) {
        Object.assign(this, properties)
    }
}

export class LogConfig {
    CloudWatchLogsRoleArn?: Value<string>
    ExcludeVerboseContent?: Value<boolean>
    FieldLogLevel?: Value<string>

    constructor(properties: LogConfig) {
        Object.assign(this, properties)
    }
}

export class AdditionalAuthenticationProvider {
    OpenIDConnectConfig?: OpenIDConnectConfig
    LambdaAuthorizerConfig?: LambdaAuthorizerConfig
    UserPoolConfig?: CognitoUserPoolConfig
    AuthenticationType!: Value<string>

    constructor(properties: AdditionalAuthenticationProvider) {
        Object.assign(this, properties)
    }
}

export type Tags = List<ResourceTag>

export type AdditionalAuthenticationProviders = List<AdditionalAuthenticationProvider>

export interface Properties {
    OpenIDConnectConfig?: OpenIDConnectConfig
    LambdaAuthorizerConfig?: LambdaAuthorizerConfig
    XrayEnabled?: Value<boolean>
    UserPoolConfig?: UserPoolConfig
    Tags?: List<ResourceTag>
    Name: Value<string>
    AuthenticationType: Value<string>
    LogConfig?: LogConfig
    AdditionalAuthenticationProviders?: List<AdditionalAuthenticationProvider>
}

class GraphQLApi extends ResourceBase<Properties> {
    static LambdaAuthorizerConfig = LambdaAuthorizerConfig
    static OpenIDConnectConfig = OpenIDConnectConfig
    static CognitoUserPoolConfig = CognitoUserPoolConfig
    static UserPoolConfig = UserPoolConfig
    static LogConfig = LogConfig
    static AdditionalAuthenticationProvider = AdditionalAuthenticationProvider

    constructor(properties: Properties) {
        super('AWS::AppSync::GraphQLApi', properties)
    }
}
export { GraphQLApi as R }
