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

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CustomAction {
    ActionName!: Value<string>
    ActionDefinition!: ActionDefinition

    constructor(properties: CustomAction) {
        Object.assign(this, properties)
    }
}

export class StatelessRuleGroupReference {
    ResourceArn!: Value<string>
    Priority!: Value<number>

    constructor(properties: StatelessRuleGroupReference) {
        Object.assign(this, properties)
    }
}

export class StatefulRuleGroupReference {
    ResourceArn!: Value<string>
    Priority?: Value<number>

    constructor(properties: StatefulRuleGroupReference) {
        Object.assign(this, properties)
    }
}

export class PublishMetricAction {
    Dimensions!: List<Dimension>

    constructor(properties: PublishMetricAction) {
        Object.assign(this, properties)
    }
}

export class ActionDefinition {
    PublishMetricAction?: PublishMetricAction

    constructor(properties: ActionDefinition) {
        Object.assign(this, properties)
    }
}

export class Dimension {
    Value!: Value<string>

    constructor(properties: Dimension) {
        Object.assign(this, properties)
    }
}

export class FirewallPolicyInner {
    StatelessDefaultActions!: List<Value<string>>
    StatelessFragmentDefaultActions!: List<Value<string>>
    StatelessCustomActions?: List<CustomAction>
    StatelessRuleGroupReferences?: List<StatelessRuleGroupReference>
    StatefulRuleGroupReferences?: List<StatefulRuleGroupReference>
    StatefulDefaultActions?: List<Value<string>>
    StatefulEngineOptions?: StatefulEngineOptions

    constructor(properties: FirewallPolicyInner) {
        Object.assign(this, properties)
    }
}

export class StatefulEngineOptions {
    RuleOrder?: Value<string>

    constructor(properties: StatefulEngineOptions) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    FirewallPolicyName: Value<string>
    FirewallPolicy: FirewallPolicy
    Description?: Value<string>
    Tags?: List<ResourceTag>
}

class FirewallPolicy extends ResourceBase<Properties> {
    static CustomAction = CustomAction
    static StatelessRuleGroupReference = StatelessRuleGroupReference
    static StatefulRuleGroupReference = StatefulRuleGroupReference
    static PublishMetricAction = PublishMetricAction
    static ActionDefinition = ActionDefinition
    static Dimension = Dimension
    static FirewallPolicy = FirewallPolicyInner
    static StatefulEngineOptions = StatefulEngineOptions

    constructor(properties: Properties) {
        super('AWS::NetworkFirewall::FirewallPolicy', properties)
    }
}
export { FirewallPolicy as R }
