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

import * as _0 from './multiRegionAccessPoint'
import * as _1 from './storageLens'
import * as _2 from './bucket'
import * as _3 from './bucketPolicy'
import * as _4 from './accessPoint'
import * as _5 from './multiRegionAccessPointPolicy'

export namespace S3 {
  export const MultiRegionAccessPoint = _0.R
  export const StorageLens = _1.R
  export const Bucket = _2.R
  export const BucketPolicy = _3.R
  export const AccessPoint = _4.R
  export const MultiRegionAccessPointPolicy = _5.R

  export type MultiRegionAccessPoint = _0.R
  export type StorageLens = _1.R
  export type Bucket = _2.R
  export type BucketPolicy = _3.R
  export type AccessPoint = _4.R
  export type MultiRegionAccessPointPolicy = _5.R

  export namespace MultiRegionAccessPoint {
    export type Region = _0.Region
    export type PublicAccessBlockConfiguration = _0.PublicAccessBlockConfiguration
  }
  export namespace StorageLens {
    export type PrefixLevelStorageMetrics = _1.PrefixLevelStorageMetrics
    export type SelectionCriteria = _1.SelectionCriteria
    export type ActivityMetrics = _1.ActivityMetrics
    export type BucketLevel = _1.BucketLevel
    export type BucketsAndRegions = _1.BucketsAndRegions
    export type DataExport = _1.DataExport
    export type AwsOrg = _1.AwsOrg
    export type PrefixLevel = _1.PrefixLevel
    export type CloudWatchMetrics = _1.CloudWatchMetrics
    export type Encryption = _1.Encryption
    export type S3BucketDestination = _1.S3BucketDestination
    export type StorageLensConfiguration = _1.StorageLensConfiguration
    export type AccountLevel = _1.AccountLevel
  }
  export namespace Bucket {
    export type OwnershipControls = _2.OwnershipControls
    export type ReplicaModifications = _2.ReplicaModifications
    export type CorsRule = _2.CorsRule
    export type Destination = _2.Destination
    export type OwnershipControlsRule = _2.OwnershipControlsRule
    export type AccessControlTranslation = _2.AccessControlTranslation
    export type VersioningConfiguration = _2.VersioningConfiguration
    export type ReplicationTime = _2.ReplicationTime
    export type ServerSideEncryptionByDefault = _2.ServerSideEncryptionByDefault
    export type Tiering = _2.Tiering
    export type SseKmsEncryptedObjects = _2.SseKmsEncryptedObjects
    export type QueueConfiguration = _2.QueueConfiguration
    export type ObjectLockConfiguration = _2.ObjectLockConfiguration
    export type NoncurrentVersionExpiration = _2.NoncurrentVersionExpiration
    export type AccelerateConfiguration = _2.AccelerateConfiguration
    export type IntelligentTieringConfiguration = _2.IntelligentTieringConfiguration
    export type AbortIncompleteMultipartUpload = _2.AbortIncompleteMultipartUpload
    export type DeleteMarkerReplication = _2.DeleteMarkerReplication
    export type PublicAccessBlockConfiguration = _2.PublicAccessBlockConfiguration
    export type ReplicationRule = _2.ReplicationRule
    export type SourceSelectionCriteria = _2.SourceSelectionCriteria
    export type StorageClassAnalysis = _2.StorageClassAnalysis
    export type RedirectRule = _2.RedirectRule
    export type ObjectLockRule = _2.ObjectLockRule
    export type Rule = _2.Rule
    export type MetricsConfiguration = _2.MetricsConfiguration
    export type DataExport = _2.DataExport
    export type ReplicationTimeValue = _2.ReplicationTimeValue
    export type FilterRule = _2.FilterRule
    export type ReplicationRuleAndOperator = _2.ReplicationRuleAndOperator
    export type EventBridgeConfiguration = _2.EventBridgeConfiguration
    export type BucketEncryption = _2.BucketEncryption
    export type Metrics = _2.Metrics
    export type RoutingRuleCondition = _2.RoutingRuleCondition
    export type LifecycleConfiguration = _2.LifecycleConfiguration
    export type NotificationConfiguration = _2.NotificationConfiguration
    export type RedirectAllRequestsTo = _2.RedirectAllRequestsTo
    export type S3KeyFilter = _2.S3KeyFilter
    export type InventoryConfiguration = _2.InventoryConfiguration
    export type ReplicationConfiguration = _2.ReplicationConfiguration
    export type CorsConfiguration = _2.CorsConfiguration
    export type ReplicationDestination = _2.ReplicationDestination
    export type NoncurrentVersionTransition = _2.NoncurrentVersionTransition
    export type DefaultRetention = _2.DefaultRetention
    export type NotificationFilter = _2.NotificationFilter
    export type LambdaConfiguration = _2.LambdaConfiguration
    export type ServerSideEncryptionRule = _2.ServerSideEncryptionRule
    export type AnalyticsConfiguration = _2.AnalyticsConfiguration
    export type LoggingConfiguration = _2.LoggingConfiguration
    export type RoutingRule = _2.RoutingRule
    export type EncryptionConfiguration = _2.EncryptionConfiguration
    export type WebsiteConfiguration = _2.WebsiteConfiguration
    export type TopicConfiguration = _2.TopicConfiguration
    export type TagFilter = _2.TagFilter
    export type Transition = _2.Transition
    export type ReplicationRuleFilter = _2.ReplicationRuleFilter
  }
  export namespace AccessPoint {
    export type PublicAccessBlockConfiguration = _4.PublicAccessBlockConfiguration
    export type VpcConfiguration = _4.VpcConfiguration
  }
}
