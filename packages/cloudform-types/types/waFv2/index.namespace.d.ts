import*as _0 from'./loggingConfiguration';import*as _1 from'./regexPatternSet';import*as _2 from'./ipSet';import*as _3 from'./webAclAssociation';import*as _4 from'./webAcl';import*as _5 from'./ruleGroup';export declare namespace WAFv2{const LoggingConfiguration:typeof _0.R;const RegexPatternSet:typeof _1.R;const IPSet:typeof _2.R;const WebACLAssociation:typeof _3.R;const WebACL:typeof _4.R;const RuleGroup:typeof _5.R;type LoggingConfiguration=_0.R;type RegexPatternSet=_1.R;type IPSet=_2.R;type WebACLAssociation=_3.R;type WebACL=_4.R;type RuleGroup=_5.R;namespace LoggingConfiguration{type FieldToMatch=_0.FieldToMatch;}namespace WebACL{type CustomRequestHandling=_4.CustomRequestHandling;type ManagedRuleGroupStatement=_4.ManagedRuleGroupStatement;type FieldIdentifier=_4.FieldIdentifier;type TextTransformation=_4.TextTransformation;type AllowAction=_4.AllowAction;type DefaultAction=_4.DefaultAction;type XssMatchStatement=_4.XssMatchStatement;type ByteMatchStatement=_4.ByteMatchStatement;type ForwardedIPConfiguration=_4.ForwardedIPConfiguration;type OrStatement=_4.OrStatement;type Label=_4.Label;type CookieMatchPattern=_4.CookieMatchPattern;type CustomHTTPHeader=_4.CustomHTTPHeader;type RegexPatternSetReferenceStatement=_4.RegexPatternSetReferenceStatement;type IPSetForwardedIPConfiguration=_4.IPSetForwardedIPConfiguration;type CustomResponseBody=_4.CustomResponseBody;type Statement=_4.Statement;type ImmunityTimeProperty=_4.ImmunityTimeProperty;type BlockAction=_4.BlockAction;type RuleGroupReferenceStatement=_4.RuleGroupReferenceStatement;type LabelMatchStatement=_4.LabelMatchStatement;type JsonMatchPattern=_4.JsonMatchPattern;type AndStatement=_4.AndStatement;type CountAction=_4.CountAction;type CaptchaConfig=_4.CaptchaConfig;type SizeConstraintStatement=_4.SizeConstraintStatement;type FieldToMatch=_4.FieldToMatch;type SqliMatchStatement=_4.SqliMatchStatement;type ManagedRuleGroupConfig=_4.ManagedRuleGroupConfig;type GeoMatchStatement=_4.GeoMatchStatement;type RuleAction=_4.RuleAction;type JsonBody=_4.JsonBody;type Body=_4.Body;type NotStatement=_4.NotStatement;type OverrideAction=_4.OverrideAction;type RegexMatchStatement=_4.RegexMatchStatement;type Headers=_4.Headers;type Rule=_4.Rule;type CustomResponse=_4.CustomResponse;type RateBasedStatement=_4.RateBasedStatement;type HeaderMatchPattern=_4.HeaderMatchPattern;type ExcludedRule=_4.ExcludedRule;type VisibilityConfig=_4.VisibilityConfig;type IPSetReferenceStatement=_4.IPSetReferenceStatement;type CaptchaAction=_4.CaptchaAction;type Cookies=_4.Cookies;}namespace RuleGroup{type JsonMatchPattern=_5.JsonMatchPattern;type XssMatchStatement=_5.XssMatchStatement;type LabelMatchStatement=_5.LabelMatchStatement;type RuleAction=_5.RuleAction;type Statement=_5.Statement;type LabelSummary=_5.LabelSummary;type FieldToMatch=_5.FieldToMatch;type IPSetReferenceStatement=_5.IPSetReferenceStatement;type CaptchaConfig=_5.CaptchaConfig;type RateBasedStatement=_5.RateBasedStatement;type HeaderMatchPattern=_5.HeaderMatchPattern;type ImmunityTimeProperty=_5.ImmunityTimeProperty;type VisibilityConfig=_5.VisibilityConfig;type GeoMatchStatement=_5.GeoMatchStatement;type AndStatement=_5.AndStatement;type IPSetForwardedIPConfiguration=_5.IPSetForwardedIPConfiguration;type RegexMatchStatement=_5.RegexMatchStatement;type TextTransformation=_5.TextTransformation;type Body=_5.Body;type ByteMatchStatement=_5.ByteMatchStatement;type RegexPatternSetReferenceStatement=_5.RegexPatternSetReferenceStatement;type CookieMatchPattern=_5.CookieMatchPattern;type OrStatement=_5.OrStatement;type Headers=_5.Headers;type Rule=_5.Rule;type JsonBody=_5.JsonBody;type CustomResponseBody=_5.CustomResponseBody;type Label=_5.Label;type Cookies=_5.Cookies;type SqliMatchStatement=_5.SqliMatchStatement;type NotStatement=_5.NotStatement;type ForwardedIPConfiguration=_5.ForwardedIPConfiguration;type SizeConstraintStatement=_5.SizeConstraintStatement;}}