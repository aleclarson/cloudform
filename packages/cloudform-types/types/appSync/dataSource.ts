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

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class RelationalDatabaseConfig {
    RdsHttpEndpointConfig?: RdsHttpEndpointConfig
    RelationalDatabaseSourceType!: Value<string>

    constructor(properties: RelationalDatabaseConfig) {
        Object.assign(this, properties)
    }
}

export class LambdaConfig {
    LambdaFunctionArn!: Value<string>

    constructor(properties: LambdaConfig) {
        Object.assign(this, properties)
    }
}

export class HttpConfig {
    Endpoint!: Value<string>
    AuthorizationConfig?: AuthorizationConfig

    constructor(properties: HttpConfig) {
        Object.assign(this, properties)
    }
}

export class AwsIamConfig {
    SigningRegion?: Value<string>
    SigningServiceName?: Value<string>

    constructor(properties: AwsIamConfig) {
        Object.assign(this, properties)
    }
}

export class OpenSearchServiceConfig {
    AwsRegion!: Value<string>
    Endpoint!: Value<string>

    constructor(properties: OpenSearchServiceConfig) {
        Object.assign(this, properties)
    }
}

export class DynamoDBConfig {
    TableName!: Value<string>
    AwsRegion!: Value<string>
    Versioned?: Value<boolean>
    DeltaSyncConfig?: DeltaSyncConfig
    UseCallerCredentials?: Value<boolean>

    constructor(properties: DynamoDBConfig) {
        Object.assign(this, properties)
    }
}

export class AuthorizationConfig {
    AwsIamConfig?: AwsIamConfig
    AuthorizationType!: Value<string>

    constructor(properties: AuthorizationConfig) {
        Object.assign(this, properties)
    }
}

export class RdsHttpEndpointConfig {
    AwsRegion!: Value<string>
    Schema?: Value<string>
    DatabaseName?: Value<string>
    DbClusterIdentifier!: Value<string>
    AwsSecretStoreArn!: Value<string>

    constructor(properties: RdsHttpEndpointConfig) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchConfig {
    AwsRegion!: Value<string>
    Endpoint!: Value<string>

    constructor(properties: ElasticsearchConfig) {
        Object.assign(this, properties)
    }
}

export class DeltaSyncConfig {
    BaseTableTTL!: Value<string>
    DeltaSyncTableTTL!: Value<string>
    DeltaSyncTableName!: Value<string>

    constructor(properties: DeltaSyncConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Type: Value<string>
    OpenSearchServiceConfig?: OpenSearchServiceConfig
    Description?: Value<string>
    ServiceRoleArn?: Value<string>
    HttpConfig?: HttpConfig
    RelationalDatabaseConfig?: RelationalDatabaseConfig
    LambdaConfig?: LambdaConfig
    ApiId: Value<string>
    Name: Value<string>
    DynamoDBConfig?: DynamoDBConfig
    ElasticsearchConfig?: ElasticsearchConfig
}

class DataSource extends ResourceBase<Properties> {
    static RelationalDatabaseConfig = RelationalDatabaseConfig
    static LambdaConfig = LambdaConfig
    static HttpConfig = HttpConfig
    static AwsIamConfig = AwsIamConfig
    static OpenSearchServiceConfig = OpenSearchServiceConfig
    static DynamoDBConfig = DynamoDBConfig
    static AuthorizationConfig = AuthorizationConfig
    static RdsHttpEndpointConfig = RdsHttpEndpointConfig
    static ElasticsearchConfig = ElasticsearchConfig
    static DeltaSyncConfig = DeltaSyncConfig

    constructor(properties: Properties) {
        super('AWS::AppSync::DataSource', properties)
    }
}
export { DataSource as R }
