"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const keyGroup_1=require("./keyGroup"),streamingDistribution_1=require("./streamingDistribution"),cachePolicy_1=require("./cachePolicy"),distribution_1=require("./distribution"),cloudFrontOriginAccessIdentity_1=require("./cloudFrontOriginAccessIdentity"),realtimeLogConfig_1=require("./realtimeLogConfig"),originRequestPolicy_1=require("./originRequestPolicy"),publicKey_1=require("./publicKey"),function_1=require("./function");var CloudFront;!function(CloudFront){CloudFront.KeyGroup=keyGroup_1.default,CloudFront.StreamingDistribution=streamingDistribution_1.default,CloudFront.CachePolicy=cachePolicy_1.default,CloudFront.Distribution=distribution_1.default,CloudFront.CloudFrontOriginAccessIdentity=cloudFrontOriginAccessIdentity_1.default,CloudFront.RealtimeLogConfig=realtimeLogConfig_1.default,CloudFront.OriginRequestPolicy=originRequestPolicy_1.default,CloudFront.PublicKey=publicKey_1.default,CloudFront.Function=function_1.default}(CloudFront=exports.CloudFront||(exports.CloudFront={})),Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class KeyGroupConfig{constructor(properties){Object.assign(this,properties)}}exports.KeyGroupConfig=KeyGroupConfig;class KeyGroup extends resource_1.ResourceBase{constructor(properties){super("AWS::CloudFront::KeyGroup",properties)}}(exports.default=KeyGroup).KeyGroupConfig=KeyGroupConfig;