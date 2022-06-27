/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface PricingPlanProperties {
    Name: Value<string>
    PricingRuleArns?: List<Value<string>>
    Description?: Value<string>
    Tags?: List<ResourceTag>
}

export default class PricingPlan extends ResourceBase<PricingPlanProperties> {


    constructor(properties: PricingPlanProperties) {
        super('AWS::BillingConductor::PricingPlan', properties)
    }
}
