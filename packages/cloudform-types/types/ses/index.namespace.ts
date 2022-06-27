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

import * as _0 from './contactList'
import * as _1 from './configurationSetEventDestination'
import * as _2 from './template'
import * as _3 from './configurationSet'
import * as _4 from './receiptRuleSet'
import * as _5 from './receiptFilter'
import * as _6 from './receiptRule'

export namespace SES {
  export const ContactList = _0.R
  export const ConfigurationSetEventDestination = _1.R
  export const Template = _2.R
  export const ConfigurationSet = _3.R
  export const ReceiptRuleSet = _4.R
  export const ReceiptFilter = _5.R
  export const ReceiptRule = _6.R

  export type ContactList = _0.R
  export type ConfigurationSetEventDestination = _1.R
  export type Template = _2.R
  export type ConfigurationSet = _3.R
  export type ReceiptRuleSet = _4.R
  export type ReceiptFilter = _5.R
  export type ReceiptRule = _6.R

  export namespace ContactList {
    export type Topic = _0.Topic
  }
  export namespace ConfigurationSetEventDestination {
    export type EventDestination = _1.EventDestination
    export type DimensionConfiguration = _1.DimensionConfiguration
    export type KinesisFirehoseDestination = _1.KinesisFirehoseDestination
    export type SnsDestination = _1.SnsDestination
    export type CloudWatchDestination = _1.CloudWatchDestination
  }
  export namespace ConfigurationSet {
    export type ReputationOptions = _3.ReputationOptions
    export type DeliveryOptions = _3.DeliveryOptions
    export type TrackingOptions = _3.TrackingOptions
    export type SendingOptions = _3.SendingOptions
    export type SuppressionOptions = _3.SuppressionOptions
  }
  export namespace ReceiptFilter {
    export type Filter = _5.Filter
    export type IpFilter = _5.IpFilter
  }
  export namespace ReceiptRule {
    export type BounceAction = _6.BounceAction
    export type Action = _6.Action
    export type WorkmailAction = _6.WorkmailAction
    export type Rule = _6.Rule
    export type AddHeaderAction = _6.AddHeaderAction
    export type StopAction = _6.StopAction
    export type SNSAction = _6.SNSAction
    export type S3Action = _6.S3Action
    export type LambdaAction = _6.LambdaAction
  }
}
