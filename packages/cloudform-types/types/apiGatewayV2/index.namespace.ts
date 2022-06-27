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

import * as _0 from './api'
import * as _1 from './routeResponse'
import * as _2 from './domainName'
import * as _3 from './integration'
import * as _4 from './deployment'
import * as _5 from './model'
import * as _6 from './integrationResponse'
import * as _7 from './route'
import * as _8 from './apiGatewayManagedOverrides'
import * as _9 from './stage'
import * as _a from './vpcLink'
import * as _b from './authorizer'
import * as _c from './apiMapping'

export namespace ApiGatewayV2 {
  export const Api = _0.R
  export const RouteResponse = _1.R
  export const DomainName = _2.R
  export const Integration = _3.R
  export const Deployment = _4.R
  export const Model = _5.R
  export const IntegrationResponse = _6.R
  export const Route = _7.R
  export const ApiGatewayManagedOverrides = _8.R
  export const Stage = _9.R
  export const VpcLink = _a.R
  export const Authorizer = _b.R
  export const ApiMapping = _c.R

  export type Api = _0.R
  export type RouteResponse = _1.R
  export type DomainName = _2.R
  export type Integration = _3.R
  export type Deployment = _4.R
  export type Model = _5.R
  export type IntegrationResponse = _6.R
  export type Route = _7.R
  export type ApiGatewayManagedOverrides = _8.R
  export type Stage = _9.R
  export type VpcLink = _a.R
  export type Authorizer = _b.R
  export type ApiMapping = _c.R

  export namespace Api {
    export type Cors = _0.Cors
    export type BodyS3Location = _0.BodyS3Location
  }
  export namespace RouteResponse {
    export type ParameterConstraints = _1.ParameterConstraints
  }
  export namespace DomainName {
    export type MutualTlsAuthentication = _2.MutualTlsAuthentication
    export type DomainNameConfiguration = _2.DomainNameConfiguration
  }
  export namespace Integration {
    export type ResponseParameterList = _3.ResponseParameterList
    export type TlsConfig = _3.TlsConfig
    export type ResponseParameter = _3.ResponseParameter
  }
  export namespace Route {
    export type ParameterConstraints = _7.ParameterConstraints
  }
  export namespace ApiGatewayManagedOverrides {
    export type AccessLogSettings = _8.AccessLogSettings
    export type RouteOverrides = _8.RouteOverrides
    export type StageOverrides = _8.StageOverrides
    export type RouteSettings = _8.RouteSettings
    export type IntegrationOverrides = _8.IntegrationOverrides
  }
  export namespace Stage {
    export type AccessLogSettings = _9.AccessLogSettings
    export type RouteSettings = _9.RouteSettings
  }
  export namespace Authorizer {
    export type JWTConfiguration = _b.JWTConfiguration
  }
}
