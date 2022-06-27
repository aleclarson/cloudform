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

import * as _0 from './locationNfs'
import * as _1 from './locationHdfs'
import * as _2 from './agent'
import * as _3 from './locationEfs'
import * as _4 from './locationFSxLustre'
import * as _5 from './locationFSxWindows'
import * as _6 from './locationS3'
import * as _7 from './task'
import * as _8 from './locationObjectStorage'
import * as _9 from './locationFSxOpenZfs'
import * as _a from './locationSmb'

export namespace DataSync {
  export const LocationNFS = _0.R
  export const LocationHDFS = _1.R
  export const Agent = _2.R
  export const LocationEFS = _3.R
  export const LocationFSxLustre = _4.R
  export const LocationFSxWindows = _5.R
  export const LocationS3 = _6.R
  export const Task = _7.R
  export const LocationObjectStorage = _8.R
  export const LocationFSxOpenZFS = _9.R
  export const LocationSMB = _a.R

  export type LocationNFS = _0.R
  export type LocationHDFS = _1.R
  export type Agent = _2.R
  export type LocationEFS = _3.R
  export type LocationFSxLustre = _4.R
  export type LocationFSxWindows = _5.R
  export type LocationS3 = _6.R
  export type Task = _7.R
  export type LocationObjectStorage = _8.R
  export type LocationFSxOpenZFS = _9.R
  export type LocationSMB = _a.R

  export namespace LocationNFS {
    export type OnPremConfig = _0.OnPremConfig
    export type MountOptions = _0.MountOptions
  }
  export namespace LocationHDFS {
    export type NameNode = _1.NameNode
    export type QopConfiguration = _1.QopConfiguration
  }
  export namespace LocationEFS {
    export type Ec2Config = _3.Ec2Config
  }
  export namespace LocationS3 {
    export type S3Config = _6.S3Config
  }
  export namespace Task {
    export type FilterRule = _7.FilterRule
    export type Options = _7.Options
    export type TaskSchedule = _7.TaskSchedule
  }
  export namespace LocationFSxOpenZFS {
    export type NFS = _9.NFS
    export type Protocol = _9.Protocol
    export type MountOptions = _9.MountOptions
  }
  export namespace LocationSMB {
    export type MountOptions = _a.MountOptions
  }
}
