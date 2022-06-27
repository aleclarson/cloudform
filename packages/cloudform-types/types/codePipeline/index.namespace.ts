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

import * as _0 from './pipeline'
import * as _1 from './customActionType'
import * as _2 from './webhook'

export namespace CodePipeline {
  export const Pipeline = _0.R
  export const CustomActionType = _1.R
  export const Webhook = _2.R

  export type Pipeline = _0.R
  export type CustomActionType = _1.R
  export type Webhook = _2.R

  export namespace Pipeline {
    export type OutputArtifact = _0.OutputArtifact
    export type StageTransition = _0.StageTransition
    export type InputArtifact = _0.InputArtifact
    export type BlockerDeclaration = _0.BlockerDeclaration
    export type ArtifactStoreMap = _0.ArtifactStoreMap
    export type EncryptionKey = _0.EncryptionKey
    export type ActionDeclaration = _0.ActionDeclaration
    export type StageDeclaration = _0.StageDeclaration
    export type ArtifactStore = _0.ArtifactStore
    export type ActionTypeId = _0.ActionTypeId
  }
  export namespace CustomActionType {
    export type ArtifactDetails = _1.ArtifactDetails
    export type ConfigurationProperties = _1.ConfigurationProperties
    export type Settings = _1.Settings
  }
  export namespace Webhook {
    export type WebhookFilterRule = _2.WebhookFilterRule
    export type WebhookAuthConfiguration = _2.WebhookAuthConfiguration
  }
}
