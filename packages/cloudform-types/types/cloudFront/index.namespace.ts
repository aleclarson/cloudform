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

import * as _0 from './streamingDistribution'
import * as _1 from './cachePolicy'
import * as _2 from './distribution'
import * as _3 from './function'
import * as _4 from './keyGroup'
import * as _5 from './cloudFrontOriginAccessIdentity'
import * as _6 from './realtimeLogConfig'
import * as _7 from './responseHeadersPolicy'
import * as _8 from './originRequestPolicy'
import * as _9 from './publicKey'

export namespace CloudFront {
  export const StreamingDistribution = _0.R
  export const CachePolicy = _1.R
  export const Distribution = _2.R
  export const Function = _3.R
  export const KeyGroup = _4.R
  export const CloudFrontOriginAccessIdentity = _5.R
  export const RealtimeLogConfig = _6.R
  export const ResponseHeadersPolicy = _7.R
  export const OriginRequestPolicy = _8.R
  export const PublicKey = _9.R

  export type StreamingDistribution = _0.R
  export type CachePolicy = _1.R
  export type Distribution = _2.R
  export type Function = _3.R
  export type KeyGroup = _4.R
  export type CloudFrontOriginAccessIdentity = _5.R
  export type RealtimeLogConfig = _6.R
  export type ResponseHeadersPolicy = _7.R
  export type OriginRequestPolicy = _8.R
  export type PublicKey = _9.R

  export namespace StreamingDistribution {
    export type S3Origin = _0.S3Origin
    export type Logging = _0.Logging
    export type StreamingDistributionConfig = _0.StreamingDistributionConfig
    export type TrustedSigners = _0.TrustedSigners
  }
  export namespace CachePolicy {
    export type HeadersConfig = _1.HeadersConfig
    export type CachePolicyConfig = _1.CachePolicyConfig
    export type ParametersInCacheKeyAndForwardedToOrigin = _1.ParametersInCacheKeyAndForwardedToOrigin
    export type QueryStringsConfig = _1.QueryStringsConfig
    export type CookiesConfig = _1.CookiesConfig
  }
  export namespace Distribution {
    export type Cookies = _2.Cookies
    export type DistributionConfig = _2.DistributionConfig
    export type LegacyS3Origin = _2.LegacyS3Origin
    export type OriginCustomHeader = _2.OriginCustomHeader
    export type OriginGroup = _2.OriginGroup
    export type CustomOriginConfig = _2.CustomOriginConfig
    export type OriginGroups = _2.OriginGroups
    export type OriginGroupMembers = _2.OriginGroupMembers
    export type GeoRestriction = _2.GeoRestriction
    export type ViewerCertificate = _2.ViewerCertificate
    export type CustomErrorResponse = _2.CustomErrorResponse
    export type LambdaFunctionAssociation = _2.LambdaFunctionAssociation
    export type OriginGroupMember = _2.OriginGroupMember
    export type CacheBehavior = _2.CacheBehavior
    export type LegacyCustomOrigin = _2.LegacyCustomOrigin
    export type DefaultCacheBehavior = _2.DefaultCacheBehavior
    export type Restrictions = _2.Restrictions
    export type Origin = _2.Origin
    export type StatusCodes = _2.StatusCodes
    export type OriginGroupFailoverCriteria = _2.OriginGroupFailoverCriteria
    export type ForwardedValues = _2.ForwardedValues
    export type OriginShield = _2.OriginShield
    export type S3OriginConfig = _2.S3OriginConfig
    export type Logging = _2.Logging
    export type FunctionAssociation = _2.FunctionAssociation
  }
  export namespace Function {
    export type FunctionConfig = _3.FunctionConfig
    export type FunctionMetadata = _3.FunctionMetadata
  }
  export namespace KeyGroup {
    export type KeyGroupConfig = _4.KeyGroupConfig
  }
  export namespace CloudFrontOriginAccessIdentity {
    export type CloudFrontOriginAccessIdentityConfig = _5.CloudFrontOriginAccessIdentityConfig
  }
  export namespace RealtimeLogConfig {
    export type EndPoint = _6.EndPoint
    export type KinesisStreamConfig = _6.KinesisStreamConfig
  }
  export namespace ResponseHeadersPolicy {
    export type XSSProtection = _7.XSSProtection
    export type ResponseHeadersPolicyConfig = _7.ResponseHeadersPolicyConfig
    export type AccessControlExposeHeaders = _7.AccessControlExposeHeaders
    export type CorsConfig = _7.CorsConfig
    export type AccessControlAllowMethods = _7.AccessControlAllowMethods
    export type ReferrerPolicy = _7.ReferrerPolicy
    export type AccessControlAllowHeaders = _7.AccessControlAllowHeaders
    export type FrameOptions = _7.FrameOptions
    export type CustomHeader = _7.CustomHeader
    export type ContentSecurityPolicy = _7.ContentSecurityPolicy
    export type SecurityHeadersConfig = _7.SecurityHeadersConfig
    export type StrictTransportSecurity = _7.StrictTransportSecurity
    export type AccessControlAllowOrigins = _7.AccessControlAllowOrigins
    export type ContentTypeOptions = _7.ContentTypeOptions
    export type CustomHeadersConfig = _7.CustomHeadersConfig
  }
  export namespace OriginRequestPolicy {
    export type OriginRequestPolicyConfig = _8.OriginRequestPolicyConfig
    export type CookiesConfig = _8.CookiesConfig
    export type QueryStringsConfig = _8.QueryStringsConfig
    export type HeadersConfig = _8.HeadersConfig
  }
  export namespace PublicKey {
    export type PublicKeyConfig = _9.PublicKeyConfig
  }
}
