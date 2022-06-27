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

import * as _0 from './domainName'
import * as _1 from './documentationPart'
import * as _2 from './usagePlan'
import * as _3 from './gatewayResponse'
import * as _4 from './usagePlanKey'
import * as _5 from './requestValidator'
import * as _6 from './apiKey'
import * as _7 from './resource'
import * as _8 from './account'
import * as _9 from './method'
import * as _a from './deployment'
import * as _b from './authorizer'
import * as _c from './model'
import * as _d from './basePathMapping'
import * as _e from './stage'
import * as _f from './clientCertificate'
import * as _10 from './documentationVersion'
import * as _11 from './restApi'
import * as _12 from './vpcLink'

export namespace ApiGateway {
  export const DomainName = _0.R
  export const DocumentationPart = _1.R
  export const UsagePlan = _2.R
  export const GatewayResponse = _3.R
  export const UsagePlanKey = _4.R
  export const RequestValidator = _5.R
  export const ApiKey = _6.R
  export const Resource = _7.R
  export const Account = _8.R
  export const Method = _9.R
  export const Deployment = _a.R
  export const Authorizer = _b.R
  export const Model = _c.R
  export const BasePathMapping = _d.R
  export const Stage = _e.R
  export const ClientCertificate = _f.R
  export const DocumentationVersion = _10.R
  export const RestApi = _11.R
  export const VpcLink = _12.R

  export type DomainName = _0.R
  export type DocumentationPart = _1.R
  export type UsagePlan = _2.R
  export type GatewayResponse = _3.R
  export type UsagePlanKey = _4.R
  export type RequestValidator = _5.R
  export type ApiKey = _6.R
  export type Resource = _7.R
  export type Account = _8.R
  export type Method = _9.R
  export type Deployment = _a.R
  export type Authorizer = _b.R
  export type Model = _c.R
  export type BasePathMapping = _d.R
  export type Stage = _e.R
  export type ClientCertificate = _f.R
  export type DocumentationVersion = _10.R
  export type RestApi = _11.R
  export type VpcLink = _12.R

  export namespace DomainName {
    export type MutualTlsAuthentication = _0.MutualTlsAuthentication
    export type EndpointConfiguration = _0.EndpointConfiguration
  }
  export namespace DocumentationPart {
    export type Location = _1.Location
  }
  export namespace UsagePlan {
    export type ApiStage = _2.ApiStage
    export type ThrottleSettings = _2.ThrottleSettings
    export type QuotaSettings = _2.QuotaSettings
  }
  export namespace ApiKey {
    export type StageKey = _6.StageKey
  }
  export namespace Method {
    export type MethodResponse = _9.MethodResponse
    export type Integration = _9.Integration
    export type IntegrationResponse = _9.IntegrationResponse
  }
  export namespace Deployment {
    export type MethodSetting = _a.MethodSetting
    export type AccessLogSetting = _a.AccessLogSetting
    export type DeploymentCanarySettings = _a.DeploymentCanarySettings
    export type StageDescription = _a.StageDescription
    export type CanarySetting = _a.CanarySetting
  }
  export namespace Stage {
    export type CanarySetting = _e.CanarySetting
    export type AccessLogSetting = _e.AccessLogSetting
    export type MethodSetting = _e.MethodSetting
  }
  export namespace RestApi {
    export type S3Location = _11.S3Location
    export type EndpointConfiguration = _11.EndpointConfiguration
  }
}
