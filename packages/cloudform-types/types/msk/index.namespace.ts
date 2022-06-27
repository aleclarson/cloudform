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

import * as _0 from './batchScramSecret'
import * as _1 from './cluster'
import * as _2 from './configuration'

export namespace MSK {
  export const BatchScramSecret = _0.R
  export const Cluster = _1.R
  export const Configuration = _2.R

  export type BatchScramSecret = _0.R
  export type Cluster = _1.R
  export type Configuration = _2.R

  export namespace Cluster {
    export type S3 = _1.S3
    export type CloudWatchLogs = _1.CloudWatchLogs
    export type PublicAccess = _1.PublicAccess
    export type EncryptionAtRest = _1.EncryptionAtRest
    export type Unauthenticated = _1.Unauthenticated
    export type BrokerLogs = _1.BrokerLogs
    export type EncryptionInTransit = _1.EncryptionInTransit
    export type Prometheus = _1.Prometheus
    export type LoggingInfo = _1.LoggingInfo
    export type ProvisionedThroughput = _1.ProvisionedThroughput
    export type EncryptionInfo = _1.EncryptionInfo
    export type Iam = _1.Iam
    export type Sasl = _1.Sasl
    export type ConfigurationInfo = _1.ConfigurationInfo
    export type BrokerNodeGroupInfo = _1.BrokerNodeGroupInfo
    export type Scram = _1.Scram
    export type JmxExporter = _1.JmxExporter
    export type ConnectivityInfo = _1.ConnectivityInfo
    export type StorageInfo = _1.StorageInfo
    export type NodeExporter = _1.NodeExporter
    export type EBSStorageInfo = _1.EBSStorageInfo
    export type Firehose = _1.Firehose
    export type ClientAuthentication = _1.ClientAuthentication
    export type Tls = _1.Tls
    export type OpenMonitoring = _1.OpenMonitoring
  }
}
