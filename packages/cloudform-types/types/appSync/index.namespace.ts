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

import * as _0 from './resolver'
import * as _1 from './graphQlSchema'
import * as _2 from './graphQlApi'
import * as _3 from './apiKey'
import * as _4 from './domainNameApiAssociation'
import * as _5 from './functionConfiguration'
import * as _6 from './apiCache'
import * as _7 from './domainName'
import * as _8 from './dataSource'

export namespace AppSync {
  export const Resolver = _0.R
  export const GraphQLSchema = _1.R
  export const GraphQLApi = _2.R
  export const ApiKey = _3.R
  export const DomainNameApiAssociation = _4.R
  export const FunctionConfiguration = _5.R
  export const ApiCache = _6.R
  export const DomainName = _7.R
  export const DataSource = _8.R

  export type Resolver = _0.R
  export type GraphQLSchema = _1.R
  export type GraphQLApi = _2.R
  export type ApiKey = _3.R
  export type DomainNameApiAssociation = _4.R
  export type FunctionConfiguration = _5.R
  export type ApiCache = _6.R
  export type DomainName = _7.R
  export type DataSource = _8.R

  export namespace Resolver {
    export type LambdaConflictHandlerConfig = _0.LambdaConflictHandlerConfig
    export type PipelineConfig = _0.PipelineConfig
    export type SyncConfig = _0.SyncConfig
    export type CachingConfig = _0.CachingConfig
  }
  export namespace GraphQLApi {
    export type LambdaAuthorizerConfig = _2.LambdaAuthorizerConfig
    export type OpenIDConnectConfig = _2.OpenIDConnectConfig
    export type CognitoUserPoolConfig = _2.CognitoUserPoolConfig
    export type UserPoolConfig = _2.UserPoolConfig
    export type LogConfig = _2.LogConfig
    export type AdditionalAuthenticationProvider = _2.AdditionalAuthenticationProvider
    export type Tags = _2.Tags
    export type AdditionalAuthenticationProviders = _2.AdditionalAuthenticationProviders
  }
  export namespace FunctionConfiguration {
    export type SyncConfig = _5.SyncConfig
    export type LambdaConflictHandlerConfig = _5.LambdaConflictHandlerConfig
  }
  export namespace DataSource {
    export type RelationalDatabaseConfig = _8.RelationalDatabaseConfig
    export type LambdaConfig = _8.LambdaConfig
    export type HttpConfig = _8.HttpConfig
    export type AwsIamConfig = _8.AwsIamConfig
    export type OpenSearchServiceConfig = _8.OpenSearchServiceConfig
    export type DynamoDBConfig = _8.DynamoDBConfig
    export type AuthorizationConfig = _8.AuthorizationConfig
    export type RdsHttpEndpointConfig = _8.RdsHttpEndpointConfig
    export type ElasticsearchConfig = _8.ElasticsearchConfig
    export type DeltaSyncConfig = _8.DeltaSyncConfig
  }
}
