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
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ConnectionHttpParameters {
    HeaderParameters?: List<Parameter>
    QueryStringParameters?: List<Parameter>
    BodyParameters?: List<Parameter>

    constructor(properties: ConnectionHttpParameters) {
        Object.assign(this, properties)
    }
}

export class ApiKeyAuthParameters {
    ApiKeyName!: Value<string>
    ApiKeyValue!: Value<string>

    constructor(properties: ApiKeyAuthParameters) {
        Object.assign(this, properties)
    }
}

export class AuthParameters {
    ApiKeyAuthParameters?: ApiKeyAuthParameters
    BasicAuthParameters?: BasicAuthParameters
    OAuthParameters?: OAuthParameters
    InvocationHttpParameters?: ConnectionHttpParameters

    constructor(properties: AuthParameters) {
        Object.assign(this, properties)
    }
}

export class BasicAuthParameters {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: BasicAuthParameters) {
        Object.assign(this, properties)
    }
}

export class Parameter {
    Key!: Value<string>
    Value!: Value<string>
    IsValueSecret?: Value<boolean>

    constructor(properties: Parameter) {
        Object.assign(this, properties)
    }
}

export class OAuthParameters {
    ClientParameters!: ClientParameters
    AuthorizationEndpoint!: Value<string>
    HttpMethod!: Value<string>
    OAuthHttpParameters?: ConnectionHttpParameters

    constructor(properties: OAuthParameters) {
        Object.assign(this, properties)
    }
}

export class ClientParameters {
    ClientID!: Value<string>
    ClientSecret!: Value<string>

    constructor(properties: ClientParameters) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name?: Value<string>
    Description?: Value<string>
    AuthorizationType: Value<string>
    AuthParameters: AuthParameters
}

class Connection extends ResourceBase<Properties> {
    static ConnectionHttpParameters = ConnectionHttpParameters
    static ApiKeyAuthParameters = ApiKeyAuthParameters
    static AuthParameters = AuthParameters
    static BasicAuthParameters = BasicAuthParameters
    static Parameter = Parameter
    static OAuthParameters = OAuthParameters
    static ClientParameters = ClientParameters

    constructor(properties: Properties) {
        super('AWS::Events::Connection', properties)
    }
}
export { Connection as R }
