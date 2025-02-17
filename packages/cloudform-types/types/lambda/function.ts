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

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VpcConfig {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export class DeadLetterConfig {
    TargetArn?: Value<string>

    constructor(properties: DeadLetterConfig) {
        Object.assign(this, properties)
    }
}

export class FileSystemConfig {
    Arn!: Value<string>
    LocalMountPath!: Value<string>

    constructor(properties: FileSystemConfig) {
        Object.assign(this, properties)
    }
}

export class Code {
    S3Bucket?: Value<string>
    S3Key?: Value<string>
    S3ObjectVersion?: Value<string>
    ZipFile?: Value<string>
    ImageUri?: Value<string>

    constructor(properties: Code) {
        Object.assign(this, properties)
    }
}

export class EphemeralStorage {
    Size!: Value<number>

    constructor(properties: EphemeralStorage) {
        Object.assign(this, properties)
    }
}

export class TracingConfig {
    Mode?: Value<string>

    constructor(properties: TracingConfig) {
        Object.assign(this, properties)
    }
}

export class Environment {
    Variables?: {[key: string]: Value<string>}

    constructor(properties: Environment) {
        Object.assign(this, properties)
    }
}

export class ImageConfig {
    EntryPoint?: List<Value<string>>
    Command?: List<Value<string>>
    WorkingDirectory?: Value<string>

    constructor(properties: ImageConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Code: Code
    DeadLetterConfig?: DeadLetterConfig
    Description?: Value<string>
    Environment?: Environment
    EphemeralStorage?: EphemeralStorage
    FileSystemConfigs?: List<FileSystemConfig>
    FunctionName?: Value<string>
    Handler?: Value<string>
    Architectures?: List<Value<string>>
    KmsKeyArn?: Value<string>
    Layers?: List<Value<string>>
    MemorySize?: Value<number>
    ReservedConcurrentExecutions?: Value<number>
    Role: Value<string>
    Runtime?: Value<string>
    Tags?: List<ResourceTag>
    Timeout?: Value<number>
    TracingConfig?: TracingConfig
    VpcConfig?: VpcConfig
    CodeSigningConfigArn?: Value<string>
    ImageConfig?: ImageConfig
    PackageType?: Value<string>
}

class Function extends ResourceBase<Properties> {
    static VpcConfig = VpcConfig
    static DeadLetterConfig = DeadLetterConfig
    static FileSystemConfig = FileSystemConfig
    static Code = Code
    static EphemeralStorage = EphemeralStorage
    static TracingConfig = TracingConfig
    static Environment = Environment
    static ImageConfig = ImageConfig

    constructor(properties: Properties) {
        super('AWS::Lambda::Function', properties)
    }
}
export { Function as R }
