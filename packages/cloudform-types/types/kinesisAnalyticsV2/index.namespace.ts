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

import * as _0 from './applicationCloudWatchLoggingOption'
import * as _1 from './application'
import * as _2 from './applicationOutput'
import * as _3 from './applicationReferenceDataSource'

export namespace KinesisAnalyticsV2 {
  export const ApplicationCloudWatchLoggingOption = _0.R
  export const Application = _1.R
  export const ApplicationOutput = _2.R
  export const ApplicationReferenceDataSource = _3.R

  export type ApplicationCloudWatchLoggingOption = _0.R
  export type Application = _1.R
  export type ApplicationOutput = _2.R
  export type ApplicationReferenceDataSource = _3.R

  export namespace ApplicationCloudWatchLoggingOption {
    export type CloudWatchLoggingOption = _0.CloudWatchLoggingOption
  }
  export namespace Application {
    export type CustomArtifactConfiguration = _1.CustomArtifactConfiguration
    export type S3ContentLocation = _1.S3ContentLocation
    export type DeployAsApplicationConfiguration = _1.DeployAsApplicationConfiguration
    export type PropertyGroup = _1.PropertyGroup
    export type MappingParameters = _1.MappingParameters
    export type InputParallelism = _1.InputParallelism
    export type FlinkApplicationConfiguration = _1.FlinkApplicationConfiguration
    export type Input = _1.Input
    export type ApplicationSnapshotConfiguration = _1.ApplicationSnapshotConfiguration
    export type KinesisFirehoseInput = _1.KinesisFirehoseInput
    export type InputSchema = _1.InputSchema
    export type ParallelismConfiguration = _1.ParallelismConfiguration
    export type MonitoringConfiguration = _1.MonitoringConfiguration
    export type SqlApplicationConfiguration = _1.SqlApplicationConfiguration
    export type InputProcessingConfiguration = _1.InputProcessingConfiguration
    export type ApplicationCodeConfiguration = _1.ApplicationCodeConfiguration
    export type ZeppelinApplicationConfiguration = _1.ZeppelinApplicationConfiguration
    export type MavenReference = _1.MavenReference
    export type KinesisStreamsInput = _1.KinesisStreamsInput
    export type CheckpointConfiguration = _1.CheckpointConfiguration
    export type ZeppelinMonitoringConfiguration = _1.ZeppelinMonitoringConfiguration
    export type S3ContentBaseLocation = _1.S3ContentBaseLocation
    export type InputLambdaProcessor = _1.InputLambdaProcessor
    export type RecordColumn = _1.RecordColumn
    export type CSVMappingParameters = _1.CSVMappingParameters
    export type RecordFormat = _1.RecordFormat
    export type GlueDataCatalogConfiguration = _1.GlueDataCatalogConfiguration
    export type JSONMappingParameters = _1.JSONMappingParameters
    export type CodeContent = _1.CodeContent
    export type ApplicationConfiguration = _1.ApplicationConfiguration
    export type EnvironmentProperties = _1.EnvironmentProperties
    export type CatalogConfiguration = _1.CatalogConfiguration
  }
  export namespace ApplicationOutput {
    export type KinesisFirehoseOutput = _2.KinesisFirehoseOutput
    export type KinesisStreamsOutput = _2.KinesisStreamsOutput
    export type DestinationSchema = _2.DestinationSchema
    export type Output = _2.Output
    export type LambdaOutput = _2.LambdaOutput
  }
  export namespace ApplicationReferenceDataSource {
    export type RecordColumn = _3.RecordColumn
    export type RecordFormat = _3.RecordFormat
    export type JSONMappingParameters = _3.JSONMappingParameters
    export type ReferenceDataSource = _3.ReferenceDataSource
    export type MappingParameters = _3.MappingParameters
    export type S3ReferenceDataSource = _3.S3ReferenceDataSource
    export type ReferenceSchema = _3.ReferenceSchema
    export type CSVMappingParameters = _3.CSVMappingParameters
  }
}
