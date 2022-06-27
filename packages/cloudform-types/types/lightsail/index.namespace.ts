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

import * as _0 from './database'
import * as _1 from './certificate'
import * as _2 from './loadBalancer'
import * as _3 from './bucket'
import * as _4 from './instance'
import * as _5 from './alarm'
import * as _6 from './loadBalancerTlsCertificate'
import * as _7 from './disk'
import * as _8 from './container'
import * as _9 from './staticIp'
import * as _a from './distribution'

export namespace Lightsail {
  export const Database = _0.R
  export const Certificate = _1.R
  export const LoadBalancer = _2.R
  export const Bucket = _3.R
  export const Instance = _4.R
  export const Alarm = _5.R
  export const LoadBalancerTlsCertificate = _6.R
  export const Disk = _7.R
  export const Container = _8.R
  export const StaticIp = _9.R
  export const Distribution = _a.R

  export type Database = _0.R
  export type Certificate = _1.R
  export type LoadBalancer = _2.R
  export type Bucket = _3.R
  export type Instance = _4.R
  export type Alarm = _5.R
  export type LoadBalancerTlsCertificate = _6.R
  export type Disk = _7.R
  export type Container = _8.R
  export type StaticIp = _9.R
  export type Distribution = _a.R

  export namespace Database {
    export type RelationalDatabaseParameter = _0.RelationalDatabaseParameter
  }
  export namespace Bucket {
    export type AccessRules = _3.AccessRules
  }
  export namespace Instance {
    export type MonthlyTransfer = _4.MonthlyTransfer
    export type Port = _4.Port
    export type AddOn = _4.AddOn
    export type AutoSnapshotAddOn = _4.AutoSnapshotAddOn
    export type Disk = _4.Disk
    export type Hardware = _4.Hardware
    export type Location = _4.Location
    export type Networking = _4.Networking
    export type State = _4.State
  }
  export namespace Disk {
    export type AddOn = _7.AddOn
    export type AutoSnapshotAddOn = _7.AutoSnapshotAddOn
  }
  export namespace Container {
    export type EnvironmentVariable = _8.EnvironmentVariable
    export type PublicEndpoint = _8.PublicEndpoint
    export type PortInfo = _8.PortInfo
    export type ContainerServiceDeployment = _8.ContainerServiceDeployment
    export type PublicDomainName = _8.PublicDomainName
    export type HealthCheckConfig = _8.HealthCheckConfig
  }
  export namespace Distribution {
    export type HeaderObject = _a.HeaderObject
    export type CacheSettings = _a.CacheSettings
    export type InputOrigin = _a.InputOrigin
    export type QueryStringObject = _a.QueryStringObject
    export type CacheBehavior = _a.CacheBehavior
    export type CacheBehaviorPerPath = _a.CacheBehaviorPerPath
    export type CookieObject = _a.CookieObject
  }
}
