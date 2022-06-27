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

import * as _0 from './channel'
import * as _1 from './datastore'
import * as _2 from './dataset'
import * as _3 from './pipeline'

export namespace IoTAnalytics {
  export const Channel = _0.R
  export const Datastore = _1.R
  export const Dataset = _2.R
  export const Pipeline = _3.R

  export type Channel = _0.R
  export type Datastore = _1.R
  export type Dataset = _2.R
  export type Pipeline = _3.R

  export namespace Channel {
    export type CustomerManagedS3 = _0.CustomerManagedS3
    export type RetentionPeriod = _0.RetentionPeriod
    export type ServiceManagedS3 = _0.ServiceManagedS3
    export type ChannelStorage = _0.ChannelStorage
  }
  export namespace Datastore {
    export type IotSiteWiseMultiLayerStorage = _1.IotSiteWiseMultiLayerStorage
    export type FileFormatConfiguration = _1.FileFormatConfiguration
    export type ServiceManagedS3 = _1.ServiceManagedS3
    export type RetentionPeriod = _1.RetentionPeriod
    export type CustomerManagedS3 = _1.CustomerManagedS3
    export type DatastorePartitions = _1.DatastorePartitions
    export type SchemaDefinition = _1.SchemaDefinition
    export type Column = _1.Column
    export type ParquetConfiguration = _1.ParquetConfiguration
    export type DatastoreStorage = _1.DatastoreStorage
    export type CustomerManagedS3Storage = _1.CustomerManagedS3Storage
    export type Partition = _1.Partition
    export type DatastorePartition = _1.DatastorePartition
    export type TimestampPartition = _1.TimestampPartition
    export type JsonConfiguration = _1.JsonConfiguration
  }
  export namespace Dataset {
    export type DatasetContentVersionValue = _2.DatasetContentVersionValue
    export type GlueConfiguration = _2.GlueConfiguration
    export type DeltaTimeSessionWindowConfiguration = _2.DeltaTimeSessionWindowConfiguration
    export type OutputFileUriValue = _2.OutputFileUriValue
    export type Filter = _2.Filter
    export type DatasetContentDeliveryRule = _2.DatasetContentDeliveryRule
    export type Action = _2.Action
    export type LateDataRuleConfiguration = _2.LateDataRuleConfiguration
    export type ContainerAction = _2.ContainerAction
    export type LateDataRule = _2.LateDataRule
    export type QueryAction = _2.QueryAction
    export type DatasetContentDeliveryRuleDestination = _2.DatasetContentDeliveryRuleDestination
    export type VersioningConfiguration = _2.VersioningConfiguration
    export type Schedule = _2.Schedule
    export type RetentionPeriod = _2.RetentionPeriod
    export type S3DestinationConfiguration = _2.S3DestinationConfiguration
    export type Variable = _2.Variable
    export type DeltaTime = _2.DeltaTime
    export type Trigger = _2.Trigger
    export type IotEventsDestinationConfiguration = _2.IotEventsDestinationConfiguration
    export type ResourceConfiguration = _2.ResourceConfiguration
    export type TriggeringDataset = _2.TriggeringDataset
  }
  export namespace Pipeline {
    export type DeviceShadowEnrich = _3.DeviceShadowEnrich
    export type SelectAttributes = _3.SelectAttributes
    export type RemoveAttributes = _3.RemoveAttributes
    export type Datastore = _3.Datastore
    export type DeviceRegistryEnrich = _3.DeviceRegistryEnrich
    export type Lambda = _3.Lambda
    export type Channel = _3.Channel
    export type Filter = _3.Filter
    export type Activity = _3.Activity
    export type Math = _3.Math
    export type AddAttributes = _3.AddAttributes
  }
}
