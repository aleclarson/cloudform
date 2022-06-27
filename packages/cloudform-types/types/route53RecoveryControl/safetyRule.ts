/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AssertionRule {
    WaitPeriodMs!: Value<number>
    AssertedControls!: List<Value<string>>

    constructor(properties: AssertionRule) {
        Object.assign(this, properties)
    }
}

export class RuleConfig {
    Type!: Value<string>
    Threshold!: Value<number>
    Inverted!: Value<boolean>

    constructor(properties: RuleConfig) {
        Object.assign(this, properties)
    }
}

export class GatingRule {
    GatingControls!: List<Value<string>>
    TargetControls!: List<Value<string>>
    WaitPeriodMs!: Value<number>

    constructor(properties: GatingRule) {
        Object.assign(this, properties)
    }
}

export interface SafetyRuleProperties {
    AssertionRule?: AssertionRule
    GatingRule?: GatingRule
    Name: Value<string>
    ControlPanelArn: Value<string>
    RuleConfig: RuleConfig
    Tags?: List<ResourceTag>
}

export default class SafetyRule extends ResourceBase<SafetyRuleProperties> {
    static AssertionRule = AssertionRule
    static RuleConfig = RuleConfig
    static GatingRule = GatingRule

    constructor(properties: SafetyRuleProperties) {
        super('AWS::Route53RecoveryControl::SafetyRule', properties)
    }
}
