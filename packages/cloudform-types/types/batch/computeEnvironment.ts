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

export class ComputeResources {
    AllocationStrategy?: Value<string>
    BidPercentage?: Value<number>
    DesiredvCpus?: Value<number>
    Ec2Configuration?: List<Ec2ConfigurationObject>
    Ec2KeyPair?: Value<string>
    ImageId?: Value<string>
    InstanceRole?: Value<string>
    InstanceTypes?: List<Value<string>>
    LaunchTemplate?: LaunchTemplateSpecification
    MaxvCpus!: Value<number>
    MinvCpus?: Value<number>
    PlacementGroup?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    SpotIamFleetRole?: Value<string>
    Subnets!: List<Value<string>>
    Tags?: {[key: string]: Value<string>}
    Type!: Value<string>
    UpdateToLatestImageVersion?: Value<boolean>

    constructor(properties: ComputeResources) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateSpecification {
    LaunchTemplateId?: Value<string>
    LaunchTemplateName?: Value<string>
    Version?: Value<string>

    constructor(properties: LaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class UpdatePolicy {
    TerminateJobsOnUpdate?: Value<boolean>
    JobExecutionTimeoutMinutes?: Value<number>

    constructor(properties: UpdatePolicy) {
        Object.assign(this, properties)
    }
}

export class Ec2ConfigurationObject {
    ImageIdOverride?: Value<string>
    ImageType!: Value<string>

    constructor(properties: Ec2ConfigurationObject) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    ComputeEnvironmentName?: Value<string>
    ComputeResources?: ComputeResources
    ReplaceComputeEnvironment?: Value<boolean>
    ServiceRole?: Value<string>
    State?: Value<string>
    Tags?: {[key: string]: Value<string>}
    Type: Value<string>
    UpdatePolicy?: UpdatePolicy
    UnmanagedvCpus?: Value<number>
}

class ComputeEnvironment extends ResourceBase<Properties> {
    static ComputeResources = ComputeResources
    static LaunchTemplateSpecification = LaunchTemplateSpecification
    static UpdatePolicy = UpdatePolicy
    static Ec2ConfigurationObject = Ec2ConfigurationObject

    constructor(properties: Properties) {
        super('AWS::Batch::ComputeEnvironment', properties)
    }
}
export { ComputeEnvironment as R }
