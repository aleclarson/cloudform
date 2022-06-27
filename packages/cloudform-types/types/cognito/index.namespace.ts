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

import * as _0 from './userPoolRiskConfigurationAttachment'
import * as _1 from './userPoolIdentityProvider'
import * as _2 from './identityPool'
import * as _3 from './userPool'
import * as _4 from './userPoolUserToGroupAttachment'
import * as _5 from './userPoolUser'
import * as _6 from './userPoolUiCustomizationAttachment'
import * as _7 from './userPoolGroup'
import * as _8 from './userPoolResourceServer'
import * as _9 from './userPoolClient'
import * as _a from './identityPoolRoleAttachment'
import * as _b from './userPoolDomain'

export namespace Cognito {
  export const UserPoolRiskConfigurationAttachment = _0.R
  export const UserPoolIdentityProvider = _1.R
  export const IdentityPool = _2.R
  export const UserPool = _3.R
  export const UserPoolUserToGroupAttachment = _4.R
  export const UserPoolUser = _5.R
  export const UserPoolUICustomizationAttachment = _6.R
  export const UserPoolGroup = _7.R
  export const UserPoolResourceServer = _8.R
  export const UserPoolClient = _9.R
  export const IdentityPoolRoleAttachment = _a.R
  export const UserPoolDomain = _b.R

  export type UserPoolRiskConfigurationAttachment = _0.R
  export type UserPoolIdentityProvider = _1.R
  export type IdentityPool = _2.R
  export type UserPool = _3.R
  export type UserPoolUserToGroupAttachment = _4.R
  export type UserPoolUser = _5.R
  export type UserPoolUICustomizationAttachment = _6.R
  export type UserPoolGroup = _7.R
  export type UserPoolResourceServer = _8.R
  export type UserPoolClient = _9.R
  export type IdentityPoolRoleAttachment = _a.R
  export type UserPoolDomain = _b.R

  export namespace UserPoolRiskConfigurationAttachment {
    export type AccountTakeoverActionsType = _0.AccountTakeoverActionsType
    export type RiskExceptionConfigurationType = _0.RiskExceptionConfigurationType
    export type AccountTakeoverActionType = _0.AccountTakeoverActionType
    export type CompromisedCredentialsRiskConfigurationType = _0.CompromisedCredentialsRiskConfigurationType
    export type NotifyEmailType = _0.NotifyEmailType
    export type CompromisedCredentialsActionsType = _0.CompromisedCredentialsActionsType
    export type NotifyConfigurationType = _0.NotifyConfigurationType
    export type AccountTakeoverRiskConfigurationType = _0.AccountTakeoverRiskConfigurationType
  }
  export namespace IdentityPool {
    export type CognitoStreams = _2.CognitoStreams
    export type PushSync = _2.PushSync
    export type CognitoIdentityProvider = _2.CognitoIdentityProvider
  }
  export namespace UserPool {
    export type PasswordPolicy = _3.PasswordPolicy
    export type RecoveryOption = _3.RecoveryOption
    export type AdminCreateUserConfig = _3.AdminCreateUserConfig
    export type SmsConfiguration = _3.SmsConfiguration
    export type StringAttributeConstraints = _3.StringAttributeConstraints
    export type VerificationMessageTemplate = _3.VerificationMessageTemplate
    export type LambdaConfig = _3.LambdaConfig
    export type InviteMessageTemplate = _3.InviteMessageTemplate
    export type UserAttributeUpdateSettings = _3.UserAttributeUpdateSettings
    export type EmailConfiguration = _3.EmailConfiguration
    export type SchemaAttribute = _3.SchemaAttribute
    export type NumberAttributeConstraints = _3.NumberAttributeConstraints
    export type CustomSMSSender = _3.CustomSMSSender
    export type AccountRecoverySetting = _3.AccountRecoverySetting
    export type UserPoolAddOns = _3.UserPoolAddOns
    export type Policies = _3.Policies
    export type CustomEmailSender = _3.CustomEmailSender
    export type DeviceConfiguration = _3.DeviceConfiguration
    export type UsernameConfiguration = _3.UsernameConfiguration
  }
  export namespace UserPoolUser {
    export type AttributeType = _5.AttributeType
  }
  export namespace UserPoolResourceServer {
    export type ResourceServerScopeType = _8.ResourceServerScopeType
  }
  export namespace UserPoolClient {
    export type TokenValidityUnits = _9.TokenValidityUnits
    export type AnalyticsConfiguration = _9.AnalyticsConfiguration
  }
  export namespace IdentityPoolRoleAttachment {
    export type RoleMapping = _a.RoleMapping
    export type MappingRule = _a.MappingRule
    export type RulesConfigurationType = _a.RulesConfigurationType
  }
  export namespace UserPoolDomain {
    export type CustomDomainConfigType = _b.CustomDomainConfigType
  }
}
