import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{AssessmentTargetName?:Value<string>;ResourceGroupArn?:Value<string>;}declare class AssessmentTarget extends ResourceBase<Properties>{constructor(properties?:Properties);}export{AssessmentTarget as R};