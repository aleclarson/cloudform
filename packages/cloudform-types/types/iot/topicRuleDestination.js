"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.HttpUrlDestinationSummary=exports.VpcDestinationProperties=void 0;const resource_1=require("../resource");class VpcDestinationProperties{constructor(properties){Object.assign(this,properties)}}exports.VpcDestinationProperties=VpcDestinationProperties;class HttpUrlDestinationSummary{constructor(properties){Object.assign(this,properties)}}exports.HttpUrlDestinationSummary=HttpUrlDestinationSummary;class TopicRuleDestination extends resource_1.ResourceBase{constructor(properties){super("AWS::IoT::TopicRuleDestination",properties||{})}}(exports.R=TopicRuleDestination).VpcDestinationProperties=VpcDestinationProperties,TopicRuleDestination.HttpUrlDestinationSummary=HttpUrlDestinationSummary;