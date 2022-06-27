import*as _0 from'./userPoolRiskConfigurationAttachment';import*as _1 from'./userPoolIdentityProvider';import*as _2 from'./identityPool';import*as _3 from'./userPool';import*as _4 from'./userPoolUserToGroupAttachment';import*as _5 from'./userPoolUser';import*as _6 from'./userPoolUiCustomizationAttachment';import*as _7 from'./userPoolGroup';import*as _8 from'./userPoolResourceServer';import*as _9 from'./userPoolClient';import*as _a from'./identityPoolRoleAttachment';import*as _b from'./userPoolDomain';export declare namespace Cognito{const UserPoolRiskConfigurationAttachment:typeof _0.R;const UserPoolIdentityProvider:typeof _1.R;const IdentityPool:typeof _2.R;const UserPool:typeof _3.R;const UserPoolUserToGroupAttachment:typeof _4.R;const UserPoolUser:typeof _5.R;const UserPoolUICustomizationAttachment:typeof _6.R;const UserPoolGroup:typeof _7.R;const UserPoolResourceServer:typeof _8.R;const UserPoolClient:typeof _9.R;const IdentityPoolRoleAttachment:typeof _a.R;const UserPoolDomain:typeof _b.R;type UserPoolRiskConfigurationAttachment=_0.R;type UserPoolIdentityProvider=_1.R;type IdentityPool=_2.R;type UserPool=_3.R;type UserPoolUserToGroupAttachment=_4.R;type UserPoolUser=_5.R;type UserPoolUICustomizationAttachment=_6.R;type UserPoolGroup=_7.R;type UserPoolResourceServer=_8.R;type UserPoolClient=_9.R;type IdentityPoolRoleAttachment=_a.R;type UserPoolDomain=_b.R;namespace UserPoolRiskConfigurationAttachment{type AccountTakeoverActionsType=_0.AccountTakeoverActionsType;type RiskExceptionConfigurationType=_0.RiskExceptionConfigurationType;type AccountTakeoverActionType=_0.AccountTakeoverActionType;type CompromisedCredentialsRiskConfigurationType=_0.CompromisedCredentialsRiskConfigurationType;type NotifyEmailType=_0.NotifyEmailType;type CompromisedCredentialsActionsType=_0.CompromisedCredentialsActionsType;type NotifyConfigurationType=_0.NotifyConfigurationType;type AccountTakeoverRiskConfigurationType=_0.AccountTakeoverRiskConfigurationType;}namespace IdentityPool{type CognitoStreams=_2.CognitoStreams;type PushSync=_2.PushSync;type CognitoIdentityProvider=_2.CognitoIdentityProvider;}namespace UserPool{type PasswordPolicy=_3.PasswordPolicy;type RecoveryOption=_3.RecoveryOption;type AdminCreateUserConfig=_3.AdminCreateUserConfig;type SmsConfiguration=_3.SmsConfiguration;type StringAttributeConstraints=_3.StringAttributeConstraints;type VerificationMessageTemplate=_3.VerificationMessageTemplate;type LambdaConfig=_3.LambdaConfig;type InviteMessageTemplate=_3.InviteMessageTemplate;type UserAttributeUpdateSettings=_3.UserAttributeUpdateSettings;type EmailConfiguration=_3.EmailConfiguration;type SchemaAttribute=_3.SchemaAttribute;type NumberAttributeConstraints=_3.NumberAttributeConstraints;type CustomSMSSender=_3.CustomSMSSender;type AccountRecoverySetting=_3.AccountRecoverySetting;type UserPoolAddOns=_3.UserPoolAddOns;type Policies=_3.Policies;type CustomEmailSender=_3.CustomEmailSender;type DeviceConfiguration=_3.DeviceConfiguration;type UsernameConfiguration=_3.UsernameConfiguration;}namespace UserPoolUser{type AttributeType=_5.AttributeType;}namespace UserPoolResourceServer{type ResourceServerScopeType=_8.ResourceServerScopeType;}namespace UserPoolClient{type TokenValidityUnits=_9.TokenValidityUnits;type AnalyticsConfiguration=_9.AnalyticsConfiguration;}namespace IdentityPoolRoleAttachment{type RoleMapping=_a.RoleMapping;type MappingRule=_a.MappingRule;type RulesConfigurationType=_a.RulesConfigurationType;}namespace UserPoolDomain{type CustomDomainConfigType=_b.CustomDomainConfigType;}}