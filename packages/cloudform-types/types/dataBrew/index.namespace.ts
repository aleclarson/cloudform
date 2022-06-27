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

import * as _0 from './recipe'
import * as _1 from './dataset'
import * as _2 from './ruleset'
import * as _3 from './project'
import * as _4 from './job'
import * as _5 from './schedule'

export namespace DataBrew {
  export const Recipe = _0.R
  export const Dataset = _1.R
  export const Ruleset = _2.R
  export const Project = _3.R
  export const Job = _4.R
  export const Schedule = _5.R

  export type Recipe = _0.R
  export type Dataset = _1.R
  export type Ruleset = _2.R
  export type Project = _3.R
  export type Job = _4.R
  export type Schedule = _5.R

  export namespace Recipe {
    export type RecipeStep = _0.RecipeStep
    export type SecondaryInput = _0.SecondaryInput
    export type Action = _0.Action
    export type RecipeParameters = _0.RecipeParameters
    export type S3Location = _0.S3Location
    export type ParameterMap = _0.ParameterMap
    export type ConditionExpression = _0.ConditionExpression
    export type DataCatalogInputDefinition = _0.DataCatalogInputDefinition
  }
  export namespace Dataset {
    export type FilterExpression = _1.FilterExpression
    export type PathParameter = _1.PathParameter
    export type DatabaseInputDefinition = _1.DatabaseInputDefinition
    export type PathOptions = _1.PathOptions
    export type DatasetParameter = _1.DatasetParameter
    export type FilesLimit = _1.FilesLimit
    export type CsvOptions = _1.CsvOptions
    export type FormatOptions = _1.FormatOptions
    export type ExcelOptions = _1.ExcelOptions
    export type JsonOptions = _1.JsonOptions
    export type Input = _1.Input
    export type FilterValue = _1.FilterValue
    export type DataCatalogInputDefinition = _1.DataCatalogInputDefinition
    export type DatetimeOptions = _1.DatetimeOptions
    export type Metadata = _1.Metadata
    export type S3Location = _1.S3Location
  }
  export namespace Ruleset {
    export type Threshold = _2.Threshold
    export type SubstitutionValue = _2.SubstitutionValue
    export type ColumnSelector = _2.ColumnSelector
    export type Rule = _2.Rule
  }
  export namespace Project {
    export type Sample = _3.Sample
  }
  export namespace Job {
    export type EntityDetectorConfiguration = _4.EntityDetectorConfiguration
    export type ValidationConfiguration = _4.ValidationConfiguration
    export type DataCatalogOutput = _4.DataCatalogOutput
    export type S3Location = _4.S3Location
    export type OutputFormatOptions = _4.OutputFormatOptions
    export type CsvOutputOptions = _4.CsvOutputOptions
    export type Recipe = _4.Recipe
    export type S3TableOutputOptions = _4.S3TableOutputOptions
    export type Output = _4.Output
    export type OutputLocation = _4.OutputLocation
    export type ColumnSelector = _4.ColumnSelector
    export type StatisticsConfiguration = _4.StatisticsConfiguration
    export type DatabaseOutput = _4.DatabaseOutput
    export type AllowedStatistics = _4.AllowedStatistics
    export type DatabaseTableOutputOptions = _4.DatabaseTableOutputOptions
    export type ParameterMap = _4.ParameterMap
    export type StatisticOverride = _4.StatisticOverride
    export type JobSample = _4.JobSample
    export type ColumnStatisticsConfiguration = _4.ColumnStatisticsConfiguration
    export type ProfileConfiguration = _4.ProfileConfiguration
  }
}
