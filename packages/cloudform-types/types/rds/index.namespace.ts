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

import * as _0 from './dbSubnetGroup'
import * as _1 from './globalCluster'
import * as _2 from './dbSecurityGroupIngress'
import * as _3 from './dbCluster'
import * as _4 from './eventSubscription'
import * as _5 from './dbInstance'
import * as _6 from './dbSecurityGroup'
import * as _7 from './dbClusterParameterGroup'
import * as _8 from './optionGroup'
import * as _9 from './dbParameterGroup'
import * as _a from './dbProxy'
import * as _b from './dbProxyTargetGroup'
import * as _c from './dbProxyEndpoint'

export namespace RDS {
  export const DBSubnetGroup = _0.R
  export const GlobalCluster = _1.R
  export const DBSecurityGroupIngress = _2.R
  export const DBCluster = _3.R
  export const EventSubscription = _4.R
  export const DBInstance = _5.R
  export const DBSecurityGroup = _6.R
  export const DBClusterParameterGroup = _7.R
  export const OptionGroup = _8.R
  export const DBParameterGroup = _9.R
  export const DBProxy = _a.R
  export const DBProxyTargetGroup = _b.R
  export const DBProxyEndpoint = _c.R

  export type DBSubnetGroup = _0.R
  export type GlobalCluster = _1.R
  export type DBSecurityGroupIngress = _2.R
  export type DBCluster = _3.R
  export type EventSubscription = _4.R
  export type DBInstance = _5.R
  export type DBSecurityGroup = _6.R
  export type DBClusterParameterGroup = _7.R
  export type OptionGroup = _8.R
  export type DBParameterGroup = _9.R
  export type DBProxy = _a.R
  export type DBProxyTargetGroup = _b.R
  export type DBProxyEndpoint = _c.R

  export namespace DBCluster {
    export type ScalingConfiguration = _3.ScalingConfiguration
    export type DBClusterRole = _3.DBClusterRole
  }
  export namespace DBInstance {
    export type DBInstanceRole = _5.DBInstanceRole
    export type ProcessorFeature = _5.ProcessorFeature
  }
  export namespace DBSecurityGroup {
    export type Ingress = _6.Ingress
  }
  export namespace OptionGroup {
    export type OptionSetting = _8.OptionSetting
    export type OptionConfiguration = _8.OptionConfiguration
  }
  export namespace DBProxy {
    export type TagFormat = _a.TagFormat
    export type AuthFormat = _a.AuthFormat
  }
  export namespace DBProxyTargetGroup {
    export type ConnectionPoolConfigurationInfoFormat = _b.ConnectionPoolConfigurationInfoFormat
  }
  export namespace DBProxyEndpoint {
    export type TagFormat = _c.TagFormat
  }
}
