"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ProxyConfiguration=exports.LinuxParameters=exports.HealthCheck=exports.KeyValuePair=exports.ContainerDefinition=exports.Tmpfs=exports.Volume=exports.TaskDefinitionPlacementConstraint=exports.HostEntry=exports.VolumeFrom=exports.EnvironmentFile=exports.Secret=exports.RuntimePlatform=exports.InferenceAccelerator=exports.RepositoryCredentials=exports.HostVolumeProperties=exports.ContainerDependency=exports.Ulimit=exports.PortMapping=exports.KernelCapabilities=exports.MountPoint=exports.AuthorizationConfig=exports.DockerVolumeConfiguration=exports.ResourceRequirement=exports.EphemeralStorage=exports.SystemControl=exports.EFSVolumeConfiguration=exports.Device=exports.FirelensConfiguration=exports.LogConfiguration=void 0;const resource_1=require("../resource");class LogConfiguration{constructor(properties){Object.assign(this,properties)}}exports.LogConfiguration=LogConfiguration;class FirelensConfiguration{constructor(properties){Object.assign(this,properties)}}exports.FirelensConfiguration=FirelensConfiguration;class Device{constructor(properties){Object.assign(this,properties)}}exports.Device=Device;class EFSVolumeConfiguration{constructor(properties){Object.assign(this,properties)}}exports.EFSVolumeConfiguration=EFSVolumeConfiguration;class SystemControl{constructor(properties){Object.assign(this,properties)}}exports.SystemControl=SystemControl;class EphemeralStorage{constructor(properties){Object.assign(this,properties)}}exports.EphemeralStorage=EphemeralStorage;class ResourceRequirement{constructor(properties){Object.assign(this,properties)}}exports.ResourceRequirement=ResourceRequirement;class DockerVolumeConfiguration{constructor(properties){Object.assign(this,properties)}}exports.DockerVolumeConfiguration=DockerVolumeConfiguration;class AuthorizationConfig{constructor(properties){Object.assign(this,properties)}}exports.AuthorizationConfig=AuthorizationConfig;class MountPoint{constructor(properties){Object.assign(this,properties)}}exports.MountPoint=MountPoint;class KernelCapabilities{constructor(properties){Object.assign(this,properties)}}exports.KernelCapabilities=KernelCapabilities;class PortMapping{constructor(properties){Object.assign(this,properties)}}exports.PortMapping=PortMapping;class Ulimit{constructor(properties){Object.assign(this,properties)}}exports.Ulimit=Ulimit;class ContainerDependency{constructor(properties){Object.assign(this,properties)}}exports.ContainerDependency=ContainerDependency;class HostVolumeProperties{constructor(properties){Object.assign(this,properties)}}exports.HostVolumeProperties=HostVolumeProperties;class RepositoryCredentials{constructor(properties){Object.assign(this,properties)}}exports.RepositoryCredentials=RepositoryCredentials;class InferenceAccelerator{constructor(properties){Object.assign(this,properties)}}exports.InferenceAccelerator=InferenceAccelerator;class RuntimePlatform{constructor(properties){Object.assign(this,properties)}}exports.RuntimePlatform=RuntimePlatform;class Secret{constructor(properties){Object.assign(this,properties)}}exports.Secret=Secret;class EnvironmentFile{constructor(properties){Object.assign(this,properties)}}exports.EnvironmentFile=EnvironmentFile;class VolumeFrom{constructor(properties){Object.assign(this,properties)}}exports.VolumeFrom=VolumeFrom;class HostEntry{constructor(properties){Object.assign(this,properties)}}exports.HostEntry=HostEntry;class TaskDefinitionPlacementConstraint{constructor(properties){Object.assign(this,properties)}}exports.TaskDefinitionPlacementConstraint=TaskDefinitionPlacementConstraint;class Volume{constructor(properties){Object.assign(this,properties)}}exports.Volume=Volume;class Tmpfs{constructor(properties){Object.assign(this,properties)}}exports.Tmpfs=Tmpfs;class ContainerDefinition{constructor(properties){Object.assign(this,properties)}}exports.ContainerDefinition=ContainerDefinition;class KeyValuePair{constructor(properties){Object.assign(this,properties)}}exports.KeyValuePair=KeyValuePair;class HealthCheck{constructor(properties){Object.assign(this,properties)}}exports.HealthCheck=HealthCheck;class LinuxParameters{constructor(properties){Object.assign(this,properties)}}exports.LinuxParameters=LinuxParameters;class ProxyConfiguration{constructor(properties){Object.assign(this,properties)}}exports.ProxyConfiguration=ProxyConfiguration;class TaskDefinition extends resource_1.ResourceBase{constructor(properties){super("AWS::ECS::TaskDefinition",properties||{})}}(exports.R=TaskDefinition).LogConfiguration=LogConfiguration,TaskDefinition.FirelensConfiguration=FirelensConfiguration,TaskDefinition.Device=Device,TaskDefinition.EFSVolumeConfiguration=EFSVolumeConfiguration,TaskDefinition.SystemControl=SystemControl,TaskDefinition.EphemeralStorage=EphemeralStorage,TaskDefinition.ResourceRequirement=ResourceRequirement,TaskDefinition.DockerVolumeConfiguration=DockerVolumeConfiguration,TaskDefinition.AuthorizationConfig=AuthorizationConfig,TaskDefinition.MountPoint=MountPoint,TaskDefinition.KernelCapabilities=KernelCapabilities,TaskDefinition.PortMapping=PortMapping,TaskDefinition.Ulimit=Ulimit,TaskDefinition.ContainerDependency=ContainerDependency,TaskDefinition.HostVolumeProperties=HostVolumeProperties,TaskDefinition.RepositoryCredentials=RepositoryCredentials,TaskDefinition.InferenceAccelerator=InferenceAccelerator,TaskDefinition.RuntimePlatform=RuntimePlatform,TaskDefinition.Secret=Secret,TaskDefinition.EnvironmentFile=EnvironmentFile,TaskDefinition.VolumeFrom=VolumeFrom,TaskDefinition.HostEntry=HostEntry,TaskDefinition.TaskDefinitionPlacementConstraint=TaskDefinitionPlacementConstraint,TaskDefinition.Volume=Volume,TaskDefinition.Tmpfs=Tmpfs,TaskDefinition.ContainerDefinition=ContainerDefinition,TaskDefinition.KeyValuePair=KeyValuePair,TaskDefinition.HealthCheck=HealthCheck,TaskDefinition.LinuxParameters=LinuxParameters,TaskDefinition.ProxyConfiguration=ProxyConfiguration;