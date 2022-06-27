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

import * as _0 from './dashboard'
import * as _1 from './theme'
import * as _2 from './analysis'
import * as _3 from './template'
import * as _4 from './dataSource'
import * as _5 from './dataSet'

export namespace QuickSight {
  export const Dashboard = _0.R
  export const Theme = _1.R
  export const Analysis = _2.R
  export const Template = _3.R
  export const DataSource = _4.R
  export const DataSet = _5.R

  export type Dashboard = _0.R
  export type Theme = _1.R
  export type Analysis = _2.R
  export type Template = _3.R
  export type DataSource = _4.R
  export type DataSet = _5.R

  export namespace Dashboard {
    export type SheetControlsOption = _0.SheetControlsOption
    export type ResourcePermission = _0.ResourcePermission
    export type DashboardSourceEntity = _0.DashboardSourceEntity
    export type Parameters = _0.Parameters
    export type DashboardSourceTemplate = _0.DashboardSourceTemplate
    export type DataSetReference = _0.DataSetReference
    export type StringParameter = _0.StringParameter
    export type IntegerParameter = _0.IntegerParameter
    export type ExportToCSVOption = _0.ExportToCSVOption
    export type DashboardPublishOptions = _0.DashboardPublishOptions
    export type DecimalParameter = _0.DecimalParameter
    export type DateTimeParameter = _0.DateTimeParameter
    export type AdHocFilteringOption = _0.AdHocFilteringOption
  }
  export namespace Theme {
    export type Font = _1.Font
    export type BorderStyle = _1.BorderStyle
    export type TileStyle = _1.TileStyle
    export type ResourcePermission = _1.ResourcePermission
    export type MarginStyle = _1.MarginStyle
    export type GutterStyle = _1.GutterStyle
    export type DataColorPalette = _1.DataColorPalette
    export type ThemeConfiguration = _1.ThemeConfiguration
    export type UIColorPalette = _1.UIColorPalette
    export type SheetStyle = _1.SheetStyle
    export type TileLayoutStyle = _1.TileLayoutStyle
    export type Typography = _1.Typography
  }
  export namespace Analysis {
    export type DecimalParameter = _2.DecimalParameter
    export type ResourcePermission = _2.ResourcePermission
    export type AnalysisSourceTemplate = _2.AnalysisSourceTemplate
    export type Sheet = _2.Sheet
    export type AnalysisSourceEntity = _2.AnalysisSourceEntity
    export type DataSetReference = _2.DataSetReference
    export type DateTimeParameter = _2.DateTimeParameter
    export type IntegerParameter = _2.IntegerParameter
    export type Parameters = _2.Parameters
    export type StringParameter = _2.StringParameter
    export type AnalysisError = _2.AnalysisError
  }
  export namespace Template {
    export type ResourcePermission = _3.ResourcePermission
    export type TemplateSourceTemplate = _3.TemplateSourceTemplate
    export type DataSetReference = _3.DataSetReference
    export type TemplateSourceEntity = _3.TemplateSourceEntity
    export type TemplateSourceAnalysis = _3.TemplateSourceAnalysis
  }
  export namespace DataSource {
    export type DataSourceParameters = _4.DataSourceParameters
    export type AuroraPostgreSqlParameters = _4.AuroraPostgreSqlParameters
    export type DataSourceCredentials = _4.DataSourceCredentials
    export type CredentialPair = _4.CredentialPair
    export type SnowflakeParameters = _4.SnowflakeParameters
    export type SslProperties = _4.SslProperties
    export type S3Parameters = _4.S3Parameters
    export type AmazonOpenSearchParameters = _4.AmazonOpenSearchParameters
    export type PrestoParameters = _4.PrestoParameters
    export type ResourcePermission = _4.ResourcePermission
    export type SparkParameters = _4.SparkParameters
    export type AuroraParameters = _4.AuroraParameters
    export type MariaDbParameters = _4.MariaDbParameters
    export type TeradataParameters = _4.TeradataParameters
    export type AthenaParameters = _4.AthenaParameters
    export type ManifestFileLocation = _4.ManifestFileLocation
    export type MySqlParameters = _4.MySqlParameters
    export type OracleParameters = _4.OracleParameters
    export type AmazonElasticsearchParameters = _4.AmazonElasticsearchParameters
    export type DataSourceErrorInfo = _4.DataSourceErrorInfo
    export type VpcConnectionProperties = _4.VpcConnectionProperties
    export type RedshiftParameters = _4.RedshiftParameters
    export type PostgreSqlParameters = _4.PostgreSqlParameters
    export type RdsParameters = _4.RdsParameters
    export type SqlServerParameters = _4.SqlServerParameters
  }
  export namespace DataSet {
    export type JoinKeyProperties = _5.JoinKeyProperties
    export type UploadSettings = _5.UploadSettings
    export type ProjectOperation = _5.ProjectOperation
    export type ColumnLevelPermissionRule = _5.ColumnLevelPermissionRule
    export type CreateColumnsOperation = _5.CreateColumnsOperation
    export type PhysicalTable = _5.PhysicalTable
    export type ColumnDescription = _5.ColumnDescription
    export type RenameColumnOperation = _5.RenameColumnOperation
    export type ColumnGroup = _5.ColumnGroup
    export type GeoSpatialColumnGroup = _5.GeoSpatialColumnGroup
    export type RelationalTable = _5.RelationalTable
    export type InputColumn = _5.InputColumn
    export type RowLevelPermissionDataSet = _5.RowLevelPermissionDataSet
    export type FilterOperation = _5.FilterOperation
    export type CustomSql = _5.CustomSql
    export type ResourcePermission = _5.ResourcePermission
    export type FieldFolder = _5.FieldFolder
    export type S3Source = _5.S3Source
    export type LogicalTable = _5.LogicalTable
    export type TransformOperation = _5.TransformOperation
    export type JoinInstruction = _5.JoinInstruction
    export type OutputColumn = _5.OutputColumn
    export type ColumnTag = _5.ColumnTag
    export type TagColumnOperation = _5.TagColumnOperation
    export type IngestionWaitPolicy = _5.IngestionWaitPolicy
    export type CalculatedColumn = _5.CalculatedColumn
    export type CastColumnTypeOperation = _5.CastColumnTypeOperation
    export type LogicalTableSource = _5.LogicalTableSource
  }
}
