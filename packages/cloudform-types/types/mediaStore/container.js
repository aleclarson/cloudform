"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.CorsRule=exports.MetricPolicyRule=exports.MetricPolicy=void 0;const resource_1=require("../resource");class MetricPolicy{constructor(properties){Object.assign(this,properties)}}exports.MetricPolicy=MetricPolicy;class MetricPolicyRule{constructor(properties){Object.assign(this,properties)}}exports.MetricPolicyRule=MetricPolicyRule;class CorsRule{constructor(properties){Object.assign(this,properties)}}exports.CorsRule=CorsRule;class Container extends resource_1.ResourceBase{constructor(properties){super("AWS::MediaStore::Container",properties)}}(exports.R=Container).MetricPolicy=MetricPolicy,Container.MetricPolicyRule=MetricPolicyRule,Container.CorsRule=CorsRule;