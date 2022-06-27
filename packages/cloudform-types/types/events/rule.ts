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

export class SageMakerPipelineParameter {
    Name!: Value<string>
    Value!: Value<string>

    constructor(properties: SageMakerPipelineParameter) {
        Object.assign(this, properties)
    }
}

export class BatchRetryStrategy {
    Attempts?: Value<number>

    constructor(properties: BatchRetryStrategy) {
        Object.assign(this, properties)
    }
}

export class PlacementConstraint {
    Expression?: Value<string>
    Type?: Value<string>

    constructor(properties: PlacementConstraint) {
        Object.assign(this, properties)
    }
}

export class HttpParameters {
    HeaderParameters?: {[key: string]: Value<string>}
    PathParameterValues?: List<Value<string>>
    QueryStringParameters?: {[key: string]: Value<string>}

    constructor(properties: HttpParameters) {
        Object.assign(this, properties)
    }
}

export class BatchArrayProperties {
    Size?: Value<number>

    constructor(properties: BatchArrayProperties) {
        Object.assign(this, properties)
    }
}

export class BatchParameters {
    ArrayProperties?: BatchArrayProperties
    JobDefinition!: Value<string>
    JobName!: Value<string>
    RetryStrategy?: BatchRetryStrategy

    constructor(properties: BatchParameters) {
        Object.assign(this, properties)
    }
}

export class RunCommandParameters {
    RunCommandTargets!: List<RunCommandTarget>

    constructor(properties: RunCommandParameters) {
        Object.assign(this, properties)
    }
}

export class DeadLetterConfig {
    Arn?: Value<string>

    constructor(properties: DeadLetterConfig) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    AwsVpcConfiguration?: AwsVpcConfiguration

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class RunCommandTarget {
    Key!: Value<string>
    Values!: List<Value<string>>

    constructor(properties: RunCommandTarget) {
        Object.assign(this, properties)
    }
}

export class CapacityProviderStrategyItem {
    Base?: Value<number>
    CapacityProvider!: Value<string>
    Weight?: Value<number>

    constructor(properties: CapacityProviderStrategyItem) {
        Object.assign(this, properties)
    }
}

export class InputTransformer {
    InputPathsMap?: {[key: string]: Value<string>}
    InputTemplate!: Value<string>

    constructor(properties: InputTransformer) {
        Object.assign(this, properties)
    }
}

export class SqsParameters {
    MessageGroupId!: Value<string>

    constructor(properties: SqsParameters) {
        Object.assign(this, properties)
    }
}

export class RetryPolicy {
    MaximumEventAgeInSeconds?: Value<number>
    MaximumRetryAttempts?: Value<number>

    constructor(properties: RetryPolicy) {
        Object.assign(this, properties)
    }
}

export class PlacementStrategy {
    Field?: Value<string>
    Type?: Value<string>

    constructor(properties: PlacementStrategy) {
        Object.assign(this, properties)
    }
}

export class Target {
    Arn!: Value<string>
    BatchParameters?: BatchParameters
    DeadLetterConfig?: DeadLetterConfig
    EcsParameters?: EcsParameters
    HttpParameters?: HttpParameters
    Id!: Value<string>
    Input?: Value<string>
    InputPath?: Value<string>
    InputTransformer?: InputTransformer
    KinesisParameters?: KinesisParameters
    RedshiftDataParameters?: RedshiftDataParameters
    RetryPolicy?: RetryPolicy
    RoleArn?: Value<string>
    RunCommandParameters?: RunCommandParameters
    SageMakerPipelineParameters?: SageMakerPipelineParameters
    SqsParameters?: SqsParameters

    constructor(properties: Target) {
        Object.assign(this, properties)
    }
}

export class KinesisParameters {
    PartitionKeyPath!: Value<string>

    constructor(properties: KinesisParameters) {
        Object.assign(this, properties)
    }
}

export class SageMakerPipelineParameters {
    PipelineParameterList?: List<SageMakerPipelineParameter>

    constructor(properties: SageMakerPipelineParameters) {
        Object.assign(this, properties)
    }
}

export class Tag {
    Key?: Value<string>
    Value?: Value<string>

    constructor(properties: Tag) {
        Object.assign(this, properties)
    }
}

export class RedshiftDataParameters {
    Database!: Value<string>
    DbUser?: Value<string>
    SecretManagerArn?: Value<string>
    Sql!: Value<string>
    StatementName?: Value<string>
    WithEvent?: Value<boolean>

    constructor(properties: RedshiftDataParameters) {
        Object.assign(this, properties)
    }
}

export class EcsParameters {
    CapacityProviderStrategy?: List<CapacityProviderStrategyItem>
    EnableECSManagedTags?: Value<boolean>
    EnableExecuteCommand?: Value<boolean>
    Group?: Value<string>
    LaunchType?: Value<string>
    NetworkConfiguration?: NetworkConfiguration
    PlacementConstraints?: List<PlacementConstraint>
    PlacementStrategies?: List<PlacementStrategy>
    PlatformVersion?: Value<string>
    PropagateTags?: Value<string>
    ReferenceId?: Value<string>
    TagList?: List<ResourceTag>
    TaskCount?: Value<number>
    TaskDefinitionArn!: Value<string>

    constructor(properties: EcsParameters) {
        Object.assign(this, properties)
    }
}

export class AwsVpcConfiguration {
    AssignPublicIp?: Value<string>
    SecurityGroups?: List<Value<string>>
    Subnets!: List<Value<string>>

    constructor(properties: AwsVpcConfiguration) {
        Object.assign(this, properties)
    }
}

export interface RuleProperties {
    Description?: Value<string>
    EventBusName?: Value<string>
    EventPattern?: {[key: string]: any}
    Name?: Value<string>
    RoleArn?: Value<string>
    ScheduleExpression?: Value<string>
    State?: Value<string>
    Targets?: List<Target>
}

export default class Rule extends ResourceBase<RuleProperties> {
    static SageMakerPipelineParameter = SageMakerPipelineParameter
    static BatchRetryStrategy = BatchRetryStrategy
    static PlacementConstraint = PlacementConstraint
    static HttpParameters = HttpParameters
    static BatchArrayProperties = BatchArrayProperties
    static BatchParameters = BatchParameters
    static RunCommandParameters = RunCommandParameters
    static DeadLetterConfig = DeadLetterConfig
    static NetworkConfiguration = NetworkConfiguration
    static RunCommandTarget = RunCommandTarget
    static CapacityProviderStrategyItem = CapacityProviderStrategyItem
    static InputTransformer = InputTransformer
    static SqsParameters = SqsParameters
    static RetryPolicy = RetryPolicy
    static PlacementStrategy = PlacementStrategy
    static Target = Target
    static KinesisParameters = KinesisParameters
    static SageMakerPipelineParameters = SageMakerPipelineParameters
    static Tag = Tag
    static RedshiftDataParameters = RedshiftDataParameters
    static EcsParameters = EcsParameters
    static AwsVpcConfiguration = AwsVpcConfiguration

    constructor(properties?: RuleProperties) {
        super('AWS::Events::Rule', properties || {})
    }
}
