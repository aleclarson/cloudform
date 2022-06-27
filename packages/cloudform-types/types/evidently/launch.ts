/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ExecutionStatusObject {
    Status!: Value<string>
    DesiredState?: Value<string>
    Reason?: Value<string>

    constructor(properties: ExecutionStatusObject) {
        Object.assign(this, properties)
    }
}

export class MetricDefinitionObject {
    MetricName!: Value<string>
    EntityIdKey!: Value<string>
    ValueKey!: Value<string>
    EventPattern!: Value<string>
    UnitLabel?: Value<string>

    constructor(properties: MetricDefinitionObject) {
        Object.assign(this, properties)
    }
}

export class LaunchGroupObject {
    GroupName!: Value<string>
    Description?: Value<string>
    Feature!: Value<string>
    Variation!: Value<string>

    constructor(properties: LaunchGroupObject) {
        Object.assign(this, properties)
    }
}

export class StepConfig {
    StartTime!: Value<string>
    GroupWeights!: List<GroupToWeight>

    constructor(properties: StepConfig) {
        Object.assign(this, properties)
    }
}

export class GroupToWeight {
    GroupName!: Value<string>
    SplitWeight!: Value<number>

    constructor(properties: GroupToWeight) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name: Value<string>
    Project: Value<string>
    Description?: Value<string>
    RandomizationSalt?: Value<string>
    ScheduledSplitsConfig: List<StepConfig>
    Groups: List<LaunchGroupObject>
    MetricMonitors?: List<MetricDefinitionObject>
    Tags?: List<ResourceTag>
    ExecutionStatus?: ExecutionStatusObject
}

class Launch extends ResourceBase<Properties> {
    static ExecutionStatusObject = ExecutionStatusObject
    static MetricDefinitionObject = MetricDefinitionObject
    static LaunchGroupObject = LaunchGroupObject
    static StepConfig = StepConfig
    static GroupToWeight = GroupToWeight

    constructor(properties: Properties) {
        super('AWS::Evidently::Launch', properties)
    }
}
export { Launch as R }
