import*as _0 from'./serviceProfile';import*as _1 from'./wirelessDevice';import*as _2 from'./deviceProfile';import*as _3 from'./multicastGroup';import*as _4 from'./networkAnalyzerConfiguration';import*as _5 from'./wirelessGateway';import*as _6 from'./fuotaTask';import*as _7 from'./destination';import*as _8 from'./taskDefinition';import*as _9 from'./partnerAccount';export declare namespace IoTWireless{const ServiceProfile:typeof _0.R;const WirelessDevice:typeof _1.R;const DeviceProfile:typeof _2.R;const MulticastGroup:typeof _3.R;const NetworkAnalyzerConfiguration:typeof _4.R;const WirelessGateway:typeof _5.R;const FuotaTask:typeof _6.R;const Destination:typeof _7.R;const TaskDefinition:typeof _8.R;const PartnerAccount:typeof _9.R;type ServiceProfile=_0.R;type WirelessDevice=_1.R;type DeviceProfile=_2.R;type MulticastGroup=_3.R;type NetworkAnalyzerConfiguration=_4.R;type WirelessGateway=_5.R;type FuotaTask=_6.R;type Destination=_7.R;type TaskDefinition=_8.R;type PartnerAccount=_9.R;namespace ServiceProfile{type LoRaWANServiceProfile=_0.LoRaWANServiceProfile;}namespace WirelessDevice{type AbpV11=_1.AbpV11;type LoRaWANDevice=_1.LoRaWANDevice;type SessionKeysAbpV11=_1.SessionKeysAbpV11;type AbpV10x=_1.AbpV10x;type OtaaV11=_1.OtaaV11;type SessionKeysAbpV10x=_1.SessionKeysAbpV10x;type OtaaV10x=_1.OtaaV10x;}namespace DeviceProfile{type LoRaWANDeviceProfile=_2.LoRaWANDeviceProfile;}namespace MulticastGroup{type LoRaWAN=_3.LoRaWAN;}namespace WirelessGateway{type LoRaWANGateway=_5.LoRaWANGateway;}namespace FuotaTask{type LoRaWAN=_6.LoRaWAN;}namespace TaskDefinition{type UpdateWirelessGatewayTaskCreate=_8.UpdateWirelessGatewayTaskCreate;type LoRaWANUpdateGatewayTaskEntry=_8.LoRaWANUpdateGatewayTaskEntry;type LoRaWANGatewayVersion=_8.LoRaWANGatewayVersion;type LoRaWANUpdateGatewayTaskCreate=_8.LoRaWANUpdateGatewayTaskCreate;}namespace PartnerAccount{type SidewalkAccountInfo=_9.SidewalkAccountInfo;type SidewalkUpdateAccount=_9.SidewalkUpdateAccount;}}