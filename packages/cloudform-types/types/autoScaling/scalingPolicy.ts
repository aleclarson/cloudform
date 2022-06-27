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

export class PredictiveScalingConfiguration {
    MaxCapacityBreachBehavior?: Value<string>
    MaxCapacityBuffer?: Value<number>
    MetricSpecifications!: List<PredictiveScalingMetricSpecification>
    Mode?: Value<string>
    SchedulingBufferTime?: Value<number>

    constructor(properties: PredictiveScalingConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomizedMetricSpecification {
    Dimensions?: List<MetricDimension>
    MetricName!: Value<string>
    Namespace!: Value<string>
    Statistic!: Value<string>
    Unit?: Value<string>

    constructor(properties: CustomizedMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingPredefinedMetricPair {
    PredefinedMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredictiveScalingPredefinedMetricPair) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    Name!: Value<string>
    Value!: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class TargetTrackingConfiguration {
    CustomizedMetricSpecification?: CustomizedMetricSpecification
    DisableScaleIn?: Value<boolean>
    PredefinedMetricSpecification?: PredefinedMetricSpecification
    TargetValue!: Value<number>

    constructor(properties: TargetTrackingConfiguration) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingCustomizedScalingMetric {
    MetricDataQueries!: List<MetricDataQuery>

    constructor(properties: PredictiveScalingCustomizedScalingMetric) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingCustomizedCapacityMetric {
    MetricDataQueries!: List<MetricDataQuery>

    constructor(properties: PredictiveScalingCustomizedCapacityMetric) {
        Object.assign(this, properties)
    }
}

export class MetricStat {
    Metric!: Metric
    Stat!: Value<string>
    Unit?: Value<string>

    constructor(properties: MetricStat) {
        Object.assign(this, properties)
    }
}

export class MetricDataQuery {
    Expression?: Value<string>
    Id!: Value<string>
    Label?: Value<string>
    MetricStat?: MetricStat
    ReturnData?: Value<boolean>

    constructor(properties: MetricDataQuery) {
        Object.assign(this, properties)
    }
}

export class StepAdjustment {
    MetricIntervalLowerBound?: Value<number>
    MetricIntervalUpperBound?: Value<number>
    ScalingAdjustment!: Value<number>

    constructor(properties: StepAdjustment) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingCustomizedLoadMetric {
    MetricDataQueries!: List<MetricDataQuery>

    constructor(properties: PredictiveScalingCustomizedLoadMetric) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingPredefinedLoadMetric {
    PredefinedMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredictiveScalingPredefinedLoadMetric) {
        Object.assign(this, properties)
    }
}

export class PredefinedMetricSpecification {
    PredefinedMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredefinedMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingPredefinedScalingMetric {
    PredefinedMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredictiveScalingPredefinedScalingMetric) {
        Object.assign(this, properties)
    }
}

export class PredictiveScalingMetricSpecification {
    CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric
    CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric
    CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric
    PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric
    PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair
    PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric
    TargetValue!: Value<number>

    constructor(properties: PredictiveScalingMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class Metric {
    Dimensions?: List<MetricDimension>
    MetricName!: Value<string>
    Namespace!: Value<string>

    constructor(properties: Metric) {
        Object.assign(this, properties)
    }
}

export interface ScalingPolicyProperties {
    AdjustmentType?: Value<string>
    AutoScalingGroupName: Value<string>
    Cooldown?: Value<string>
    EstimatedInstanceWarmup?: Value<number>
    MetricAggregationType?: Value<string>
    MinAdjustmentMagnitude?: Value<number>
    PolicyType?: Value<string>
    PredictiveScalingConfiguration?: PredictiveScalingConfiguration
    ScalingAdjustment?: Value<number>
    StepAdjustments?: List<StepAdjustment>
    TargetTrackingConfiguration?: TargetTrackingConfiguration
}

export default class ScalingPolicy extends ResourceBase<ScalingPolicyProperties> {
    static PredictiveScalingConfiguration = PredictiveScalingConfiguration
    static CustomizedMetricSpecification = CustomizedMetricSpecification
    static PredictiveScalingPredefinedMetricPair = PredictiveScalingPredefinedMetricPair
    static MetricDimension = MetricDimension
    static TargetTrackingConfiguration = TargetTrackingConfiguration
    static PredictiveScalingCustomizedScalingMetric = PredictiveScalingCustomizedScalingMetric
    static PredictiveScalingCustomizedCapacityMetric = PredictiveScalingCustomizedCapacityMetric
    static MetricStat = MetricStat
    static MetricDataQuery = MetricDataQuery
    static StepAdjustment = StepAdjustment
    static PredictiveScalingCustomizedLoadMetric = PredictiveScalingCustomizedLoadMetric
    static PredictiveScalingPredefinedLoadMetric = PredictiveScalingPredefinedLoadMetric
    static PredefinedMetricSpecification = PredefinedMetricSpecification
    static PredictiveScalingPredefinedScalingMetric = PredictiveScalingPredefinedScalingMetric
    static PredictiveScalingMetricSpecification = PredictiveScalingMetricSpecification
    static Metric = Metric

    constructor(properties: ScalingPolicyProperties) {
        super('AWS::AutoScaling::ScalingPolicy', properties)
    }
}
