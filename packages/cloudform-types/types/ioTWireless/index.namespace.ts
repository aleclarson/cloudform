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

import * as _0 from './serviceProfile'
import * as _1 from './wirelessDevice'
import * as _2 from './deviceProfile'
import * as _3 from './multicastGroup'
import * as _4 from './networkAnalyzerConfiguration'
import * as _5 from './wirelessGateway'
import * as _6 from './fuotaTask'
import * as _7 from './destination'
import * as _8 from './taskDefinition'
import * as _9 from './partnerAccount'

export namespace IoTWireless {
  export const ServiceProfile = _0.R
  export const WirelessDevice = _1.R
  export const DeviceProfile = _2.R
  export const MulticastGroup = _3.R
  export const NetworkAnalyzerConfiguration = _4.R
  export const WirelessGateway = _5.R
  export const FuotaTask = _6.R
  export const Destination = _7.R
  export const TaskDefinition = _8.R
  export const PartnerAccount = _9.R

  export type ServiceProfile = _0.R
  export type WirelessDevice = _1.R
  export type DeviceProfile = _2.R
  export type MulticastGroup = _3.R
  export type NetworkAnalyzerConfiguration = _4.R
  export type WirelessGateway = _5.R
  export type FuotaTask = _6.R
  export type Destination = _7.R
  export type TaskDefinition = _8.R
  export type PartnerAccount = _9.R

  export namespace ServiceProfile {
    export type LoRaWANServiceProfile = _0.LoRaWANServiceProfile
  }
  export namespace WirelessDevice {
    export type AbpV11 = _1.AbpV11
    export type LoRaWANDevice = _1.LoRaWANDevice
    export type SessionKeysAbpV11 = _1.SessionKeysAbpV11
    export type AbpV10x = _1.AbpV10x
    export type OtaaV11 = _1.OtaaV11
    export type SessionKeysAbpV10x = _1.SessionKeysAbpV10x
    export type OtaaV10x = _1.OtaaV10x
  }
  export namespace DeviceProfile {
    export type LoRaWANDeviceProfile = _2.LoRaWANDeviceProfile
  }
  export namespace MulticastGroup {
    export type LoRaWAN = _3.LoRaWAN
  }
  export namespace WirelessGateway {
    export type LoRaWANGateway = _5.LoRaWANGateway
  }
  export namespace FuotaTask {
    export type LoRaWAN = _6.LoRaWAN
  }
  export namespace TaskDefinition {
    export type UpdateWirelessGatewayTaskCreate = _8.UpdateWirelessGatewayTaskCreate
    export type LoRaWANUpdateGatewayTaskEntry = _8.LoRaWANUpdateGatewayTaskEntry
    export type LoRaWANGatewayVersion = _8.LoRaWANGatewayVersion
    export type LoRaWANUpdateGatewayTaskCreate = _8.LoRaWANUpdateGatewayTaskCreate
  }
  export namespace PartnerAccount {
    export type SidewalkAccountInfo = _9.SidewalkAccountInfo
    export type SidewalkUpdateAccount = _9.SidewalkUpdateAccount
  }
}
