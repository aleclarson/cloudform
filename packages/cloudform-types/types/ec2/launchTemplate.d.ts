import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class BlockDeviceMapping{Ebs?:Ebs;NoDevice?:Value<string>;VirtualName?:Value<string>;DeviceName?:Value<string>;constructor(properties:BlockDeviceMapping);}export declare class SpotOptions{SpotInstanceType?:Value<string>;InstanceInterruptionBehavior?:Value<string>;MaxPrice?:Value<string>;BlockDurationMinutes?:Value<number>;ValidUntil?:Value<string>;constructor(properties:SpotOptions);}export declare class AcceleratorTotalMemoryMiB{Min?:Value<number>;Max?:Value<number>;constructor(properties:AcceleratorTotalMemoryMiB);}export declare class ElasticGpuSpecification{Type?:Value<string>;constructor(properties:ElasticGpuSpecification);}export declare class TagSpecification{ResourceType?:Value<string>;Tags?:List<ResourceTag>;constructor(properties:TagSpecification);}export declare class Ebs{SnapshotId?:Value<string>;VolumeType?:Value<string>;KmsKeyId?:Value<string>;Encrypted?:Value<boolean>;Throughput?:Value<number>;Iops?:Value<number>;VolumeSize?:Value<number>;DeleteOnTermination?:Value<boolean>;constructor(properties:Ebs);}export declare class BaselineEbsBandwidthMbps{Min?:Value<number>;Max?:Value<number>;constructor(properties:BaselineEbsBandwidthMbps);}export declare class EnclaveOptions{Enabled?:Value<boolean>;constructor(properties:EnclaveOptions);}export declare class LaunchTemplateData{SecurityGroups?:List<Value<string>>;TagSpecifications?:List<TagSpecification>;UserData?:Value<string>;BlockDeviceMappings?:List<BlockDeviceMapping>;MaintenanceOptions?:MaintenanceOptions;IamInstanceProfile?:IamInstanceProfile;KernelId?:Value<string>;EbsOptimized?:Value<boolean>;ElasticGpuSpecifications?:List<ElasticGpuSpecification>;ElasticInferenceAccelerators?:List<LaunchTemplateElasticInferenceAccelerator>;Placement?:Placement;NetworkInterfaces?:List<NetworkInterface>;EnclaveOptions?:EnclaveOptions;ImageId?:Value<string>;InstanceType?:Value<string>;Monitoring?:Monitoring;HibernationOptions?:HibernationOptions;MetadataOptions?:MetadataOptions;LicenseSpecifications?:List<LicenseSpecification>;InstanceInitiatedShutdownBehavior?:Value<string>;DisableApiStop?:Value<boolean>;CpuOptions?:CpuOptions;PrivateDnsNameOptions?:PrivateDnsNameOptions;SecurityGroupIds?:List<Value<string>>;KeyName?:Value<string>;DisableApiTermination?:Value<boolean>;InstanceMarketOptions?:InstanceMarketOptions;InstanceRequirements?:InstanceRequirements;RamDiskId?:Value<string>;CapacityReservationSpecification?:CapacityReservationSpecification;CreditSpecification?:CreditSpecification;constructor(properties:LaunchTemplateData);}export declare class MaintenanceOptions{AutoRecovery?:Value<string>;constructor(properties:MaintenanceOptions);}export declare class MetadataOptions{HttpPutResponseHopLimit?:Value<number>;HttpTokens?:Value<string>;HttpProtocolIpv6?:Value<string>;InstanceMetadataTags?:Value<string>;HttpEndpoint?:Value<string>;constructor(properties:MetadataOptions);}export declare class CapacityReservationSpecification{CapacityReservationPreference?:Value<string>;CapacityReservationTarget?:CapacityReservationTarget;constructor(properties:CapacityReservationSpecification);}export declare class NetworkInterfaceCount{Min?:Value<number>;Max?:Value<number>;constructor(properties:NetworkInterfaceCount);}export declare class CapacityReservationTarget{CapacityReservationResourceGroupArn?:Value<string>;CapacityReservationId?:Value<string>;constructor(properties:CapacityReservationTarget);}export declare class CpuOptions{ThreadsPerCore?:Value<number>;CoreCount?:Value<number>;constructor(properties:CpuOptions);}export declare class PrivateIpAdd{PrivateIpAddress?:Value<string>;Primary?:Value<boolean>;constructor(properties:PrivateIpAdd);}export declare class PrivateDnsNameOptions{EnableResourceNameDnsARecord?:Value<boolean>;HostnameType?:Value<string>;EnableResourceNameDnsAAAARecord?:Value<boolean>;constructor(properties:PrivateDnsNameOptions);}export declare class InstanceRequirements{LocalStorageTypes?:List<Value<string>>;InstanceGenerations?:List<Value<string>>;NetworkInterfaceCount?:NetworkInterfaceCount;MemoryGiBPerVCpu?:MemoryGiBPerVCpu;AcceleratorTypes?:List<Value<string>>;VCpuCount?:VCpuCount;ExcludedInstanceTypes?:List<Value<string>>;AcceleratorManufacturers?:List<Value<string>>;LocalStorage?:Value<string>;CpuManufacturers?:List<Value<string>>;AcceleratorCount?:AcceleratorCount;BareMetal?:Value<string>;RequireHibernateSupport?:Value<boolean>;SpotMaxPricePercentageOverLowestPrice?:Value<number>;BaselineEbsBandwidthMbps?:BaselineEbsBandwidthMbps;OnDemandMaxPricePercentageOverLowestPrice?:Value<number>;AcceleratorNames?:List<Value<string>>;AcceleratorTotalMemoryMiB?:AcceleratorTotalMemoryMiB;BurstablePerformance?:Value<string>;MemoryMiB?:MemoryMiB;TotalLocalStorageGB?:TotalLocalStorageGB;constructor(properties:InstanceRequirements);}export declare class IamInstanceProfile{Arn?:Value<string>;Name?:Value<string>;constructor(properties:IamInstanceProfile);}export declare class LicenseSpecification{LicenseConfigurationArn?:Value<string>;constructor(properties:LicenseSpecification);}export declare class HibernationOptions{Configured?:Value<boolean>;constructor(properties:HibernationOptions);}export declare class VCpuCount{Min?:Value<number>;Max?:Value<number>;constructor(properties:VCpuCount);}export declare class InstanceMarketOptions{SpotOptions?:SpotOptions;MarketType?:Value<string>;constructor(properties:InstanceMarketOptions);}export declare class CreditSpecification{CpuCredits?:Value<string>;constructor(properties:CreditSpecification);}export declare class TotalLocalStorageGB{Min?:Value<number>;Max?:Value<number>;constructor(properties:TotalLocalStorageGB);}export declare class Monitoring{Enabled?:Value<boolean>;constructor(properties:Monitoring);}export declare class Placement{GroupName?:Value<string>;Tenancy?:Value<string>;SpreadDomain?:Value<string>;PartitionNumber?:Value<number>;AvailabilityZone?:Value<string>;Affinity?:Value<string>;HostId?:Value<string>;HostResourceGroupArn?:Value<string>;constructor(properties:Placement);}export declare class Ipv4PrefixSpecification{Ipv4Prefix?:Value<string>;constructor(properties:Ipv4PrefixSpecification);}export declare class Ipv6PrefixSpecification{Ipv6Prefix?:Value<string>;constructor(properties:Ipv6PrefixSpecification);}export declare class Ipv6Add{Ipv6Address?:Value<string>;constructor(properties:Ipv6Add);}export declare class NetworkInterface{Description?:Value<string>;PrivateIpAddress?:Value<string>;PrivateIpAddresses?:List<PrivateIpAdd>;SecondaryPrivateIpAddressCount?:Value<number>;Ipv6PrefixCount?:Value<number>;Ipv4Prefixes?:List<Ipv4PrefixSpecification>;DeviceIndex?:Value<number>;Ipv4PrefixCount?:Value<number>;Ipv6Prefixes?:List<Ipv6PrefixSpecification>;SubnetId?:Value<string>;Ipv6Addresses?:List<Ipv6Add>;AssociatePublicIpAddress?:Value<boolean>;NetworkInterfaceId?:Value<string>;NetworkCardIndex?:Value<number>;InterfaceType?:Value<string>;AssociateCarrierIpAddress?:Value<boolean>;Ipv6AddressCount?:Value<number>;Groups?:List<Value<string>>;DeleteOnTermination?:Value<boolean>;constructor(properties:NetworkInterface);}export declare class AcceleratorCount{Min?:Value<number>;Max?:Value<number>;constructor(properties:AcceleratorCount);}export declare class MemoryMiB{Min?:Value<number>;Max?:Value<number>;constructor(properties:MemoryMiB);}export declare class MemoryGiBPerVCpu{Min?:Value<number>;Max?:Value<number>;constructor(properties:MemoryGiBPerVCpu);}export declare class LaunchTemplateElasticInferenceAccelerator{Type?:Value<string>;Count?:Value<number>;constructor(properties:LaunchTemplateElasticInferenceAccelerator);}export declare class LaunchTemplateTagSpecification{ResourceType?:Value<string>;Tags?:List<ResourceTag>;constructor(properties:LaunchTemplateTagSpecification);}export interface Properties{LaunchTemplateName?:Value<string>;LaunchTemplateData:LaunchTemplateData;TagSpecifications?:List<LaunchTemplateTagSpecification>;}declare class LaunchTemplate extends ResourceBase<Properties>{static BlockDeviceMapping:typeof BlockDeviceMapping;static SpotOptions:typeof SpotOptions;static AcceleratorTotalMemoryMiB:typeof AcceleratorTotalMemoryMiB;static ElasticGpuSpecification:typeof ElasticGpuSpecification;static TagSpecification:typeof TagSpecification;static Ebs:typeof Ebs;static BaselineEbsBandwidthMbps:typeof BaselineEbsBandwidthMbps;static EnclaveOptions:typeof EnclaveOptions;static LaunchTemplateData:typeof LaunchTemplateData;static MaintenanceOptions:typeof MaintenanceOptions;static MetadataOptions:typeof MetadataOptions;static CapacityReservationSpecification:typeof CapacityReservationSpecification;static NetworkInterfaceCount:typeof NetworkInterfaceCount;static CapacityReservationTarget:typeof CapacityReservationTarget;static CpuOptions:typeof CpuOptions;static PrivateIpAdd:typeof PrivateIpAdd;static PrivateDnsNameOptions:typeof PrivateDnsNameOptions;static InstanceRequirements:typeof InstanceRequirements;static IamInstanceProfile:typeof IamInstanceProfile;static LicenseSpecification:typeof LicenseSpecification;static HibernationOptions:typeof HibernationOptions;static VCpuCount:typeof VCpuCount;static InstanceMarketOptions:typeof InstanceMarketOptions;static CreditSpecification:typeof CreditSpecification;static TotalLocalStorageGB:typeof TotalLocalStorageGB;static Monitoring:typeof Monitoring;static Placement:typeof Placement;static Ipv4PrefixSpecification:typeof Ipv4PrefixSpecification;static Ipv6PrefixSpecification:typeof Ipv6PrefixSpecification;static Ipv6Add:typeof Ipv6Add;static NetworkInterface:typeof NetworkInterface;static AcceleratorCount:typeof AcceleratorCount;static MemoryMiB:typeof MemoryMiB;static MemoryGiBPerVCpu:typeof MemoryGiBPerVCpu;static LaunchTemplateElasticInferenceAccelerator:typeof LaunchTemplateElasticInferenceAccelerator;static LaunchTemplateTagSpecification:typeof LaunchTemplateTagSpecification;constructor(properties:Properties);}export{LaunchTemplate as R};