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

import * as _0 from './endpointAccess'
import * as _1 from './cluster'
import * as _2 from './scheduledAction'
import * as _3 from './clusterParameterGroup'
import * as _4 from './clusterSubnetGroup'
import * as _5 from './clusterSecurityGroup'
import * as _6 from './eventSubscription'
import * as _7 from './clusterSecurityGroupIngress'
import * as _8 from './endpointAuthorization'

export namespace Redshift {
  export const EndpointAccess = _0.R
  export const Cluster = _1.R
  export const ScheduledAction = _2.R
  export const ClusterParameterGroup = _3.R
  export const ClusterSubnetGroup = _4.R
  export const ClusterSecurityGroup = _5.R
  export const EventSubscription = _6.R
  export const ClusterSecurityGroupIngress = _7.R
  export const EndpointAuthorization = _8.R

  export type EndpointAccess = _0.R
  export type Cluster = _1.R
  export type ScheduledAction = _2.R
  export type ClusterParameterGroup = _3.R
  export type ClusterSubnetGroup = _4.R
  export type ClusterSecurityGroup = _5.R
  export type EventSubscription = _6.R
  export type ClusterSecurityGroupIngress = _7.R
  export type EndpointAuthorization = _8.R

  export namespace EndpointAccess {
    export type VpcSecurityGroup = _0.VpcSecurityGroup
  }
  export namespace Cluster {
    export type Endpoint = _1.Endpoint
    export type LoggingProperties = _1.LoggingProperties
  }
  export namespace ScheduledAction {
    export type ResumeClusterMessage = _2.ResumeClusterMessage
    export type PauseClusterMessage = _2.PauseClusterMessage
    export type ScheduledActionType = _2.ScheduledActionType
    export type ResizeClusterMessage = _2.ResizeClusterMessage
  }
  export namespace ClusterParameterGroup {
    export type Parameter = _3.Parameter
  }
}
