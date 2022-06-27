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

import * as _0 from './replicationSubnetGroup'
import * as _1 from './eventSubscription'
import * as _2 from './certificate'
import * as _3 from './endpoint'
import * as _4 from './replicationTask'
import * as _5 from './replicationInstance'

export namespace DMS {
  export const ReplicationSubnetGroup = _0.R
  export const EventSubscription = _1.R
  export const Certificate = _2.R
  export const Endpoint = _3.R
  export const ReplicationTask = _4.R
  export const ReplicationInstance = _5.R

  export type ReplicationSubnetGroup = _0.R
  export type EventSubscription = _1.R
  export type Certificate = _2.R
  export type Endpoint = _3.R
  export type ReplicationTask = _4.R
  export type ReplicationInstance = _5.R

  export namespace Endpoint {
    export type KinesisSettings = _3.KinesisSettings
    export type S3Settings = _3.S3Settings
    export type PostgreSqlSettings = _3.PostgreSqlSettings
    export type MicrosoftSqlServerSettings = _3.MicrosoftSqlServerSettings
    export type MongoDbSettings = _3.MongoDbSettings
    export type KafkaSettings = _3.KafkaSettings
    export type MySqlSettings = _3.MySqlSettings
    export type NeptuneSettings = _3.NeptuneSettings
    export type GcpMySQLSettings = _3.GcpMySQLSettings
    export type IbmDb2Settings = _3.IbmDb2Settings
    export type ElasticsearchSettings = _3.ElasticsearchSettings
    export type OracleSettings = _3.OracleSettings
    export type RedisSettings = _3.RedisSettings
    export type DynamoDbSettings = _3.DynamoDbSettings
    export type DocDbSettings = _3.DocDbSettings
    export type SybaseSettings = _3.SybaseSettings
    export type RedshiftSettings = _3.RedshiftSettings
  }
}
