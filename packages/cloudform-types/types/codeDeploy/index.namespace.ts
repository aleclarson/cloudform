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

import * as _0 from './deploymentConfig'
import * as _1 from './application'
import * as _2 from './deploymentGroup'

export namespace CodeDeploy {
  export const DeploymentConfig = _0.R
  export const Application = _1.R
  export const DeploymentGroup = _2.R

  export type DeploymentConfig = _0.R
  export type Application = _1.R
  export type DeploymentGroup = _2.R

  export namespace DeploymentConfig {
    export type TimeBasedCanary = _0.TimeBasedCanary
    export type MinimumHealthyHosts = _0.MinimumHealthyHosts
    export type TrafficRoutingConfig = _0.TrafficRoutingConfig
    export type TimeBasedLinear = _0.TimeBasedLinear
  }
  export namespace DeploymentGroup {
    export type TargetGroupInfo = _2.TargetGroupInfo
    export type OnPremisesTagSetListObject = _2.OnPremisesTagSetListObject
    export type DeploymentStyle = _2.DeploymentStyle
    export type EC2TagFilter = _2.EC2TagFilter
    export type OnPremisesTagSet = _2.OnPremisesTagSet
    export type LoadBalancerInfo = _2.LoadBalancerInfo
    export type RevisionLocation = _2.RevisionLocation
    export type TriggerConfig = _2.TriggerConfig
    export type EC2TagSet = _2.EC2TagSet
    export type AlarmConfiguration = _2.AlarmConfiguration
    export type BlueGreenDeploymentConfiguration = _2.BlueGreenDeploymentConfiguration
    export type DeploymentReadyOption = _2.DeploymentReadyOption
    export type AutoRollbackConfiguration = _2.AutoRollbackConfiguration
    export type S3Location = _2.S3Location
    export type BlueInstanceTerminationOption = _2.BlueInstanceTerminationOption
    export type TagFilter = _2.TagFilter
    export type GitHubLocation = _2.GitHubLocation
    export type TrafficRoute = _2.TrafficRoute
    export type ELBInfo = _2.ELBInfo
    export type Alarm = _2.Alarm
    export type GreenFleetProvisioningOption = _2.GreenFleetProvisioningOption
    export type Deployment = _2.Deployment
    export type ECSService = _2.ECSService
    export type TargetGroupPairInfo = _2.TargetGroupPairInfo
    export type EC2TagSetListObject = _2.EC2TagSetListObject
  }
}
