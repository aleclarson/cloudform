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

import * as _0 from './simulationApplicationVersion'
import * as _1 from './robotApplication'
import * as _2 from './fleet'
import * as _3 from './robotApplicationVersion'
import * as _4 from './robot'
import * as _5 from './simulationApplication'

export namespace RoboMaker {
  export const SimulationApplicationVersion = _0.R
  export const RobotApplication = _1.R
  export const Fleet = _2.R
  export const RobotApplicationVersion = _3.R
  export const Robot = _4.R
  export const SimulationApplication = _5.R

  export type SimulationApplicationVersion = _0.R
  export type RobotApplication = _1.R
  export type Fleet = _2.R
  export type RobotApplicationVersion = _3.R
  export type Robot = _4.R
  export type SimulationApplication = _5.R

  export namespace RobotApplication {
    export type RobotSoftwareSuite = _1.RobotSoftwareSuite
    export type SourceConfig = _1.SourceConfig
  }
  export namespace SimulationApplication {
    export type SimulationSoftwareSuite = _5.SimulationSoftwareSuite
    export type RobotSoftwareSuite = _5.RobotSoftwareSuite
    export type SourceConfig = _5.SourceConfig
    export type RenderingEngine = _5.RenderingEngine
  }
}
