import*as _0 from'./repository';import*as _1 from'./replicationConfiguration';import*as _2 from'./registryPolicy';import*as _3 from'./pullThroughCacheRule';import*as _4 from'./publicRepository';export declare namespace ECR{const Repository:typeof _0.R;const ReplicationConfiguration:typeof _1.R;const RegistryPolicy:typeof _2.R;const PullThroughCacheRule:typeof _3.R;const PublicRepository:typeof _4.R;type Repository=_0.R;type ReplicationConfiguration=_1.R;type RegistryPolicy=_2.R;type PullThroughCacheRule=_3.R;type PublicRepository=_4.R;namespace Repository{type LifecyclePolicy=_0.LifecyclePolicy;type ImageScanningConfiguration=_0.ImageScanningConfiguration;type EncryptionConfiguration=_0.EncryptionConfiguration;}namespace ReplicationConfiguration{type ReplicationDestination=_1.ReplicationDestination;type ReplicationRule=_1.ReplicationRule;type RepositoryFilter=_1.RepositoryFilter;}}