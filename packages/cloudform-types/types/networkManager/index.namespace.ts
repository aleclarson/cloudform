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

import * as _0 from './link'
import * as _1 from './customerGatewayAssociation'
import * as _2 from './connectAttachment'
import * as _3 from './linkAssociation'
import * as _4 from './connectPeer'
import * as _5 from './siteToSiteVpnAttachment'
import * as _6 from './device'
import * as _7 from './vpcAttachment'
import * as _8 from './coreNetwork'
import * as _9 from './globalNetwork'
import * as _a from './transitGatewayRegistration'
import * as _b from './site'

export namespace NetworkManager {
  export const Link = _0.R
  export const CustomerGatewayAssociation = _1.R
  export const ConnectAttachment = _2.R
  export const LinkAssociation = _3.R
  export const ConnectPeer = _4.R
  export const SiteToSiteVpnAttachment = _5.R
  export const Device = _6.R
  export const VpcAttachment = _7.R
  export const CoreNetwork = _8.R
  export const GlobalNetwork = _9.R
  export const TransitGatewayRegistration = _a.R
  export const Site = _b.R

  export type Link = _0.R
  export type CustomerGatewayAssociation = _1.R
  export type ConnectAttachment = _2.R
  export type LinkAssociation = _3.R
  export type ConnectPeer = _4.R
  export type SiteToSiteVpnAttachment = _5.R
  export type Device = _6.R
  export type VpcAttachment = _7.R
  export type CoreNetwork = _8.R
  export type GlobalNetwork = _9.R
  export type TransitGatewayRegistration = _a.R
  export type Site = _b.R

  export namespace Link {
    export type Bandwidth = _0.Bandwidth
  }
  export namespace ConnectAttachment {
    export type ConnectAttachmentOptions = _2.ConnectAttachmentOptions
  }
  export namespace ConnectPeer {
    export type BgpOptions = _4.BgpOptions
  }
  export namespace Device {
    export type Location = _6.Location
  }
  export namespace VpcAttachment {
    export type VpcOptions = _7.VpcOptions
  }
  export namespace CoreNetwork {
    export type CoreNetworkSegment = _8.CoreNetworkSegment
    export type CoreNetworkEdge = _8.CoreNetworkEdge
  }
  export namespace Site {
    export type Location = _b.Location
  }
}
