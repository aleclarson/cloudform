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

import * as _0 from './cluster'
import * as _1 from './service'
import * as _2 from './clusterCapacityProviderAssociations'
import * as _3 from './taskDefinition'
import * as _4 from './capacityProvider'
import * as _5 from './primaryTaskSet'
import * as _6 from './taskSet'

export namespace ECS {
  export const Cluster = _0.R
  export const Service = _1.R
  export const ClusterCapacityProviderAssociations = _2.R
  export const TaskDefinition = _3.R
  export const CapacityProvider = _4.R
  export const PrimaryTaskSet = _5.R
  export const TaskSet = _6.R

  export type Cluster = _0.R
  export type Service = _1.R
  export type ClusterCapacityProviderAssociations = _2.R
  export type TaskDefinition = _3.R
  export type CapacityProvider = _4.R
  export type PrimaryTaskSet = _5.R
  export type TaskSet = _6.R

  export namespace Cluster {
    export type ClusterSettings = _0.ClusterSettings
    export type ExecuteCommandLogConfiguration = _0.ExecuteCommandLogConfiguration
    export type ExecuteCommandConfiguration = _0.ExecuteCommandConfiguration
    export type ClusterConfiguration = _0.ClusterConfiguration
    export type CapacityProviderStrategyItem = _0.CapacityProviderStrategyItem
  }
  export namespace Service {
    export type PlacementStrategy = _1.PlacementStrategy
    export type DeploymentController = _1.DeploymentController
    export type PlacementConstraint = _1.PlacementConstraint
    export type LoadBalancer = _1.LoadBalancer
    export type DeploymentConfiguration = _1.DeploymentConfiguration
    export type AwsVpcConfiguration = _1.AwsVpcConfiguration
    export type NetworkConfiguration = _1.NetworkConfiguration
    export type CapacityProviderStrategyItem = _1.CapacityProviderStrategyItem
    export type DeploymentCircuitBreaker = _1.DeploymentCircuitBreaker
    export type ServiceRegistry = _1.ServiceRegistry
  }
  export namespace ClusterCapacityProviderAssociations {
    export type CapacityProviderStrategy = _2.CapacityProviderStrategy
  }
  export namespace TaskDefinition {
    export type LogConfiguration = _3.LogConfiguration
    export type FirelensConfiguration = _3.FirelensConfiguration
    export type Device = _3.Device
    export type EFSVolumeConfiguration = _3.EFSVolumeConfiguration
    export type SystemControl = _3.SystemControl
    export type EphemeralStorage = _3.EphemeralStorage
    export type ResourceRequirement = _3.ResourceRequirement
    export type DockerVolumeConfiguration = _3.DockerVolumeConfiguration
    export type AuthorizationConfig = _3.AuthorizationConfig
    export type MountPoint = _3.MountPoint
    export type KernelCapabilities = _3.KernelCapabilities
    export type PortMapping = _3.PortMapping
    export type Ulimit = _3.Ulimit
    export type ContainerDependency = _3.ContainerDependency
    export type HostVolumeProperties = _3.HostVolumeProperties
    export type RepositoryCredentials = _3.RepositoryCredentials
    export type InferenceAccelerator = _3.InferenceAccelerator
    export type RuntimePlatform = _3.RuntimePlatform
    export type Secret = _3.Secret
    export type EnvironmentFile = _3.EnvironmentFile
    export type VolumeFrom = _3.VolumeFrom
    export type HostEntry = _3.HostEntry
    export type TaskDefinitionPlacementConstraint = _3.TaskDefinitionPlacementConstraint
    export type Volume = _3.Volume
    export type Tmpfs = _3.Tmpfs
    export type ContainerDefinition = _3.ContainerDefinition
    export type KeyValuePair = _3.KeyValuePair
    export type HealthCheck = _3.HealthCheck
    export type LinuxParameters = _3.LinuxParameters
    export type ProxyConfiguration = _3.ProxyConfiguration
  }
  export namespace CapacityProvider {
    export type AutoScalingGroupProvider = _4.AutoScalingGroupProvider
    export type ManagedScaling = _4.ManagedScaling
  }
  export namespace TaskSet {
    export type NetworkConfiguration = _6.NetworkConfiguration
    export type ServiceRegistry = _6.ServiceRegistry
    export type LoadBalancer = _6.LoadBalancer
    export type AwsVpcConfiguration = _6.AwsVpcConfiguration
    export type Scale = _6.Scale
  }
}
