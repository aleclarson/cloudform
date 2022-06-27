import*as _0 from'./channel';import*as _1 from'./datastore';import*as _2 from'./dataset';import*as _3 from'./pipeline';export declare namespace IoTAnalytics{const Channel:typeof _0.R;const Datastore:typeof _1.R;const Dataset:typeof _2.R;const Pipeline:typeof _3.R;type Channel=_0.R;type Datastore=_1.R;type Dataset=_2.R;type Pipeline=_3.R;namespace Channel{type CustomerManagedS3=_0.CustomerManagedS3;type RetentionPeriod=_0.RetentionPeriod;type ServiceManagedS3=_0.ServiceManagedS3;type ChannelStorage=_0.ChannelStorage;}namespace Datastore{type IotSiteWiseMultiLayerStorage=_1.IotSiteWiseMultiLayerStorage;type FileFormatConfiguration=_1.FileFormatConfiguration;type ServiceManagedS3=_1.ServiceManagedS3;type RetentionPeriod=_1.RetentionPeriod;type CustomerManagedS3=_1.CustomerManagedS3;type DatastorePartitions=_1.DatastorePartitions;type SchemaDefinition=_1.SchemaDefinition;type Column=_1.Column;type ParquetConfiguration=_1.ParquetConfiguration;type DatastoreStorage=_1.DatastoreStorage;type CustomerManagedS3Storage=_1.CustomerManagedS3Storage;type Partition=_1.Partition;type DatastorePartition=_1.DatastorePartition;type TimestampPartition=_1.TimestampPartition;type JsonConfiguration=_1.JsonConfiguration;}namespace Dataset{type DatasetContentVersionValue=_2.DatasetContentVersionValue;type GlueConfiguration=_2.GlueConfiguration;type DeltaTimeSessionWindowConfiguration=_2.DeltaTimeSessionWindowConfiguration;type OutputFileUriValue=_2.OutputFileUriValue;type Filter=_2.Filter;type DatasetContentDeliveryRule=_2.DatasetContentDeliveryRule;type Action=_2.Action;type LateDataRuleConfiguration=_2.LateDataRuleConfiguration;type ContainerAction=_2.ContainerAction;type LateDataRule=_2.LateDataRule;type QueryAction=_2.QueryAction;type DatasetContentDeliveryRuleDestination=_2.DatasetContentDeliveryRuleDestination;type VersioningConfiguration=_2.VersioningConfiguration;type Schedule=_2.Schedule;type RetentionPeriod=_2.RetentionPeriod;type S3DestinationConfiguration=_2.S3DestinationConfiguration;type Variable=_2.Variable;type DeltaTime=_2.DeltaTime;type Trigger=_2.Trigger;type IotEventsDestinationConfiguration=_2.IotEventsDestinationConfiguration;type ResourceConfiguration=_2.ResourceConfiguration;type TriggeringDataset=_2.TriggeringDataset;}namespace Pipeline{type DeviceShadowEnrich=_3.DeviceShadowEnrich;type SelectAttributes=_3.SelectAttributes;type RemoveAttributes=_3.RemoveAttributes;type Datastore=_3.Datastore;type DeviceRegistryEnrich=_3.DeviceRegistryEnrich;type Lambda=_3.Lambda;type Channel=_3.Channel;type Filter=_3.Filter;type Activity=_3.Activity;type Math=_3.Math;type AddAttributes=_3.AddAttributes;}}