"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.MediaConnectFlowRequest=exports.InputDestinationRequest=exports.InputVpcRequest=exports.InputDeviceSettings=exports.InputDeviceRequest=exports.InputSourceRequest=void 0;const resource_1=require("../resource");class InputSourceRequest{constructor(properties){Object.assign(this,properties)}}exports.InputSourceRequest=InputSourceRequest;class InputDeviceRequest{constructor(properties){Object.assign(this,properties)}}exports.InputDeviceRequest=InputDeviceRequest;class InputDeviceSettings{constructor(properties){Object.assign(this,properties)}}exports.InputDeviceSettings=InputDeviceSettings;class InputVpcRequest{constructor(properties){Object.assign(this,properties)}}exports.InputVpcRequest=InputVpcRequest;class InputDestinationRequest{constructor(properties){Object.assign(this,properties)}}exports.InputDestinationRequest=InputDestinationRequest;class MediaConnectFlowRequest{constructor(properties){Object.assign(this,properties)}}exports.MediaConnectFlowRequest=MediaConnectFlowRequest;class Input extends resource_1.ResourceBase{constructor(properties){super("AWS::MediaLive::Input",properties||{})}}(exports.R=Input).InputSourceRequest=InputSourceRequest,Input.InputDeviceRequest=InputDeviceRequest,Input.InputDeviceSettings=InputDeviceSettings,Input.InputVpcRequest=InputVpcRequest,Input.InputDestinationRequest=InputDestinationRequest,Input.MediaConnectFlowRequest=MediaConnectFlowRequest;