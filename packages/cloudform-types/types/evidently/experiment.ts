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

export class OnlineAbConfigObject {
    ControlTreatmentName?: Value<string>
    TreatmentWeights?: List<TreatmentToWeight>

    constructor(properties: OnlineAbConfigObject) {
        Object.assign(this, properties)
    }
}

export class TreatmentToWeight {
    Treatment!: Value<string>
    SplitWeight!: Value<number>

    constructor(properties: TreatmentToWeight) {
        Object.assign(this, properties)
    }
}

export class RunningStatusObject {
    Status?: Value<string>
    AnalysisCompleteTime?: Value<string>
    Reason?: Value<string>
    DesiredState?: Value<string>

    constructor(properties: RunningStatusObject) {
        Object.assign(this, properties)
    }
}

export class TreatmentObject {
    TreatmentName!: Value<string>
    Description?: Value<string>
    Feature!: Value<string>
    Variation!: Value<string>

    constructor(properties: TreatmentObject) {
        Object.assign(this, properties)
    }
}

export class MetricGoalObject {
    MetricName!: Value<string>
    EntityIdKey!: Value<string>
    ValueKey!: Value<string>
    EventPattern!: Value<string>
    UnitLabel?: Value<string>
    DesiredChange!: Value<string>

    constructor(properties: MetricGoalObject) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name: Value<string>
    Project: Value<string>
    Description?: Value<string>
    RunningStatus?: RunningStatusObject
    RandomizationSalt?: Value<string>
    Treatments: List<TreatmentObject>
    MetricGoals: List<MetricGoalObject>
    SamplingRate?: Value<number>
    OnlineAbConfig: OnlineAbConfigObject
    Tags?: List<ResourceTag>
}

class Experiment extends ResourceBase<Properties> {
    static OnlineAbConfigObject = OnlineAbConfigObject
    static TreatmentToWeight = TreatmentToWeight
    static RunningStatusObject = RunningStatusObject
    static TreatmentObject = TreatmentObject
    static MetricGoalObject = MetricGoalObject

    constructor(properties: Properties) {
        super('AWS::Evidently::Experiment', properties)
    }
}
export { Experiment as R }
