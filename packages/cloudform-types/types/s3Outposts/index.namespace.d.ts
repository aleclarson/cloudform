import*as _0 from'./endpoint';import*as _1 from'./accessPoint';import*as _2 from'./bucket';import*as _3 from'./bucketPolicy';export declare namespace S3Outposts{const Endpoint:typeof _0.R;const AccessPoint:typeof _1.R;const Bucket:typeof _2.R;const BucketPolicy:typeof _3.R;type Endpoint=_0.R;type AccessPoint=_1.R;type Bucket=_2.R;type BucketPolicy=_3.R;namespace Endpoint{type NetworkInterface=_0.NetworkInterface;}namespace AccessPoint{type VpcConfiguration=_1.VpcConfiguration;}namespace Bucket{type AbortIncompleteMultipartUpload=_2.AbortIncompleteMultipartUpload;type Rule=_2.Rule;type LifecycleConfiguration=_2.LifecycleConfiguration;}}