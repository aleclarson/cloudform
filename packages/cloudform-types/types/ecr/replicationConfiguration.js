"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ReplicationConfigurationInner{constructor(properties){Object.assign(this,properties)}}exports.ReplicationConfigurationInner=ReplicationConfigurationInner;class ReplicationDestination{constructor(properties){Object.assign(this,properties)}}exports.ReplicationDestination=ReplicationDestination;class ReplicationRule{constructor(properties){Object.assign(this,properties)}}exports.ReplicationRule=ReplicationRule;class ReplicationConfiguration extends resource_1.ResourceBase{constructor(properties){super("AWS::ECR::ReplicationConfiguration",properties)}}(exports.default=ReplicationConfiguration).ReplicationConfiguration=ReplicationConfigurationInner,ReplicationConfiguration.ReplicationDestination=ReplicationDestination,ReplicationConfiguration.ReplicationRule=ReplicationRule,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class LifecyclePolicy{constructor(properties){Object.assign(this,properties)}}exports.LifecyclePolicy=LifecyclePolicy;class ImageScanningConfiguration{constructor(properties){Object.assign(this,properties)}}exports.ImageScanningConfiguration=ImageScanningConfiguration;class EncryptionConfiguration{constructor(properties){Object.assign(this,properties)}}exports.EncryptionConfiguration=EncryptionConfiguration;class Repository extends resource_1.ResourceBase{constructor(properties){super("AWS::ECR::Repository",properties||{})}}(exports.default=Repository).LifecyclePolicy=LifecyclePolicy,Repository.ImageScanningConfiguration=ImageScanningConfiguration,Repository.EncryptionConfiguration=EncryptionConfiguration;