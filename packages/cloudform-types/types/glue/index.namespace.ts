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

import * as _0 from './devEndpoint'
import * as _1 from './schemaVersionMetadata'
import * as _2 from './mlTransform'
import * as _3 from './connection'
import * as _4 from './partition'
import * as _5 from './trigger'
import * as _6 from './securityConfiguration'
import * as _7 from './schemaVersion'
import * as _8 from './dataCatalogEncryptionSettings'
import * as _9 from './workflow'
import * as _a from './job'
import * as _b from './database'
import * as _c from './crawler'
import * as _d from './classifier'
import * as _e from './schema'
import * as _f from './table'
import * as _10 from './registry'

export namespace Glue {
  export const DevEndpoint = _0.R
  export const SchemaVersionMetadata = _1.R
  export const MLTransform = _2.R
  export const Connection = _3.R
  export const Partition = _4.R
  export const Trigger = _5.R
  export const SecurityConfiguration = _6.R
  export const SchemaVersion = _7.R
  export const DataCatalogEncryptionSettings = _8.R
  export const Workflow = _9.R
  export const Job = _a.R
  export const Database = _b.R
  export const Crawler = _c.R
  export const Classifier = _d.R
  export const Schema = _e.R
  export const Table = _f.R
  export const Registry = _10.R

  export type DevEndpoint = _0.R
  export type SchemaVersionMetadata = _1.R
  export type MLTransform = _2.R
  export type Connection = _3.R
  export type Partition = _4.R
  export type Trigger = _5.R
  export type SecurityConfiguration = _6.R
  export type SchemaVersion = _7.R
  export type DataCatalogEncryptionSettings = _8.R
  export type Workflow = _9.R
  export type Job = _a.R
  export type Database = _b.R
  export type Crawler = _c.R
  export type Classifier = _d.R
  export type Schema = _e.R
  export type Table = _f.R
  export type Registry = _10.R

  export namespace MLTransform {
    export type FindMatchesParameters = _2.FindMatchesParameters
    export type MLUserDataEncryption = _2.MLUserDataEncryption
    export type InputRecordTables = _2.InputRecordTables
    export type GlueTables = _2.GlueTables
    export type TransformEncryption = _2.TransformEncryption
    export type TransformParameters = _2.TransformParameters
  }
  export namespace Connection {
    export type ConnectionInput = _3.ConnectionInput
    export type PhysicalConnectionRequirements = _3.PhysicalConnectionRequirements
  }
  export namespace Partition {
    export type PartitionInput = _4.PartitionInput
    export type Order = _4.Order
    export type SchemaReference = _4.SchemaReference
    export type SerdeInfo = _4.SerdeInfo
    export type Column = _4.Column
    export type StorageDescriptor = _4.StorageDescriptor
    export type SkewedInfo = _4.SkewedInfo
    export type SchemaId = _4.SchemaId
  }
  export namespace Trigger {
    export type Condition = _5.Condition
    export type Predicate = _5.Predicate
    export type Action = _5.Action
    export type NotificationProperty = _5.NotificationProperty
  }
  export namespace SecurityConfiguration {
    export type EncryptionConfiguration = _6.EncryptionConfiguration
    export type JobBookmarksEncryption = _6.JobBookmarksEncryption
    export type S3Encryptions = _6.S3Encryptions
    export type S3Encryption = _6.S3Encryption
    export type CloudWatchEncryption = _6.CloudWatchEncryption
  }
  export namespace SchemaVersion {
    export type Schema = _7.Schema
  }
  export namespace DataCatalogEncryptionSettings {
    export type EncryptionAtRest = _8.EncryptionAtRest
    export type ConnectionPasswordEncryption = _8.ConnectionPasswordEncryption
  }
  export namespace Job {
    export type JobCommand = _a.JobCommand
    export type ConnectionsList = _a.ConnectionsList
    export type NotificationProperty = _a.NotificationProperty
    export type ExecutionProperty = _a.ExecutionProperty
  }
  export namespace Database {
    export type DatabaseInput = _b.DatabaseInput
    export type PrincipalPrivileges = _b.PrincipalPrivileges
    export type DatabaseIdentifier = _b.DatabaseIdentifier
    export type DataLakePrincipal = _b.DataLakePrincipal
  }
  export namespace Crawler {
    export type CatalogTarget = _c.CatalogTarget
    export type Schedule = _c.Schedule
    export type SchemaChangePolicy = _c.SchemaChangePolicy
    export type MongoDBTarget = _c.MongoDBTarget
    export type Targets = _c.Targets
    export type JdbcTarget = _c.JdbcTarget
    export type DynamoDBTarget = _c.DynamoDBTarget
    export type S3Target = _c.S3Target
    export type RecrawlPolicy = _c.RecrawlPolicy
  }
  export namespace Classifier {
    export type CsvClassifier = _d.CsvClassifier
    export type GrokClassifier = _d.GrokClassifier
    export type JsonClassifier = _d.JsonClassifier
    export type XMLClassifier = _d.XMLClassifier
  }
  export namespace Schema {
    export type SchemaVersion = _e.SchemaVersion
    export type Registry = _e.Registry
  }
  export namespace Table {
    export type Column = _f.Column
    export type TableInput = _f.TableInput
    export type SerdeInfo = _f.SerdeInfo
    export type SchemaId = _f.SchemaId
    export type Order = _f.Order
    export type SkewedInfo = _f.SkewedInfo
    export type StorageDescriptor = _f.StorageDescriptor
    export type SchemaReference = _f.SchemaReference
    export type TableIdentifier = _f.TableIdentifier
  }
}
