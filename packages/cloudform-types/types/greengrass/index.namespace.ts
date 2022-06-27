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

import * as _0 from './connectorDefinitionVersion'
import * as _1 from './loggerDefinitionVersion'
import * as _2 from './functionDefinitionVersion'
import * as _3 from './connectorDefinition'
import * as _4 from './functionDefinition'
import * as _5 from './loggerDefinition'
import * as _6 from './coreDefinition'
import * as _7 from './deviceDefinitionVersion'
import * as _8 from './resourceDefinition'
import * as _9 from './deviceDefinition'
import * as _a from './group'
import * as _b from './subscriptionDefinitionVersion'
import * as _c from './coreDefinitionVersion'
import * as _d from './subscriptionDefinition'
import * as _e from './resourceDefinitionVersion'
import * as _f from './groupVersion'

export namespace Greengrass {
  export const ConnectorDefinitionVersion = _0.R
  export const LoggerDefinitionVersion = _1.R
  export const FunctionDefinitionVersion = _2.R
  export const ConnectorDefinition = _3.R
  export const FunctionDefinition = _4.R
  export const LoggerDefinition = _5.R
  export const CoreDefinition = _6.R
  export const DeviceDefinitionVersion = _7.R
  export const ResourceDefinition = _8.R
  export const DeviceDefinition = _9.R
  export const Group = _a.R
  export const SubscriptionDefinitionVersion = _b.R
  export const CoreDefinitionVersion = _c.R
  export const SubscriptionDefinition = _d.R
  export const ResourceDefinitionVersion = _e.R
  export const GroupVersion = _f.R

  export type ConnectorDefinitionVersion = _0.R
  export type LoggerDefinitionVersion = _1.R
  export type FunctionDefinitionVersion = _2.R
  export type ConnectorDefinition = _3.R
  export type FunctionDefinition = _4.R
  export type LoggerDefinition = _5.R
  export type CoreDefinition = _6.R
  export type DeviceDefinitionVersion = _7.R
  export type ResourceDefinition = _8.R
  export type DeviceDefinition = _9.R
  export type Group = _a.R
  export type SubscriptionDefinitionVersion = _b.R
  export type CoreDefinitionVersion = _c.R
  export type SubscriptionDefinition = _d.R
  export type ResourceDefinitionVersion = _e.R
  export type GroupVersion = _f.R

  export namespace ConnectorDefinitionVersion {
    export type Connector = _0.Connector
  }
  export namespace LoggerDefinitionVersion {
    export type Logger = _1.Logger
  }
  export namespace FunctionDefinitionVersion {
    export type FunctionConfiguration = _2.FunctionConfiguration
    export type Execution = _2.Execution
    export type DefaultConfig = _2.DefaultConfig
    export type Function = _2.Function
    export type RunAs = _2.RunAs
    export type Environment = _2.Environment
    export type ResourceAccessPolicy = _2.ResourceAccessPolicy
  }
  export namespace ConnectorDefinition {
    export type ConnectorDefinitionVersion = _3.ConnectorDefinitionVersion
    export type Connector = _3.Connector
  }
  export namespace FunctionDefinition {
    export type FunctionConfiguration = _4.FunctionConfiguration
    export type DefaultConfig = _4.DefaultConfig
    export type Execution = _4.Execution
    export type Environment = _4.Environment
    export type FunctionDefinitionVersion = _4.FunctionDefinitionVersion
    export type RunAs = _4.RunAs
    export type Function = _4.Function
    export type ResourceAccessPolicy = _4.ResourceAccessPolicy
  }
  export namespace LoggerDefinition {
    export type Logger = _5.Logger
    export type LoggerDefinitionVersion = _5.LoggerDefinitionVersion
  }
  export namespace CoreDefinition {
    export type Core = _6.Core
    export type CoreDefinitionVersion = _6.CoreDefinitionVersion
  }
  export namespace DeviceDefinitionVersion {
    export type Device = _7.Device
  }
  export namespace ResourceDefinition {
    export type S3MachineLearningModelResourceData = _8.S3MachineLearningModelResourceData
    export type SecretsManagerSecretResourceData = _8.SecretsManagerSecretResourceData
    export type ResourceDownloadOwnerSetting = _8.ResourceDownloadOwnerSetting
    export type SageMakerMachineLearningModelResourceData = _8.SageMakerMachineLearningModelResourceData
    export type GroupOwnerSetting = _8.GroupOwnerSetting
    export type LocalDeviceResourceData = _8.LocalDeviceResourceData
    export type ResourceDefinitionVersion = _8.ResourceDefinitionVersion
    export type LocalVolumeResourceData = _8.LocalVolumeResourceData
    export type ResourceInstance = _8.ResourceInstance
    export type ResourceDataContainer = _8.ResourceDataContainer
  }
  export namespace DeviceDefinition {
    export type Device = _9.Device
    export type DeviceDefinitionVersion = _9.DeviceDefinitionVersion
  }
  export namespace Group {
    export type GroupVersion = _a.GroupVersion
  }
  export namespace SubscriptionDefinitionVersion {
    export type Subscription = _b.Subscription
  }
  export namespace CoreDefinitionVersion {
    export type Core = _c.Core
  }
  export namespace SubscriptionDefinition {
    export type SubscriptionDefinitionVersion = _d.SubscriptionDefinitionVersion
    export type Subscription = _d.Subscription
  }
  export namespace ResourceDefinitionVersion {
    export type ResourceInstance = _e.ResourceInstance
    export type LocalDeviceResourceData = _e.LocalDeviceResourceData
    export type LocalVolumeResourceData = _e.LocalVolumeResourceData
    export type SecretsManagerSecretResourceData = _e.SecretsManagerSecretResourceData
    export type SageMakerMachineLearningModelResourceData = _e.SageMakerMachineLearningModelResourceData
    export type ResourceDownloadOwnerSetting = _e.ResourceDownloadOwnerSetting
    export type S3MachineLearningModelResourceData = _e.S3MachineLearningModelResourceData
    export type ResourceDataContainer = _e.ResourceDataContainer
    export type GroupOwnerSetting = _e.GroupOwnerSetting
  }
}
