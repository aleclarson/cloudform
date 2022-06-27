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

export class LaunchTemplateOverrides {
    InstanceRequirements?: InstanceRequirements
    InstanceType?: Value<string>
    LaunchTemplateSpecification?: LaunchTemplateSpecification
    WeightedCapacity?: Value<string>

    constructor(properties: LaunchTemplateOverrides) {
        Object.assign(this, properties)
    }
}

export class AcceleratorTotalMemoryMiBRequest {
    Max?: Value<number>
    Min?: Value<number>

    constructor(properties: AcceleratorTotalMemoryMiBRequest) {
        Object.assign(this, properties)
    }
}

export class BaselineEbsBandwidthMbpsRequest {
    Max?: Value<number>
    Min?: Value<number>

    constructor(properties: BaselineEbsBandwidthMbpsRequest) {
        Object.assign(this, properties)
    }
}

export class VCpuCountRequest {
    Max?: Value<number>
    Min?: Value<number>

    constructor(properties: VCpuCountRequest) {
        Object.assign(this, properties)
    }
}

export class AcceleratorCountRequest {
    Max?: Value<number>
    Min?: Value<number>

    constructor(properties: AcceleratorCountRequest) {
        Object.assign(this, properties)
    }
}

export class MetricsCollection {
    Granularity!: Value<string>
    Metrics?: List<Value<string>>

    constructor(properties: MetricsCollection) {
        Object.assign(this, properties)
    }
}

export class InstancesDistribution {
    OnDemandAllocationStrategy?: Value<string>
    OnDemandBaseCapacity?: Value<number>
    OnDemandPercentageAboveBaseCapacity?: Value<number>
    SpotAllocationStrategy?: Value<string>
    SpotInstancePools?: Value<number>
    SpotMaxPrice?: Value<string>

    constructor(properties: InstancesDistribution) {
        Object.assign(this, properties)
    }
}

export class TotalLocalStorageGBRequest {
    Max?: Value<number>
    Min?: Value<number>

    constructor(properties: TotalLocalStorageGBRequest) {
        Object.assign(this, properties)
    }
}

export class LifecycleHookSpecification {
    DefaultResult?: Value<string>
    HeartbeatTimeout?: Value<number>
    LifecycleHookName!: Value<string>
    LifecycleTransition!: Value<string>
    NotificationMetadata?: Value<string>
    NotificationTargetARN?: Value<string>
    RoleARN?: Value<string>

    constructor(properties: LifecycleHookSpecification) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateSpecification {
    LaunchTemplateId?: Value<string>
    LaunchTemplateName?: Value<string>
    Version!: Value<string>

    constructor(properties: LaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class InstanceRequirements {
    AcceleratorCount?: AcceleratorCountRequest
    AcceleratorManufacturers?: List<Value<string>>
    AcceleratorNames?: List<Value<string>>
    AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest
    AcceleratorTypes?: List<Value<string>>
    BareMetal?: Value<string>
    BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest
    BurstablePerformance?: Value<string>
    CpuManufacturers?: List<Value<string>>
    ExcludedInstanceTypes?: List<Value<string>>
    InstanceGenerations?: List<Value<string>>
    LocalStorage?: Value<string>
    LocalStorageTypes?: List<Value<string>>
    MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest
    MemoryMiB?: MemoryMiBRequest
    NetworkInterfaceCount?: NetworkInterfaceCountRequest
    OnDemandMaxPricePercentageOverLowestPrice?: Value<number>
    RequireHibernateSupport?: Value<boolean>
    SpotMaxPricePercentageOverLowestPrice?: Value<number>
    TotalLocalStorageGB?: TotalLocalStorageGBRequest
    VCpuCount?: VCpuCountRequest

    constructor(properties: InstanceRequirements) {
        Object.assign(this, properties)
    }
}

export class NetworkInterfaceCountRequest {
    Max?: Value<number>
    Min?: Value<number>

    constructor(properties: NetworkInterfaceCountRequest) {
        Object.assign(this, properties)
    }
}

export class MixedInstancesPolicy {
    InstancesDistribution?: InstancesDistribution
    LaunchTemplate!: LaunchTemplate

    constructor(properties: MixedInstancesPolicy) {
        Object.assign(this, properties)
    }
}

export class NotificationConfiguration {
    NotificationTypes?: List<Value<string>>
    TopicARN!: Value<string>

    constructor(properties: NotificationConfiguration) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplate {
    LaunchTemplateSpecification!: LaunchTemplateSpecification
    Overrides?: List<LaunchTemplateOverrides>

    constructor(properties: LaunchTemplate) {
        Object.assign(this, properties)
    }
}

export class TagProperty {
    Key!: Value<string>
    PropagateAtLaunch!: Value<boolean>
    Value!: Value<string>

    constructor(properties: TagProperty) {
        Object.assign(this, properties)
    }
}

export class MemoryGiBPerVCpuRequest {
    Max?: Value<number>
    Min?: Value<number>

    constructor(properties: MemoryGiBPerVCpuRequest) {
        Object.assign(this, properties)
    }
}

export class MemoryMiBRequest {
    Max?: Value<number>
    Min?: Value<number>

    constructor(properties: MemoryMiBRequest) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    AutoScalingGroupName?: Value<string>
    AvailabilityZones?: List<Value<string>>
    CapacityRebalance?: Value<boolean>
    Context?: Value<string>
    Cooldown?: Value<string>
    DefaultInstanceWarmup?: Value<number>
    DesiredCapacity?: Value<string>
    DesiredCapacityType?: Value<string>
    HealthCheckGracePeriod?: Value<number>
    HealthCheckType?: Value<string>
    InstanceId?: Value<string>
    LaunchConfigurationName?: Value<string>
    LaunchTemplate?: LaunchTemplateSpecification
    LifecycleHookSpecificationList?: List<LifecycleHookSpecification>
    LoadBalancerNames?: List<Value<string>>
    MaxInstanceLifetime?: Value<number>
    MaxSize: Value<string>
    MetricsCollection?: List<MetricsCollection>
    MinSize: Value<string>
    MixedInstancesPolicy?: MixedInstancesPolicy
    NewInstancesProtectedFromScaleIn?: Value<boolean>
    NotificationConfigurations?: List<NotificationConfiguration>
    PlacementGroup?: Value<string>
    ServiceLinkedRoleARN?: Value<string>
    Tags?: List<TagProperty>
    TargetGroupARNs?: List<Value<string>>
    TerminationPolicies?: List<Value<string>>
    VPCZoneIdentifier?: List<Value<string>>
}

class AutoScalingGroup extends ResourceBase<Properties> {
    static LaunchTemplateOverrides = LaunchTemplateOverrides
    static AcceleratorTotalMemoryMiBRequest = AcceleratorTotalMemoryMiBRequest
    static BaselineEbsBandwidthMbpsRequest = BaselineEbsBandwidthMbpsRequest
    static VCpuCountRequest = VCpuCountRequest
    static AcceleratorCountRequest = AcceleratorCountRequest
    static MetricsCollection = MetricsCollection
    static InstancesDistribution = InstancesDistribution
    static TotalLocalStorageGBRequest = TotalLocalStorageGBRequest
    static LifecycleHookSpecification = LifecycleHookSpecification
    static LaunchTemplateSpecification = LaunchTemplateSpecification
    static InstanceRequirements = InstanceRequirements
    static NetworkInterfaceCountRequest = NetworkInterfaceCountRequest
    static MixedInstancesPolicy = MixedInstancesPolicy
    static NotificationConfiguration = NotificationConfiguration
    static LaunchTemplate = LaunchTemplate
    static TagProperty = TagProperty
    static MemoryGiBPerVCpuRequest = MemoryGiBPerVCpuRequest
    static MemoryMiBRequest = MemoryMiBRequest

    constructor(properties: Properties) {
        super('AWS::AutoScaling::AutoScalingGroup', properties)
    }
}
export { AutoScalingGroup as R }
