/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
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

export class Threshold {
    Value!: Value<number>
    Type?: Value<string>
    Unit?: Value<string>

    constructor(properties: Threshold) {
        Object.assign(this, properties)
    }
}

export class SubstitutionValue {
    ValueReference!: Value<string>
    Value!: Value<string>

    constructor(properties: SubstitutionValue) {
        Object.assign(this, properties)
    }
}

export class ColumnSelector {
    Regex?: Value<string>
    Name?: Value<string>

    constructor(properties: ColumnSelector) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Name!: Value<string>
    Disabled?: Value<boolean>
    CheckExpression!: Value<string>
    SubstitutionMap?: List<SubstitutionValue>
    Threshold?: Threshold
    ColumnSelectors?: List<ColumnSelector>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name: Value<string>
    Description?: Value<string>
    TargetArn: Value<string>
    Rules: List<Rule>
    Tags?: List<ResourceTag>
}

class Ruleset extends ResourceBase<Properties> {
    static Threshold = Threshold
    static SubstitutionValue = SubstitutionValue
    static ColumnSelector = ColumnSelector
    static Rule = Rule

    constructor(properties: Properties) {
        super('AWS::DataBrew::Ruleset', properties)
    }
}
export { Ruleset as R }
