"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.LambdaAction=exports.S3Action=exports.SNSAction=exports.StopAction=exports.AddHeaderAction=exports.Rule=exports.WorkmailAction=exports.Action=exports.BounceAction=void 0;const resource_1=require("../resource");class BounceAction{constructor(properties){Object.assign(this,properties)}}exports.BounceAction=BounceAction;class Action{constructor(properties){Object.assign(this,properties)}}exports.Action=Action;class WorkmailAction{constructor(properties){Object.assign(this,properties)}}exports.WorkmailAction=WorkmailAction;class Rule{constructor(properties){Object.assign(this,properties)}}exports.Rule=Rule;class AddHeaderAction{constructor(properties){Object.assign(this,properties)}}exports.AddHeaderAction=AddHeaderAction;class StopAction{constructor(properties){Object.assign(this,properties)}}exports.StopAction=StopAction;class SNSAction{constructor(properties){Object.assign(this,properties)}}exports.SNSAction=SNSAction;class S3Action{constructor(properties){Object.assign(this,properties)}}exports.S3Action=S3Action;class LambdaAction{constructor(properties){Object.assign(this,properties)}}exports.LambdaAction=LambdaAction;class ReceiptRule extends resource_1.ResourceBase{constructor(properties){super("AWS::SES::ReceiptRule",properties)}}(exports.R=ReceiptRule).BounceAction=BounceAction,ReceiptRule.Action=Action,ReceiptRule.WorkmailAction=WorkmailAction,ReceiptRule.Rule=Rule,ReceiptRule.AddHeaderAction=AddHeaderAction,ReceiptRule.StopAction=StopAction,ReceiptRule.SNSAction=SNSAction,ReceiptRule.S3Action=S3Action,ReceiptRule.LambdaAction=LambdaAction;