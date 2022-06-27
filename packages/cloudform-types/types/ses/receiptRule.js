"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class BounceAction{constructor(properties){Object.assign(this,properties)}}exports.BounceAction=BounceAction;class Action{constructor(properties){Object.assign(this,properties)}}exports.Action=Action;class StopAction{constructor(properties){Object.assign(this,properties)}}exports.StopAction=StopAction;class SNSAction{constructor(properties){Object.assign(this,properties)}}exports.SNSAction=SNSAction;class S3Action{constructor(properties){Object.assign(this,properties)}}exports.S3Action=S3Action;class WorkmailAction{constructor(properties){Object.assign(this,properties)}}exports.WorkmailAction=WorkmailAction;class Rule{constructor(properties){Object.assign(this,properties)}}exports.Rule=Rule;class LambdaAction{constructor(properties){Object.assign(this,properties)}}exports.LambdaAction=LambdaAction;class AddHeaderAction{constructor(properties){Object.assign(this,properties)}}exports.AddHeaderAction=AddHeaderAction;class ReceiptRule extends resource_1.ResourceBase{constructor(properties){super("AWS::SES::ReceiptRule",properties)}}(exports.default=ReceiptRule).BounceAction=BounceAction,ReceiptRule.Action=Action,ReceiptRule.StopAction=StopAction,ReceiptRule.SNSAction=SNSAction,ReceiptRule.S3Action=S3Action,ReceiptRule.WorkmailAction=WorkmailAction,ReceiptRule.Rule=Rule,ReceiptRule.LambdaAction=LambdaAction,ReceiptRule.AddHeaderAction=AddHeaderAction,Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ReceiptRuleSet extends resource_1.ResourceBase{constructor(properties){super("AWS::SES::ReceiptRuleSet",properties||{})}}exports.default=ReceiptRuleSet;