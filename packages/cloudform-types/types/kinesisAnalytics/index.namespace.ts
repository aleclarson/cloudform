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

import * as _0 from './applicationOutput'
import * as _1 from './application'
import * as _2 from './applicationReferenceDataSource'

export namespace KinesisAnalytics {
  export const ApplicationOutput = _0.R
  export const Application = _1.R
  export const ApplicationReferenceDataSource = _2.R

  export type ApplicationOutput = _0.R
  export type Application = _1.R
  export type ApplicationReferenceDataSource = _2.R

  export namespace ApplicationOutput {
    export type KinesisFirehoseOutput = _0.KinesisFirehoseOutput
    export type KinesisStreamsOutput = _0.KinesisStreamsOutput
    export type LambdaOutput = _0.LambdaOutput
    export type Output = _0.Output
    export type DestinationSchema = _0.DestinationSchema
  }
  export namespace Application {
    export type CSVMappingParameters = _1.CSVMappingParameters
    export type Input = _1.Input
    export type JSONMappingParameters = _1.JSONMappingParameters
    export type KinesisStreamsInput = _1.KinesisStreamsInput
    export type RecordColumn = _1.RecordColumn
    export type KinesisFirehoseInput = _1.KinesisFirehoseInput
    export type InputParallelism = _1.InputParallelism
    export type InputSchema = _1.InputSchema
    export type MappingParameters = _1.MappingParameters
    export type RecordFormat = _1.RecordFormat
    export type InputProcessingConfiguration = _1.InputProcessingConfiguration
    export type InputLambdaProcessor = _1.InputLambdaProcessor
  }
  export namespace ApplicationReferenceDataSource {
    export type RecordFormat = _2.RecordFormat
    export type CSVMappingParameters = _2.CSVMappingParameters
    export type S3ReferenceDataSource = _2.S3ReferenceDataSource
    export type RecordColumn = _2.RecordColumn
    export type ReferenceSchema = _2.ReferenceSchema
    export type MappingParameters = _2.MappingParameters
    export type JSONMappingParameters = _2.JSONMappingParameters
    export type ReferenceDataSource = _2.ReferenceDataSource
  }
}
