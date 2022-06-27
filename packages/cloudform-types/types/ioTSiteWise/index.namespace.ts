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

import * as _0 from './assetModel'
import * as _1 from './asset'
import * as _2 from './dashboard'
import * as _3 from './portal'
import * as _4 from './accessPolicy'
import * as _5 from './project'
import * as _6 from './gateway'

export namespace IoTSiteWise {
  export const AssetModel = _0.R
  export const Asset = _1.R
  export const Dashboard = _2.R
  export const Portal = _3.R
  export const AccessPolicy = _4.R
  export const Project = _5.R
  export const Gateway = _6.R

  export type AssetModel = _0.R
  export type Asset = _1.R
  export type Dashboard = _2.R
  export type Portal = _3.R
  export type AccessPolicy = _4.R
  export type Project = _5.R
  export type Gateway = _6.R

  export namespace AssetModel {
    export type AssetModelCompositeModel = _0.AssetModelCompositeModel
    export type MetricWindow = _0.MetricWindow
    export type TumblingWindow = _0.TumblingWindow
    export type Attribute = _0.Attribute
    export type ExpressionVariable = _0.ExpressionVariable
    export type VariableValue = _0.VariableValue
    export type Transform = _0.Transform
    export type AssetModelHierarchy = _0.AssetModelHierarchy
    export type Metric = _0.Metric
    export type AssetModelProperty = _0.AssetModelProperty
    export type PropertyType = _0.PropertyType
  }
  export namespace Asset {
    export type AssetHierarchy = _1.AssetHierarchy
    export type AssetProperty = _1.AssetProperty
  }
  export namespace AccessPolicy {
    export type Project = _4.Project
    export type IamRole = _4.IamRole
    export type AccessPolicyResource = _4.AccessPolicyResource
    export type User = _4.User
    export type IamUser = _4.IamUser
    export type Portal = _4.Portal
    export type AccessPolicyIdentity = _4.AccessPolicyIdentity
  }
  export namespace Gateway {
    export type Greengrass = _6.Greengrass
    export type GreengrassV2 = _6.GreengrassV2
    export type GatewayCapabilitySummary = _6.GatewayCapabilitySummary
    export type GatewayPlatform = _6.GatewayPlatform
  }
}
