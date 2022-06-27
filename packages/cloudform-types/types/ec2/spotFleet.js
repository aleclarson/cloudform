"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class SpotPlacement{constructor(properties){Object.assign(this,properties)}}exports.SpotPlacement=SpotPlacement;class LaunchTemplateOverrides{constructor(properties){Object.assign(this,properties)}}exports.LaunchTemplateOverrides=LaunchTemplateOverrides;class IamInstanceProfileSpecification{constructor(properties){Object.assign(this,properties)}}exports.IamInstanceProfileSpecification=IamInstanceProfileSpecification;class InstanceNetworkInterfaceSpecification{constructor(properties){Object.assign(this,properties)}}exports.InstanceNetworkInterfaceSpecification=InstanceNetworkInterfaceSpecification;class SpotFleetLaunchSpecification{constructor(properties){Object.assign(this,properties)}}exports.SpotFleetLaunchSpecification=SpotFleetLaunchSpecification;class ClassicLoadBalancersConfig{constructor(properties){Object.assign(this,properties)}}exports.ClassicLoadBalancersConfig=ClassicLoadBalancersConfig;class SpotMaintenanceStrategies{constructor(properties){Object.assign(this,properties)}}exports.SpotMaintenanceStrategies=SpotMaintenanceStrategies;class SpotFleetTagSpecification{constructor(properties){Object.assign(this,properties)}}exports.SpotFleetTagSpecification=SpotFleetTagSpecification;class PrivateIpAddressSpecification{constructor(properties){Object.assign(this,properties)}}exports.PrivateIpAddressSpecification=PrivateIpAddressSpecification;class SpotCapacityRebalance{constructor(properties){Object.assign(this,properties)}}exports.SpotCapacityRebalance=SpotCapacityRebalance;class EbsBlockDevice{constructor(properties){Object.assign(this,properties)}}exports.EbsBlockDevice=EbsBlockDevice;class LoadBalancersConfig{constructor(properties){Object.assign(this,properties)}}exports.LoadBalancersConfig=LoadBalancersConfig;class FleetLaunchTemplateSpecification{constructor(properties){Object.assign(this,properties)}}exports.FleetLaunchTemplateSpecification=FleetLaunchTemplateSpecification;class TargetGroup{constructor(properties){Object.assign(this,properties)}}exports.TargetGroup=TargetGroup;class SpotFleetMonitoring{constructor(properties){Object.assign(this,properties)}}exports.SpotFleetMonitoring=SpotFleetMonitoring;class ClassicLoadBalancer{constructor(properties){Object.assign(this,properties)}}exports.ClassicLoadBalancer=ClassicLoadBalancer;class LaunchTemplateConfig{constructor(properties){Object.assign(this,properties)}}exports.LaunchTemplateConfig=LaunchTemplateConfig;class SpotFleetRequestConfigData{constructor(properties){Object.assign(this,properties)}}exports.SpotFleetRequestConfigData=SpotFleetRequestConfigData;class InstanceIpv6Address{constructor(properties){Object.assign(this,properties)}}exports.InstanceIpv6Address=InstanceIpv6Address;class TargetGroupsConfig{constructor(properties){Object.assign(this,properties)}}exports.TargetGroupsConfig=TargetGroupsConfig;class GroupIdentifier{constructor(properties){Object.assign(this,properties)}}exports.GroupIdentifier=GroupIdentifier;class BlockDeviceMapping{constructor(properties){Object.assign(this,properties)}}exports.BlockDeviceMapping=BlockDeviceMapping;class SpotFleet extends resource_1.ResourceBase{constructor(properties){super("AWS::EC2::SpotFleet",properties)}}(exports.default=SpotFleet).SpotPlacement=SpotPlacement,SpotFleet.LaunchTemplateOverrides=LaunchTemplateOverrides,SpotFleet.IamInstanceProfileSpecification=IamInstanceProfileSpecification,SpotFleet.InstanceNetworkInterfaceSpecification=InstanceNetworkInterfaceSpecification,SpotFleet.SpotFleetLaunchSpecification=SpotFleetLaunchSpecification,SpotFleet.ClassicLoadBalancersConfig=ClassicLoadBalancersConfig,SpotFleet.SpotMaintenanceStrategies=SpotMaintenanceStrategies,SpotFleet.SpotFleetTagSpecification=SpotFleetTagSpecification,SpotFleet.PrivateIpAddressSpecification=PrivateIpAddressSpecification,SpotFleet.SpotCapacityRebalance=SpotCapacityRebalance,SpotFleet.EbsBlockDevice=EbsBlockDevice,SpotFleet.LoadBalancersConfig=LoadBalancersConfig,SpotFleet.FleetLaunchTemplateSpecification=FleetLaunchTemplateSpecification,SpotFleet.TargetGroup=TargetGroup,SpotFleet.SpotFleetMonitoring=SpotFleetMonitoring,SpotFleet.ClassicLoadBalancer=ClassicLoadBalancer,SpotFleet.LaunchTemplateConfig=LaunchTemplateConfig,SpotFleet.SpotFleetRequestConfigData=SpotFleetRequestConfigData,SpotFleet.InstanceIpv6Address=InstanceIpv6Address,SpotFleet.TargetGroupsConfig=TargetGroupsConfig,SpotFleet.GroupIdentifier=GroupIdentifier,SpotFleet.BlockDeviceMapping=BlockDeviceMapping,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class Subnet extends resource_1.ResourceBase{constructor(properties){super("AWS::EC2::Subnet",properties)}}exports.default=Subnet;