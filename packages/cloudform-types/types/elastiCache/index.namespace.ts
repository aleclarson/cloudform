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

import * as _0 from './userGroup'
import * as _1 from './subnetGroup'
import * as _2 from './replicationGroup'
import * as _3 from './parameterGroup'
import * as _4 from './globalReplicationGroup'
import * as _5 from './cacheCluster'
import * as _6 from './user'
import * as _7 from './securityGroup'
import * as _8 from './securityGroupIngress'

export namespace ElastiCache {
  export const UserGroup = _0.R
  export const SubnetGroup = _1.R
  export const ReplicationGroup = _2.R
  export const ParameterGroup = _3.R
  export const GlobalReplicationGroup = _4.R
  export const CacheCluster = _5.R
  export const User = _6.R
  export const SecurityGroup = _7.R
  export const SecurityGroupIngress = _8.R

  export type UserGroup = _0.R
  export type SubnetGroup = _1.R
  export type ReplicationGroup = _2.R
  export type ParameterGroup = _3.R
  export type GlobalReplicationGroup = _4.R
  export type CacheCluster = _5.R
  export type User = _6.R
  export type SecurityGroup = _7.R
  export type SecurityGroupIngress = _8.R

  export namespace ReplicationGroup {
    export type LogDeliveryConfigurationRequest = _2.LogDeliveryConfigurationRequest
    export type CloudWatchLogsDestinationDetails = _2.CloudWatchLogsDestinationDetails
    export type NodeGroupConfiguration = _2.NodeGroupConfiguration
    export type DestinationDetails = _2.DestinationDetails
    export type KinesisFirehoseDestinationDetails = _2.KinesisFirehoseDestinationDetails
  }
  export namespace GlobalReplicationGroup {
    export type RegionalConfiguration = _4.RegionalConfiguration
    export type ReshardingConfiguration = _4.ReshardingConfiguration
    export type GlobalReplicationGroupMember = _4.GlobalReplicationGroupMember
  }
  export namespace CacheCluster {
    export type KinesisFirehoseDestinationDetails = _5.KinesisFirehoseDestinationDetails
    export type LogDeliveryConfigurationRequest = _5.LogDeliveryConfigurationRequest
    export type DestinationDetails = _5.DestinationDetails
    export type CloudWatchLogsDestinationDetails = _5.CloudWatchLogsDestinationDetails
  }
}
