import*as _0 from'./scalingPolicy';import*as _1 from'./autoScalingGroup';import*as _2 from'./scheduledAction';import*as _3 from'./launchConfiguration';import*as _4 from'./lifecycleHook';import*as _5 from'./warmPool';export declare namespace AutoScaling{const ScalingPolicy:typeof _0.R;const AutoScalingGroup:typeof _1.R;const ScheduledAction:typeof _2.R;const LaunchConfiguration:typeof _3.R;const LifecycleHook:typeof _4.R;const WarmPool:typeof _5.R;type ScalingPolicy=_0.R;type AutoScalingGroup=_1.R;type ScheduledAction=_2.R;type LaunchConfiguration=_3.R;type LifecycleHook=_4.R;type WarmPool=_5.R;namespace ScalingPolicy{type PredictiveScalingConfiguration=_0.PredictiveScalingConfiguration;type CustomizedMetricSpecification=_0.CustomizedMetricSpecification;type PredictiveScalingPredefinedMetricPair=_0.PredictiveScalingPredefinedMetricPair;type MetricDimension=_0.MetricDimension;type TargetTrackingConfiguration=_0.TargetTrackingConfiguration;type PredictiveScalingCustomizedScalingMetric=_0.PredictiveScalingCustomizedScalingMetric;type PredictiveScalingCustomizedCapacityMetric=_0.PredictiveScalingCustomizedCapacityMetric;type MetricStat=_0.MetricStat;type MetricDataQuery=_0.MetricDataQuery;type StepAdjustment=_0.StepAdjustment;type PredictiveScalingCustomizedLoadMetric=_0.PredictiveScalingCustomizedLoadMetric;type PredictiveScalingPredefinedLoadMetric=_0.PredictiveScalingPredefinedLoadMetric;type PredefinedMetricSpecification=_0.PredefinedMetricSpecification;type PredictiveScalingPredefinedScalingMetric=_0.PredictiveScalingPredefinedScalingMetric;type PredictiveScalingMetricSpecification=_0.PredictiveScalingMetricSpecification;type Metric=_0.Metric;}namespace AutoScalingGroup{type LaunchTemplateOverrides=_1.LaunchTemplateOverrides;type AcceleratorTotalMemoryMiBRequest=_1.AcceleratorTotalMemoryMiBRequest;type BaselineEbsBandwidthMbpsRequest=_1.BaselineEbsBandwidthMbpsRequest;type VCpuCountRequest=_1.VCpuCountRequest;type AcceleratorCountRequest=_1.AcceleratorCountRequest;type MetricsCollection=_1.MetricsCollection;type InstancesDistribution=_1.InstancesDistribution;type TotalLocalStorageGBRequest=_1.TotalLocalStorageGBRequest;type LifecycleHookSpecification=_1.LifecycleHookSpecification;type LaunchTemplateSpecification=_1.LaunchTemplateSpecification;type InstanceRequirements=_1.InstanceRequirements;type NetworkInterfaceCountRequest=_1.NetworkInterfaceCountRequest;type MixedInstancesPolicy=_1.MixedInstancesPolicy;type NotificationConfiguration=_1.NotificationConfiguration;type LaunchTemplate=_1.LaunchTemplate;type TagProperty=_1.TagProperty;type MemoryGiBPerVCpuRequest=_1.MemoryGiBPerVCpuRequest;type MemoryMiBRequest=_1.MemoryMiBRequest;}namespace LaunchConfiguration{type BlockDeviceMapping=_3.BlockDeviceMapping;type MetadataOptions=_3.MetadataOptions;type BlockDevice=_3.BlockDevice;}namespace WarmPool{type InstanceReusePolicy=_5.InstanceReusePolicy;}}