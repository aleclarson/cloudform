/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface PricingRuleProperties {
    Name: Value<string>
    Description?: Value<string>
    Scope: Value<string>
    Type: Value<string>
    ModifierPercentage: Value<number>
    Service?: Value<string>
    Tags?: List<ResourceTag>
}

export default class PricingRule extends ResourceBase<PricingRuleProperties> {


    constructor(properties: PricingRuleProperties) {
        super('AWS::BillingConductor::PricingRule', properties)
    }
}
