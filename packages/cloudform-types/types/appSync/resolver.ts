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

export class LambdaConflictHandlerConfig {
    LambdaConflictHandlerArn?: Value<string>

    constructor(properties: LambdaConflictHandlerConfig) {
        Object.assign(this, properties)
    }
}

export class PipelineConfig {
    Functions?: List<Value<string>>

    constructor(properties: PipelineConfig) {
        Object.assign(this, properties)
    }
}

export class SyncConfig {
    ConflictHandler?: Value<string>
    ConflictDetection!: Value<string>
    LambdaConflictHandlerConfig?: LambdaConflictHandlerConfig

    constructor(properties: SyncConfig) {
        Object.assign(this, properties)
    }
}

export class CachingConfig {
    CachingKeys?: List<Value<string>>
    Ttl!: Value<number>

    constructor(properties: CachingConfig) {
        Object.assign(this, properties)
    }
}

export interface ResolverProperties {
    TypeName: Value<string>
    PipelineConfig?: PipelineConfig
    RequestMappingTemplate?: Value<string>
    ResponseMappingTemplate?: Value<string>
    MaxBatchSize?: Value<number>
    SyncConfig?: SyncConfig
    ResponseMappingTemplateS3Location?: Value<string>
    DataSourceName?: Value<string>
    Kind?: Value<string>
    CachingConfig?: CachingConfig
    RequestMappingTemplateS3Location?: Value<string>
    ApiId: Value<string>
    FieldName: Value<string>
}

export default class Resolver extends ResourceBase<ResolverProperties> {
    static LambdaConflictHandlerConfig = LambdaConflictHandlerConfig
    static PipelineConfig = PipelineConfig
    static SyncConfig = SyncConfig
    static CachingConfig = CachingConfig

    constructor(properties: ResolverProperties) {
        super('AWS::AppSync::Resolver', properties)
    }
}
