"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class SourceIpConfig{constructor(properties){Object.assign(this,properties)}}exports.SourceIpConfig=SourceIpConfig;class AuthenticateOidcConfig{constructor(properties){Object.assign(this,properties)}}exports.AuthenticateOidcConfig=AuthenticateOidcConfig;class AuthenticateCognitoConfig{constructor(properties){Object.assign(this,properties)}}exports.AuthenticateCognitoConfig=AuthenticateCognitoConfig;class QueryStringKeyValue{constructor(properties){Object.assign(this,properties)}}exports.QueryStringKeyValue=QueryStringKeyValue;class QueryStringConfig{constructor(properties){Object.assign(this,properties)}}exports.QueryStringConfig=QueryStringConfig;class PathPatternConfig{constructor(properties){Object.assign(this,properties)}}exports.PathPatternConfig=PathPatternConfig;class RuleCondition{constructor(properties){Object.assign(this,properties)}}exports.RuleCondition=RuleCondition;class RedirectConfig{constructor(properties){Object.assign(this,properties)}}exports.RedirectConfig=RedirectConfig;class HostHeaderConfig{constructor(properties){Object.assign(this,properties)}}exports.HostHeaderConfig=HostHeaderConfig;class FixedResponseConfig{constructor(properties){Object.assign(this,properties)}}exports.FixedResponseConfig=FixedResponseConfig;class Action{constructor(properties){Object.assign(this,properties)}}exports.Action=Action;class HttpHeaderConfig{constructor(properties){Object.assign(this,properties)}}exports.HttpHeaderConfig=HttpHeaderConfig;class ForwardConfig{constructor(properties){Object.assign(this,properties)}}exports.ForwardConfig=ForwardConfig;class TargetGroupTuple{constructor(properties){Object.assign(this,properties)}}exports.TargetGroupTuple=TargetGroupTuple;class HttpRequestMethodConfig{constructor(properties){Object.assign(this,properties)}}exports.HttpRequestMethodConfig=HttpRequestMethodConfig;class TargetGroupStickinessConfig{constructor(properties){Object.assign(this,properties)}}exports.TargetGroupStickinessConfig=TargetGroupStickinessConfig;class ListenerRule extends resource_1.ResourceBase{constructor(properties){super("AWS::ElasticLoadBalancingV2::ListenerRule",properties)}}(exports.default=ListenerRule).SourceIpConfig=SourceIpConfig,ListenerRule.AuthenticateOidcConfig=AuthenticateOidcConfig,ListenerRule.AuthenticateCognitoConfig=AuthenticateCognitoConfig,ListenerRule.QueryStringKeyValue=QueryStringKeyValue,ListenerRule.QueryStringConfig=QueryStringConfig,ListenerRule.PathPatternConfig=PathPatternConfig,ListenerRule.RuleCondition=RuleCondition,ListenerRule.RedirectConfig=RedirectConfig,ListenerRule.HostHeaderConfig=HostHeaderConfig,ListenerRule.FixedResponseConfig=FixedResponseConfig,ListenerRule.Action=Action,ListenerRule.HttpHeaderConfig=HttpHeaderConfig,ListenerRule.ForwardConfig=ForwardConfig,ListenerRule.TargetGroupTuple=TargetGroupTuple,ListenerRule.HttpRequestMethodConfig=HttpRequestMethodConfig,ListenerRule.TargetGroupStickinessConfig=TargetGroupStickinessConfig,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class LoadBalancerAttribute{constructor(properties){Object.assign(this,properties)}}exports.LoadBalancerAttribute=LoadBalancerAttribute;class SubnetMapping{constructor(properties){Object.assign(this,properties)}}exports.SubnetMapping=SubnetMapping;class LoadBalancer extends resource_1.ResourceBase{constructor(properties){super("AWS::ElasticLoadBalancingV2::LoadBalancer",properties||{})}}(exports.default=LoadBalancer).LoadBalancerAttribute=LoadBalancerAttribute,LoadBalancer.SubnetMapping=SubnetMapping;