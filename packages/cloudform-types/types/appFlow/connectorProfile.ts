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

export class InforNexusConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: InforNexusConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class DynatraceConnectorProfileCredentials {
    ApiToken!: Value<string>

    constructor(properties: DynatraceConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class MarketoConnectorProfileCredentials {
    ClientId!: Value<string>
    ClientSecret!: Value<string>
    AccessToken?: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: MarketoConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class RedshiftConnectorProfileCredentials {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: RedshiftConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class ZendeskConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: ZendeskConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class GoogleAnalyticsConnectorProfileCredentials {
    ClientId!: Value<string>
    ClientSecret!: Value<string>
    AccessToken?: Value<string>
    RefreshToken?: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: GoogleAnalyticsConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class DynatraceConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: DynatraceConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class SalesforceConnectorProfileCredentials {
    AccessToken?: Value<string>
    RefreshToken?: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest
    ClientCredentialsArn?: Value<string>

    constructor(properties: SalesforceConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class RedshiftConnectorProfileProperties {
    DatabaseUrl!: Value<string>
    BucketName!: Value<string>
    BucketPrefix?: Value<string>
    RoleArn!: Value<string>

    constructor(properties: RedshiftConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class ConnectorProfileCredentials {
    Amplitude?: AmplitudeConnectorProfileCredentials
    Datadog?: DatadogConnectorProfileCredentials
    Dynatrace?: DynatraceConnectorProfileCredentials
    GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials
    InforNexus?: InforNexusConnectorProfileCredentials
    Marketo?: MarketoConnectorProfileCredentials
    Redshift?: RedshiftConnectorProfileCredentials
    SAPOData?: SAPODataConnectorProfileCredentials
    Salesforce?: SalesforceConnectorProfileCredentials
    ServiceNow?: ServiceNowConnectorProfileCredentials
    Singular?: SingularConnectorProfileCredentials
    Slack?: SlackConnectorProfileCredentials
    Snowflake?: SnowflakeConnectorProfileCredentials
    Trendmicro?: TrendmicroConnectorProfileCredentials
    Veeva?: VeevaConnectorProfileCredentials
    Zendesk?: ZendeskConnectorProfileCredentials
    CustomConnector?: CustomConnectorProfileCredentials

    constructor(properties: ConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SingularConnectorProfileCredentials {
    ApiKey!: Value<string>

    constructor(properties: SingularConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class ServiceNowConnectorProfileCredentials {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: ServiceNowConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SAPODataConnectorProfileCredentials {
    BasicAuthCredentials?: BasicAuthCredentials
    OAuthCredentials?: {[key: string]: any}

    constructor(properties: SAPODataConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SnowflakeConnectorProfileCredentials {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: SnowflakeConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SAPODataConnectorProfileProperties {
    ApplicationHostUrl?: Value<string>
    ApplicationServicePath?: Value<string>
    PortNumber?: Value<number>
    ClientNumber?: Value<string>
    LogonLanguage?: Value<string>
    PrivateLinkServiceName?: Value<string>
    OAuthProperties?: OAuthProperties

    constructor(properties: SAPODataConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class ZendeskConnectorProfileCredentials {
    ClientId!: Value<string>
    ClientSecret!: Value<string>
    AccessToken?: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: ZendeskConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class OAuthProperties {
    AuthCodeUrl?: Value<string>
    TokenUrl?: Value<string>
    OAuthScopes?: List<Value<string>>

    constructor(properties: OAuthProperties) {
        Object.assign(this, properties)
    }
}

export class SnowflakeConnectorProfileProperties {
    Warehouse!: Value<string>
    Stage!: Value<string>
    BucketName!: Value<string>
    BucketPrefix?: Value<string>
    PrivateLinkServiceName?: Value<string>
    AccountName?: Value<string>
    Region?: Value<string>

    constructor(properties: SnowflakeConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class SalesforceConnectorProfileProperties {
    InstanceUrl?: Value<string>
    isSandboxEnvironment?: Value<boolean>

    constructor(properties: SalesforceConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class ConnectorProfileConfig {
    ConnectorProfileProperties?: ConnectorProfileProperties
    ConnectorProfileCredentials!: ConnectorProfileCredentials

    constructor(properties: ConnectorProfileConfig) {
        Object.assign(this, properties)
    }
}

export class AmplitudeConnectorProfileCredentials {
    ApiKey!: Value<string>
    SecretKey!: Value<string>

    constructor(properties: AmplitudeConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class ConnectorOAuthRequest {
    AuthCode?: Value<string>
    RedirectUri?: Value<string>

    constructor(properties: ConnectorOAuthRequest) {
        Object.assign(this, properties)
    }
}

export class DatadogConnectorProfileCredentials {
    ApiKey!: Value<string>
    ApplicationKey!: Value<string>

    constructor(properties: DatadogConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SlackConnectorProfileCredentials {
    ClientId!: Value<string>
    ClientSecret!: Value<string>
    AccessToken?: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: SlackConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class TrendmicroConnectorProfileCredentials {
    ApiSecretKey!: Value<string>

    constructor(properties: TrendmicroConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class VeevaConnectorProfileCredentials {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: VeevaConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class VeevaConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: VeevaConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class SlackConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: SlackConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class MarketoConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: MarketoConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class InforNexusConnectorProfileCredentials {
    AccessKeyId!: Value<string>
    UserId!: Value<string>
    SecretAccessKey!: Value<string>
    Datakey!: Value<string>

    constructor(properties: InforNexusConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class DatadogConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: DatadogConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class ServiceNowConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: ServiceNowConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class ConnectorProfileProperties {
    Datadog?: DatadogConnectorProfileProperties
    Dynatrace?: DynatraceConnectorProfileProperties
    InforNexus?: InforNexusConnectorProfileProperties
    Marketo?: MarketoConnectorProfileProperties
    Redshift?: RedshiftConnectorProfileProperties
    SAPOData?: SAPODataConnectorProfileProperties
    Salesforce?: SalesforceConnectorProfileProperties
    ServiceNow?: ServiceNowConnectorProfileProperties
    Slack?: SlackConnectorProfileProperties
    Snowflake?: SnowflakeConnectorProfileProperties
    Veeva?: VeevaConnectorProfileProperties
    Zendesk?: ZendeskConnectorProfileProperties
    CustomConnector?: CustomConnectorProfileProperties

    constructor(properties: ConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export type CredentialsMap = {[key: string]: any}

export type ProfileProperties = {[key: string]: any}

export class BasicAuthCredentials {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: BasicAuthCredentials) {
        Object.assign(this, properties)
    }
}

export type TokenUrlCustomProperties = {[key: string]: any}

export class CustomConnectorProfileCredentials {
    AuthenticationType!: Value<string>
    Basic?: BasicAuthCredentials
    Oauth2?: OAuth2Credentials
    ApiKey?: ApiKeyCredentials
    Custom?: CustomAuthCredentials

    constructor(properties: CustomConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class CustomConnectorProfileProperties {
    ProfileProperties?: ProfileProperties
    OAuth2Properties?: OAuth2Properties

    constructor(properties: CustomConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class OAuth2Credentials {
    ClientId?: Value<string>
    ClientSecret?: Value<string>
    AccessToken?: Value<string>
    RefreshToken?: Value<string>
    OAuthRequest?: ConnectorOAuthRequest

    constructor(properties: OAuth2Credentials) {
        Object.assign(this, properties)
    }
}

export class CustomAuthCredentials {
    CustomAuthenticationType!: Value<string>
    CredentialsMap?: CredentialsMap

    constructor(properties: CustomAuthCredentials) {
        Object.assign(this, properties)
    }
}

export class ApiKeyCredentials {
    ApiKey!: Value<string>
    ApiSecretKey?: Value<string>

    constructor(properties: ApiKeyCredentials) {
        Object.assign(this, properties)
    }
}

export class OAuth2Properties {
    TokenUrl?: Value<string>
    OAuth2GrantType?: Value<string>
    TokenUrlCustomProperties?: TokenUrlCustomProperties

    constructor(properties: OAuth2Properties) {
        Object.assign(this, properties)
    }
}

export interface ConnectorProfileProperties {
    ConnectorProfileName: Value<string>
    KMSArn?: Value<string>
    ConnectorType: Value<string>
    ConnectionMode: Value<string>
    ConnectorProfileConfig?: ConnectorProfileConfig
    ConnectorLabel?: Value<string>
}

export default class ConnectorProfile extends ResourceBase<ConnectorProfileProperties> {
    static InforNexusConnectorProfileProperties = InforNexusConnectorProfileProperties
    static DynatraceConnectorProfileCredentials = DynatraceConnectorProfileCredentials
    static MarketoConnectorProfileCredentials = MarketoConnectorProfileCredentials
    static RedshiftConnectorProfileCredentials = RedshiftConnectorProfileCredentials
    static ZendeskConnectorProfileProperties = ZendeskConnectorProfileProperties
    static GoogleAnalyticsConnectorProfileCredentials = GoogleAnalyticsConnectorProfileCredentials
    static DynatraceConnectorProfileProperties = DynatraceConnectorProfileProperties
    static SalesforceConnectorProfileCredentials = SalesforceConnectorProfileCredentials
    static RedshiftConnectorProfileProperties = RedshiftConnectorProfileProperties
    static ConnectorProfileCredentials = ConnectorProfileCredentials
    static SingularConnectorProfileCredentials = SingularConnectorProfileCredentials
    static ServiceNowConnectorProfileCredentials = ServiceNowConnectorProfileCredentials
    static SAPODataConnectorProfileCredentials = SAPODataConnectorProfileCredentials
    static SnowflakeConnectorProfileCredentials = SnowflakeConnectorProfileCredentials
    static SAPODataConnectorProfileProperties = SAPODataConnectorProfileProperties
    static ZendeskConnectorProfileCredentials = ZendeskConnectorProfileCredentials
    static OAuthProperties = OAuthProperties
    static SnowflakeConnectorProfileProperties = SnowflakeConnectorProfileProperties
    static SalesforceConnectorProfileProperties = SalesforceConnectorProfileProperties
    static ConnectorProfileConfig = ConnectorProfileConfig
    static AmplitudeConnectorProfileCredentials = AmplitudeConnectorProfileCredentials
    static ConnectorOAuthRequest = ConnectorOAuthRequest
    static DatadogConnectorProfileCredentials = DatadogConnectorProfileCredentials
    static SlackConnectorProfileCredentials = SlackConnectorProfileCredentials
    static TrendmicroConnectorProfileCredentials = TrendmicroConnectorProfileCredentials
    static VeevaConnectorProfileCredentials = VeevaConnectorProfileCredentials
    static VeevaConnectorProfileProperties = VeevaConnectorProfileProperties
    static SlackConnectorProfileProperties = SlackConnectorProfileProperties
    static MarketoConnectorProfileProperties = MarketoConnectorProfileProperties
    static InforNexusConnectorProfileCredentials = InforNexusConnectorProfileCredentials
    static DatadogConnectorProfileProperties = DatadogConnectorProfileProperties
    static ServiceNowConnectorProfileProperties = ServiceNowConnectorProfileProperties
    static ConnectorProfileProperties = ConnectorProfileProperties
    static BasicAuthCredentials = BasicAuthCredentials
    static CustomConnectorProfileCredentials = CustomConnectorProfileCredentials
    static CustomConnectorProfileProperties = CustomConnectorProfileProperties
    static OAuth2Credentials = OAuth2Credentials
    static CustomAuthCredentials = CustomAuthCredentials
    static ApiKeyCredentials = ApiKeyCredentials
    static OAuth2Properties = OAuth2Properties

    constructor(properties: ConnectorProfileProperties) {
        super('AWS::AppFlow::ConnectorProfile', properties)
    }
}
