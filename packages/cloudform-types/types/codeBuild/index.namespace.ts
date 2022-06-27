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

import * as _0 from './sourceCredential'
import * as _1 from './reportGroup'
import * as _2 from './project'

export namespace CodeBuild {
  export const SourceCredential = _0.R
  export const ReportGroup = _1.R
  export const Project = _2.R

  export type SourceCredential = _0.R
  export type ReportGroup = _1.R
  export type Project = _2.R

  export namespace ReportGroup {
    export type ReportExportConfig = _1.ReportExportConfig
    export type S3ReportExportConfig = _1.S3ReportExportConfig
  }
  export namespace Project {
    export type Environment = _2.Environment
    export type GitSubmodulesConfig = _2.GitSubmodulesConfig
    export type VpcConfig = _2.VpcConfig
    export type Artifacts = _2.Artifacts
    export type RegistryCredential = _2.RegistryCredential
    export type CloudWatchLogsConfig = _2.CloudWatchLogsConfig
    export type ProjectCache = _2.ProjectCache
    export type ProjectBuildBatchConfig = _2.ProjectBuildBatchConfig
    export type FilterGroup = _2.FilterGroup
    export type BatchRestrictions = _2.BatchRestrictions
    export type ProjectTriggers = _2.ProjectTriggers
    export type Source = _2.Source
    export type ProjectSourceVersion = _2.ProjectSourceVersion
    export type LogsConfig = _2.LogsConfig
    export type SourceAuth = _2.SourceAuth
    export type ProjectFileSystemLocation = _2.ProjectFileSystemLocation
    export type S3LogsConfig = _2.S3LogsConfig
    export type WebhookFilter = _2.WebhookFilter
    export type BuildStatusConfig = _2.BuildStatusConfig
    export type EnvironmentVariable = _2.EnvironmentVariable
  }
}
