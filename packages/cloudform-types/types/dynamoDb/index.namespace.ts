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

import * as _0 from './table'
import * as _1 from './globalTable'

export namespace DynamoDB {
  export const Table = _0.R
  export const GlobalTable = _1.R

  export type Table = _0.R
  export type GlobalTable = _1.R

  export namespace Table {
    export type LocalSecondaryIndex = _0.LocalSecondaryIndex
    export type PointInTimeRecoverySpecification = _0.PointInTimeRecoverySpecification
    export type KinesisStreamSpecification = _0.KinesisStreamSpecification
    export type AttributeDefinition = _0.AttributeDefinition
    export type GlobalSecondaryIndex = _0.GlobalSecondaryIndex
    export type ContributorInsightsSpecification = _0.ContributorInsightsSpecification
    export type KeySchema = _0.KeySchema
    export type SSESpecification = _0.SSESpecification
    export type TimeToLiveSpecification = _0.TimeToLiveSpecification
    export type ProvisionedThroughput = _0.ProvisionedThroughput
    export type Projection = _0.Projection
    export type StreamSpecification = _0.StreamSpecification
  }
  export namespace GlobalTable {
    export type PointInTimeRecoverySpecification = _1.PointInTimeRecoverySpecification
    export type ContributorInsightsSpecification = _1.ContributorInsightsSpecification
    export type CapacityAutoScalingSettings = _1.CapacityAutoScalingSettings
    export type ReadProvisionedThroughputSettings = _1.ReadProvisionedThroughputSettings
    export type LocalSecondaryIndex = _1.LocalSecondaryIndex
    export type TargetTrackingScalingPolicyConfiguration = _1.TargetTrackingScalingPolicyConfiguration
    export type ReplicaSpecification = _1.ReplicaSpecification
    export type GlobalSecondaryIndex = _1.GlobalSecondaryIndex
    export type KeySchema = _1.KeySchema
    export type StreamSpecification = _1.StreamSpecification
    export type Projection = _1.Projection
    export type ReplicaGlobalSecondaryIndexSpecification = _1.ReplicaGlobalSecondaryIndexSpecification
    export type AttributeDefinition = _1.AttributeDefinition
    export type SSESpecification = _1.SSESpecification
    export type WriteProvisionedThroughputSettings = _1.WriteProvisionedThroughputSettings
    export type TimeToLiveSpecification = _1.TimeToLiveSpecification
    export type ReplicaSSESpecification = _1.ReplicaSSESpecification
  }
}
