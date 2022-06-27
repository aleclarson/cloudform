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

import * as _0 from './route'
import * as _1 from './virtualNode'
import * as _2 from './virtualRouter'
import * as _3 from './mesh'
import * as _4 from './gatewayRoute'
import * as _5 from './virtualGateway'
import * as _6 from './virtualService'

export namespace AppMesh {
  export const Route = _0.R
  export const VirtualNode = _1.R
  export const VirtualRouter = _2.R
  export const Mesh = _3.R
  export const GatewayRoute = _4.R
  export const VirtualGateway = _5.R
  export const VirtualService = _6.R

  export type Route = _0.R
  export type VirtualNode = _1.R
  export type VirtualRouter = _2.R
  export type Mesh = _3.R
  export type GatewayRoute = _4.R
  export type VirtualGateway = _5.R
  export type VirtualService = _6.R

  export namespace Route {
    export type Duration = _0.Duration
    export type WeightedTarget = _0.WeightedTarget
    export type GrpcRouteMetadataMatchMethod = _0.GrpcRouteMetadataMatchMethod
    export type HeaderMatchMethod = _0.HeaderMatchMethod
    export type RouteSpec = _0.RouteSpec
    export type HttpPathMatch = _0.HttpPathMatch
    export type GrpcRouteMetadata = _0.GrpcRouteMetadata
    export type QueryParameter = _0.QueryParameter
    export type HttpRouteMatch = _0.HttpRouteMatch
    export type HttpQueryParameterMatch = _0.HttpQueryParameterMatch
    export type GrpcRouteAction = _0.GrpcRouteAction
    export type GrpcRouteMatch = _0.GrpcRouteMatch
    export type HttpRoute = _0.HttpRoute
    export type TcpRouteAction = _0.TcpRouteAction
    export type GrpcRetryPolicy = _0.GrpcRetryPolicy
    export type TcpRoute = _0.TcpRoute
    export type HttpRetryPolicy = _0.HttpRetryPolicy
    export type GrpcTimeout = _0.GrpcTimeout
    export type GrpcRoute = _0.GrpcRoute
    export type TcpTimeout = _0.TcpTimeout
    export type HttpTimeout = _0.HttpTimeout
    export type HttpRouteHeader = _0.HttpRouteHeader
    export type HttpRouteAction = _0.HttpRouteAction
    export type MatchRange = _0.MatchRange
  }
  export namespace VirtualNode {
    export type TlsValidationContextSdsTrust = _1.TlsValidationContextSdsTrust
    export type ClientPolicyTls = _1.ClientPolicyTls
    export type FileAccessLog = _1.FileAccessLog
    export type AwsCloudMapInstanceAttribute = _1.AwsCloudMapInstanceAttribute
    export type ListenerTlsValidationContext = _1.ListenerTlsValidationContext
    export type TcpTimeout = _1.TcpTimeout
    export type Backend = _1.Backend
    export type ListenerTimeout = _1.ListenerTimeout
    export type PortMapping = _1.PortMapping
    export type ListenerTls = _1.ListenerTls
    export type ListenerTlsSdsCertificate = _1.ListenerTlsSdsCertificate
    export type BackendDefaults = _1.BackendDefaults
    export type VirtualNodeTcpConnectionPool = _1.VirtualNodeTcpConnectionPool
    export type HttpTimeout = _1.HttpTimeout
    export type HealthCheck = _1.HealthCheck
    export type AwsCloudMapServiceDiscovery = _1.AwsCloudMapServiceDiscovery
    export type VirtualNodeHttpConnectionPool = _1.VirtualNodeHttpConnectionPool
    export type ListenerTlsFileCertificate = _1.ListenerTlsFileCertificate
    export type TlsValidationContext = _1.TlsValidationContext
    export type VirtualNodeSpec = _1.VirtualNodeSpec
    export type Listener = _1.Listener
    export type DnsServiceDiscovery = _1.DnsServiceDiscovery
    export type TlsValidationContextFileTrust = _1.TlsValidationContextFileTrust
    export type GrpcTimeout = _1.GrpcTimeout
    export type VirtualNodeConnectionPool = _1.VirtualNodeConnectionPool
    export type Logging = _1.Logging
    export type ServiceDiscovery = _1.ServiceDiscovery
    export type Duration = _1.Duration
    export type TlsValidationContextTrust = _1.TlsValidationContextTrust
    export type ListenerTlsAcmCertificate = _1.ListenerTlsAcmCertificate
    export type VirtualNodeHttp2ConnectionPool = _1.VirtualNodeHttp2ConnectionPool
    export type ListenerTlsCertificate = _1.ListenerTlsCertificate
    export type VirtualServiceBackend = _1.VirtualServiceBackend
    export type OutlierDetection = _1.OutlierDetection
    export type TlsValidationContextAcmTrust = _1.TlsValidationContextAcmTrust
    export type ClientPolicy = _1.ClientPolicy
    export type ClientTlsCertificate = _1.ClientTlsCertificate
    export type ListenerTlsValidationContextTrust = _1.ListenerTlsValidationContextTrust
    export type AccessLog = _1.AccessLog
    export type SubjectAlternativeNameMatchers = _1.SubjectAlternativeNameMatchers
    export type SubjectAlternativeNames = _1.SubjectAlternativeNames
    export type VirtualNodeGrpcConnectionPool = _1.VirtualNodeGrpcConnectionPool
  }
  export namespace VirtualRouter {
    export type PortMapping = _2.PortMapping
    export type VirtualRouterSpec = _2.VirtualRouterSpec
    export type VirtualRouterListener = _2.VirtualRouterListener
  }
  export namespace Mesh {
    export type MeshServiceDiscovery = _3.MeshServiceDiscovery
    export type MeshSpec = _3.MeshSpec
    export type EgressFilter = _3.EgressFilter
  }
  export namespace GatewayRoute {
    export type HttpQueryParameterMatch = _4.HttpQueryParameterMatch
    export type HttpGatewayRoutePrefixRewrite = _4.HttpGatewayRoutePrefixRewrite
    export type HttpGatewayRouteHeaderMatch = _4.HttpGatewayRouteHeaderMatch
    export type GatewayRouteSpec = _4.GatewayRouteSpec
    export type HttpGatewayRouteHeader = _4.HttpGatewayRouteHeader
    export type GatewayRouteHostnameRewrite = _4.GatewayRouteHostnameRewrite
    export type QueryParameter = _4.QueryParameter
    export type GatewayRouteMetadataMatch = _4.GatewayRouteMetadataMatch
    export type GrpcGatewayRouteAction = _4.GrpcGatewayRouteAction
    export type GrpcGatewayRouteRewrite = _4.GrpcGatewayRouteRewrite
    export type GatewayRouteTarget = _4.GatewayRouteTarget
    export type GrpcGatewayRouteMatch = _4.GrpcGatewayRouteMatch
    export type HttpGatewayRoutePathRewrite = _4.HttpGatewayRoutePathRewrite
    export type GrpcGatewayRoute = _4.GrpcGatewayRoute
    export type GatewayRouteRangeMatch = _4.GatewayRouteRangeMatch
    export type HttpGatewayRouteRewrite = _4.HttpGatewayRouteRewrite
    export type GrpcGatewayRouteMetadata = _4.GrpcGatewayRouteMetadata
    export type HttpGatewayRouteAction = _4.HttpGatewayRouteAction
    export type GatewayRouteHostnameMatch = _4.GatewayRouteHostnameMatch
    export type GatewayRouteVirtualService = _4.GatewayRouteVirtualService
    export type HttpGatewayRouteMatch = _4.HttpGatewayRouteMatch
    export type HttpPathMatch = _4.HttpPathMatch
    export type HttpGatewayRoute = _4.HttpGatewayRoute
  }
  export namespace VirtualGateway {
    export type VirtualGatewayTlsValidationContextTrust = _5.VirtualGatewayTlsValidationContextTrust
    export type VirtualGatewayListenerTlsAcmCertificate = _5.VirtualGatewayListenerTlsAcmCertificate
    export type VirtualGatewayTlsValidationContextFileTrust = _5.VirtualGatewayTlsValidationContextFileTrust
    export type VirtualGatewayHttp2ConnectionPool = _5.VirtualGatewayHttp2ConnectionPool
    export type VirtualGatewaySpec = _5.VirtualGatewaySpec
    export type VirtualGatewayTlsValidationContext = _5.VirtualGatewayTlsValidationContext
    export type VirtualGatewayListenerTlsCertificate = _5.VirtualGatewayListenerTlsCertificate
    export type VirtualGatewayGrpcConnectionPool = _5.VirtualGatewayGrpcConnectionPool
    export type VirtualGatewayConnectionPool = _5.VirtualGatewayConnectionPool
    export type SubjectAlternativeNames = _5.SubjectAlternativeNames
    export type VirtualGatewayClientTlsCertificate = _5.VirtualGatewayClientTlsCertificate
    export type VirtualGatewayListenerTlsValidationContext = _5.VirtualGatewayListenerTlsValidationContext
    export type VirtualGatewayListenerTlsFileCertificate = _5.VirtualGatewayListenerTlsFileCertificate
    export type VirtualGatewayLogging = _5.VirtualGatewayLogging
    export type VirtualGatewayListenerTls = _5.VirtualGatewayListenerTls
    export type SubjectAlternativeNameMatchers = _5.SubjectAlternativeNameMatchers
    export type VirtualGatewayClientPolicy = _5.VirtualGatewayClientPolicy
    export type VirtualGatewayTlsValidationContextSdsTrust = _5.VirtualGatewayTlsValidationContextSdsTrust
    export type VirtualGatewayListener = _5.VirtualGatewayListener
    export type VirtualGatewayPortMapping = _5.VirtualGatewayPortMapping
    export type VirtualGatewayBackendDefaults = _5.VirtualGatewayBackendDefaults
    export type VirtualGatewayClientPolicyTls = _5.VirtualGatewayClientPolicyTls
    export type VirtualGatewayAccessLog = _5.VirtualGatewayAccessLog
    export type VirtualGatewayFileAccessLog = _5.VirtualGatewayFileAccessLog
    export type VirtualGatewayHttpConnectionPool = _5.VirtualGatewayHttpConnectionPool
    export type VirtualGatewayHealthCheckPolicy = _5.VirtualGatewayHealthCheckPolicy
    export type VirtualGatewayTlsValidationContextAcmTrust = _5.VirtualGatewayTlsValidationContextAcmTrust
    export type VirtualGatewayListenerTlsValidationContextTrust = _5.VirtualGatewayListenerTlsValidationContextTrust
    export type VirtualGatewayListenerTlsSdsCertificate = _5.VirtualGatewayListenerTlsSdsCertificate
  }
  export namespace VirtualService {
    export type VirtualRouterServiceProvider = _6.VirtualRouterServiceProvider
    export type VirtualNodeServiceProvider = _6.VirtualNodeServiceProvider
    export type VirtualServiceProvider = _6.VirtualServiceProvider
    export type VirtualServiceSpec = _6.VirtualServiceSpec
  }
}
