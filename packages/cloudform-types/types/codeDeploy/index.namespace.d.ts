import*as _0 from'./deploymentConfig';import*as _1 from'./application';import*as _2 from'./deploymentGroup';export declare namespace CodeDeploy{const DeploymentConfig:typeof _0.R;const Application:typeof _1.R;const DeploymentGroup:typeof _2.R;type DeploymentConfig=_0.R;type Application=_1.R;type DeploymentGroup=_2.R;namespace DeploymentConfig{type TimeBasedCanary=_0.TimeBasedCanary;type MinimumHealthyHosts=_0.MinimumHealthyHosts;type TrafficRoutingConfig=_0.TrafficRoutingConfig;type TimeBasedLinear=_0.TimeBasedLinear;}namespace DeploymentGroup{type TargetGroupInfo=_2.TargetGroupInfo;type OnPremisesTagSetListObject=_2.OnPremisesTagSetListObject;type DeploymentStyle=_2.DeploymentStyle;type EC2TagFilter=_2.EC2TagFilter;type OnPremisesTagSet=_2.OnPremisesTagSet;type LoadBalancerInfo=_2.LoadBalancerInfo;type RevisionLocation=_2.RevisionLocation;type TriggerConfig=_2.TriggerConfig;type EC2TagSet=_2.EC2TagSet;type AlarmConfiguration=_2.AlarmConfiguration;type BlueGreenDeploymentConfiguration=_2.BlueGreenDeploymentConfiguration;type DeploymentReadyOption=_2.DeploymentReadyOption;type AutoRollbackConfiguration=_2.AutoRollbackConfiguration;type S3Location=_2.S3Location;type BlueInstanceTerminationOption=_2.BlueInstanceTerminationOption;type TagFilter=_2.TagFilter;type GitHubLocation=_2.GitHubLocation;type TrafficRoute=_2.TrafficRoute;type ELBInfo=_2.ELBInfo;type Alarm=_2.Alarm;type GreenFleetProvisioningOption=_2.GreenFleetProvisioningOption;type Deployment=_2.Deployment;type ECSService=_2.ECSService;type TargetGroupPairInfo=_2.TargetGroupPairInfo;type EC2TagSetListObject=_2.EC2TagSetListObject;}}