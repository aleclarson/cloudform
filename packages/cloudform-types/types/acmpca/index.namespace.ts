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

import * as _0 from './certificateAuthority'
import * as _1 from './certificateAuthorityActivation'
import * as _2 from './certificate'
import * as _3 from './permission'

export namespace ACMPCA {
  export const CertificateAuthority = _0.R
  export const CertificateAuthorityActivation = _1.R
  export const Certificate = _2.R
  export const Permission = _3.R

  export type CertificateAuthority = _0.R
  export type CertificateAuthorityActivation = _1.R
  export type Certificate = _2.R
  export type Permission = _3.R

  export namespace CertificateAuthority {
    export type RevocationConfiguration = _0.RevocationConfiguration
    export type KeyUsage = _0.KeyUsage
    export type CsrExtensions = _0.CsrExtensions
    export type AccessDescription = _0.AccessDescription
    export type CustomAttribute = _0.CustomAttribute
    export type OcspConfiguration = _0.OcspConfiguration
    export type EdiPartyName = _0.EdiPartyName
    export type Subject = _0.Subject
    export type AccessMethod = _0.AccessMethod
    export type OtherName = _0.OtherName
    export type CrlConfiguration = _0.CrlConfiguration
    export type GeneralName = _0.GeneralName
  }
  export namespace Certificate {
    export type Extensions = _2.Extensions
    export type Subject = _2.Subject
    export type PolicyInformation = _2.PolicyInformation
    export type PolicyQualifierInfo = _2.PolicyQualifierInfo
    export type Qualifier = _2.Qualifier
    export type GeneralName = _2.GeneralName
    export type ApiPassthrough = _2.ApiPassthrough
    export type EdiPartyName = _2.EdiPartyName
    export type CustomExtension = _2.CustomExtension
    export type OtherName = _2.OtherName
    export type CustomAttribute = _2.CustomAttribute
    export type Validity = _2.Validity
    export type ExtendedKeyUsage = _2.ExtendedKeyUsage
    export type KeyUsage = _2.KeyUsage
  }
}
