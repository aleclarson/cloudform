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

export class ComputeLimits {
    MaximumCapacityUnits!: Value<number>
    MaximumCoreCapacityUnits?: Value<number>
    MaximumOnDemandCapacityUnits?: Value<number>
    MinimumCapacityUnits!: Value<number>
    UnitType!: Value<string>

    constructor(properties: ComputeLimits) {
        Object.assign(this, properties)
    }
}

export class SpotProvisioningSpecification {
    AllocationStrategy?: Value<string>
    BlockDurationMinutes?: Value<number>
    TimeoutAction!: Value<string>
    TimeoutDurationMinutes!: Value<number>

    constructor(properties: SpotProvisioningSpecification) {
        Object.assign(this, properties)
    }
}

export class BootstrapActionConfig {
    Name!: Value<string>
    ScriptBootstrapAction!: ScriptBootstrapActionConfig

    constructor(properties: BootstrapActionConfig) {
        Object.assign(this, properties)
    }
}

export class StepConfig {
    ActionOnFailure?: Value<string>
    HadoopJarStep!: HadoopJarStepConfig
    Name!: Value<string>

    constructor(properties: StepConfig) {
        Object.assign(this, properties)
    }
}

export class EbsBlockDeviceConfig {
    VolumeSpecification!: VolumeSpecification
    VolumesPerInstance?: Value<number>

    constructor(properties: EbsBlockDeviceConfig) {
        Object.assign(this, properties)
    }
}

export class ManagedScalingPolicy {
    ComputeLimits?: ComputeLimits

    constructor(properties: ManagedScalingPolicy) {
        Object.assign(this, properties)
    }
}

export class CloudWatchAlarmDefinition {
    ComparisonOperator!: Value<string>
    Dimensions?: List<MetricDimension>
    EvaluationPeriods?: Value<number>
    MetricName!: Value<string>
    Namespace?: Value<string>
    Period!: Value<number>
    Statistic?: Value<string>
    Threshold!: Value<number>
    Unit?: Value<string>

    constructor(properties: CloudWatchAlarmDefinition) {
        Object.assign(this, properties)
    }
}

export class KeyValue {
    Key?: Value<string>
    Value?: Value<string>

    constructor(properties: KeyValue) {
        Object.assign(this, properties)
    }
}

export class VolumeSpecification {
    Iops?: Value<number>
    SizeInGB!: Value<number>
    VolumeType!: Value<string>

    constructor(properties: VolumeSpecification) {
        Object.assign(this, properties)
    }
}

export class InstanceFleetProvisioningSpecifications {
    OnDemandSpecification?: OnDemandProvisioningSpecification
    SpotSpecification?: SpotProvisioningSpecification

    constructor(properties: InstanceFleetProvisioningSpecifications) {
        Object.assign(this, properties)
    }
}

export class InstanceGroupConfig {
    AutoScalingPolicy?: AutoScalingPolicy
    BidPrice?: Value<string>
    Configurations?: List<Configuration>
    CustomAmiId?: Value<string>
    EbsConfiguration?: EbsConfiguration
    InstanceCount!: Value<number>
    InstanceType!: Value<string>
    Market?: Value<string>
    Name?: Value<string>

    constructor(properties: InstanceGroupConfig) {
        Object.assign(this, properties)
    }
}

export class KerberosAttributes {
    ADDomainJoinPassword?: Value<string>
    ADDomainJoinUser?: Value<string>
    CrossRealmTrustPrincipalPassword?: Value<string>
    KdcAdminPassword!: Value<string>
    Realm!: Value<string>

    constructor(properties: KerberosAttributes) {
        Object.assign(this, properties)
    }
}

export class Application {
    AdditionalInfo?: {[key: string]: Value<string>}
    Args?: List<Value<string>>
    Name?: Value<string>
    Version?: Value<string>

    constructor(properties: Application) {
        Object.assign(this, properties)
    }
}

export class Configuration {
    Classification?: Value<string>
    ConfigurationProperties?: {[key: string]: Value<string>}
    Configurations?: List<Configuration>

    constructor(properties: Configuration) {
        Object.assign(this, properties)
    }
}

export class ScriptBootstrapActionConfig {
    Args?: List<Value<string>>
    Path!: Value<string>

    constructor(properties: ScriptBootstrapActionConfig) {
        Object.assign(this, properties)
    }
}

export class EbsConfiguration {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>
    EbsOptimized?: Value<boolean>

    constructor(properties: EbsConfiguration) {
        Object.assign(this, properties)
    }
}

export class InstanceTypeConfig {
    BidPrice?: Value<string>
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>
    Configurations?: List<Configuration>
    CustomAmiId?: Value<string>
    EbsConfiguration?: EbsConfiguration
    InstanceType!: Value<string>
    WeightedCapacity?: Value<number>

    constructor(properties: InstanceTypeConfig) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class OnDemandProvisioningSpecification {
    AllocationStrategy!: Value<string>

    constructor(properties: OnDemandProvisioningSpecification) {
        Object.assign(this, properties)
    }
}

export class ScalingTrigger {
    CloudWatchAlarmDefinition!: CloudWatchAlarmDefinition

    constructor(properties: ScalingTrigger) {
        Object.assign(this, properties)
    }
}

export class InstanceFleetConfig {
    InstanceTypeConfigs?: List<InstanceTypeConfig>
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications
    Name?: Value<string>
    TargetOnDemandCapacity?: Value<number>
    TargetSpotCapacity?: Value<number>

    constructor(properties: InstanceFleetConfig) {
        Object.assign(this, properties)
    }
}

export class JobFlowInstancesConfig {
    AdditionalMasterSecurityGroups?: List<Value<string>>
    AdditionalSlaveSecurityGroups?: List<Value<string>>
    CoreInstanceFleet?: InstanceFleetConfig
    CoreInstanceGroup?: InstanceGroupConfig
    Ec2KeyName?: Value<string>
    Ec2SubnetId?: Value<string>
    Ec2SubnetIds?: List<Value<string>>
    EmrManagedMasterSecurityGroup?: Value<string>
    EmrManagedSlaveSecurityGroup?: Value<string>
    HadoopVersion?: Value<string>
    KeepJobFlowAliveWhenNoSteps?: Value<boolean>
    MasterInstanceFleet?: InstanceFleetConfig
    MasterInstanceGroup?: InstanceGroupConfig
    Placement?: PlacementType
    ServiceAccessSecurityGroup?: Value<string>
    TaskInstanceFleets?: List<InstanceFleetConfig>
    TaskInstanceGroups?: List<InstanceGroupConfig>
    TerminationProtected?: Value<boolean>

    constructor(properties: JobFlowInstancesConfig) {
        Object.assign(this, properties)
    }
}

export class AutoTerminationPolicy {
    IdleTimeout?: Value<number>

    constructor(properties: AutoTerminationPolicy) {
        Object.assign(this, properties)
    }
}

export class ScalingConstraints {
    MaxCapacity!: Value<number>
    MinCapacity!: Value<number>

    constructor(properties: ScalingConstraints) {
        Object.assign(this, properties)
    }
}

export class ScalingAction {
    Market?: Value<string>
    SimpleScalingPolicyConfiguration!: SimpleScalingPolicyConfiguration

    constructor(properties: ScalingAction) {
        Object.assign(this, properties)
    }
}

export class SimpleScalingPolicyConfiguration {
    AdjustmentType?: Value<string>
    CoolDown?: Value<number>
    ScalingAdjustment!: Value<number>

    constructor(properties: SimpleScalingPolicyConfiguration) {
        Object.assign(this, properties)
    }
}

export class PlacementType {
    AvailabilityZone!: Value<string>

    constructor(properties: PlacementType) {
        Object.assign(this, properties)
    }
}

export class ScalingRule {
    Action!: ScalingAction
    Description?: Value<string>
    Name!: Value<string>
    Trigger!: ScalingTrigger

    constructor(properties: ScalingRule) {
        Object.assign(this, properties)
    }
}

export class AutoScalingPolicy {
    Constraints!: ScalingConstraints
    Rules!: List<ScalingRule>

    constructor(properties: AutoScalingPolicy) {
        Object.assign(this, properties)
    }
}

export class HadoopJarStepConfig {
    Args?: List<Value<string>>
    Jar!: Value<string>
    MainClass?: Value<string>
    StepProperties?: List<KeyValue>

    constructor(properties: HadoopJarStepConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    AdditionalInfo?: {[key: string]: any}
    Applications?: List<Application>
    AutoScalingRole?: Value<string>
    AutoTerminationPolicy?: AutoTerminationPolicy
    BootstrapActions?: List<BootstrapActionConfig>
    Configurations?: List<Configuration>
    CustomAmiId?: Value<string>
    EbsRootVolumeSize?: Value<number>
    Instances: JobFlowInstancesConfig
    JobFlowRole: Value<string>
    KerberosAttributes?: KerberosAttributes
    LogEncryptionKmsKeyId?: Value<string>
    LogUri?: Value<string>
    ManagedScalingPolicy?: ManagedScalingPolicy
    Name: Value<string>
    ReleaseLabel?: Value<string>
    ScaleDownBehavior?: Value<string>
    SecurityConfiguration?: Value<string>
    ServiceRole: Value<string>
    StepConcurrencyLevel?: Value<number>
    Steps?: List<StepConfig>
    Tags?: List<ResourceTag>
    VisibleToAllUsers?: Value<boolean>
}

class Cluster extends ResourceBase<Properties> {
    static ComputeLimits = ComputeLimits
    static SpotProvisioningSpecification = SpotProvisioningSpecification
    static BootstrapActionConfig = BootstrapActionConfig
    static StepConfig = StepConfig
    static EbsBlockDeviceConfig = EbsBlockDeviceConfig
    static ManagedScalingPolicy = ManagedScalingPolicy
    static CloudWatchAlarmDefinition = CloudWatchAlarmDefinition
    static KeyValue = KeyValue
    static VolumeSpecification = VolumeSpecification
    static InstanceFleetProvisioningSpecifications = InstanceFleetProvisioningSpecifications
    static InstanceGroupConfig = InstanceGroupConfig
    static KerberosAttributes = KerberosAttributes
    static Application = Application
    static Configuration = Configuration
    static ScriptBootstrapActionConfig = ScriptBootstrapActionConfig
    static EbsConfiguration = EbsConfiguration
    static InstanceTypeConfig = InstanceTypeConfig
    static MetricDimension = MetricDimension
    static OnDemandProvisioningSpecification = OnDemandProvisioningSpecification
    static ScalingTrigger = ScalingTrigger
    static InstanceFleetConfig = InstanceFleetConfig
    static JobFlowInstancesConfig = JobFlowInstancesConfig
    static AutoTerminationPolicy = AutoTerminationPolicy
    static ScalingConstraints = ScalingConstraints
    static ScalingAction = ScalingAction
    static SimpleScalingPolicyConfiguration = SimpleScalingPolicyConfiguration
    static PlacementType = PlacementType
    static ScalingRule = ScalingRule
    static AutoScalingPolicy = AutoScalingPolicy
    static HadoopJarStepConfig = HadoopJarStepConfig

    constructor(properties: Properties) {
        super('AWS::EMR::Cluster', properties)
    }
}
export { Cluster as R }
