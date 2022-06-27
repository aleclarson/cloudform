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

import * as _0 from './resource'
import * as _1 from './dataLakeSettings'
import * as _2 from './permissions'
import * as _3 from './tag'
import * as _4 from './principalPermissions'

export namespace LakeFormation {
  export const Resource = _0.R
  export const DataLakeSettings = _1.R
  export const Permissions = _2.R
  export const Tag = _3.R
  export const PrincipalPermissions = _4.R

  export type Resource = _0.R
  export type DataLakeSettings = _1.R
  export type Permissions = _2.R
  export type Tag = _3.R
  export type PrincipalPermissions = _4.R

  export namespace DataLakeSettings {
    export type DataLakePrincipal = _1.DataLakePrincipal
    export type Admins = _1.Admins
  }
  export namespace Permissions {
    export type DataLocationResource = _2.DataLocationResource
    export type ColumnWildcard = _2.ColumnWildcard
    export type DatabaseResource = _2.DatabaseResource
    export type TableWildcard = _2.TableWildcard
    export type Resource = _2.Resource
    export type DataLakePrincipal = _2.DataLakePrincipal
    export type TableResource = _2.TableResource
    export type TableWithColumnsResource = _2.TableWithColumnsResource
  }
  export namespace PrincipalPermissions {
    export type DataLocationResource = _4.DataLocationResource
    export type LFTagKeyResource = _4.LFTagKeyResource
    export type CatalogResource = _4.CatalogResource
    export type TableResource = _4.TableResource
    export type TableWildcard = _4.TableWildcard
    export type ColumnWildcard = _4.ColumnWildcard
    export type DatabaseResource = _4.DatabaseResource
    export type TableWithColumnsResource = _4.TableWithColumnsResource
    export type Resource = _4.Resource
    export type DataLakePrincipal = _4.DataLakePrincipal
    export type LFTag = _4.LFTag
    export type LFTagPolicyResource = _4.LFTagPolicyResource
    export type DataCellsFilterResource = _4.DataCellsFilterResource
  }
}
