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

import * as _0 from './fileSystem'
import * as _1 from './volume'
import * as _2 from './storageVirtualMachine'
import * as _3 from './snapshot'

export namespace FSx {
  export const FileSystem = _0.R
  export const Volume = _1.R
  export const StorageVirtualMachine = _2.R
  export const Snapshot = _3.R

  export type FileSystem = _0.R
  export type Volume = _1.R
  export type StorageVirtualMachine = _2.R
  export type Snapshot = _3.R

  export namespace FileSystem {
    export type NfsExports = _0.NfsExports
    export type OpenZFSConfiguration = _0.OpenZFSConfiguration
    export type UserAndGroupQuotas = _0.UserAndGroupQuotas
    export type OntapConfiguration = _0.OntapConfiguration
    export type RootVolumeConfiguration = _0.RootVolumeConfiguration
    export type LustreConfiguration = _0.LustreConfiguration
    export type SelfManagedActiveDirectoryConfiguration = _0.SelfManagedActiveDirectoryConfiguration
    export type DiskIopsConfiguration = _0.DiskIopsConfiguration
    export type WindowsConfiguration = _0.WindowsConfiguration
    export type AuditLogConfiguration = _0.AuditLogConfiguration
    export type ClientConfigurations = _0.ClientConfigurations
  }
  export namespace Volume {
    export type TieringPolicy = _1.TieringPolicy
    export type ClientConfigurations = _1.ClientConfigurations
    export type OriginSnapshot = _1.OriginSnapshot
    export type OpenZFSConfiguration = _1.OpenZFSConfiguration
    export type OntapConfiguration = _1.OntapConfiguration
    export type NfsExports = _1.NfsExports
    export type UserAndGroupQuotas = _1.UserAndGroupQuotas
  }
  export namespace StorageVirtualMachine {
    export type ActiveDirectoryConfiguration = _2.ActiveDirectoryConfiguration
    export type SelfManagedActiveDirectoryConfiguration = _2.SelfManagedActiveDirectoryConfiguration
  }
}
