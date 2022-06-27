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

import * as _0 from './launch'
import * as _1 from './experiment'
import * as _2 from './project'
import * as _3 from './feature'

export namespace Evidently {
  export const Launch = _0.R
  export const Experiment = _1.R
  export const Project = _2.R
  export const Feature = _3.R

  export type Launch = _0.R
  export type Experiment = _1.R
  export type Project = _2.R
  export type Feature = _3.R

  export namespace Launch {
    export type ExecutionStatusObject = _0.ExecutionStatusObject
    export type MetricDefinitionObject = _0.MetricDefinitionObject
    export type LaunchGroupObject = _0.LaunchGroupObject
    export type StepConfig = _0.StepConfig
    export type GroupToWeight = _0.GroupToWeight
  }
  export namespace Experiment {
    export type OnlineAbConfigObject = _1.OnlineAbConfigObject
    export type TreatmentToWeight = _1.TreatmentToWeight
    export type RunningStatusObject = _1.RunningStatusObject
    export type TreatmentObject = _1.TreatmentObject
    export type MetricGoalObject = _1.MetricGoalObject
  }
  export namespace Project {
    export type S3Destination = _2.S3Destination
    export type DataDeliveryObject = _2.DataDeliveryObject
  }
  export namespace Feature {
    export type VariationObject = _3.VariationObject
    export type EntityOverride = _3.EntityOverride
  }
}
