/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    Name: Value<string>
    PricingRuleArns?: List<Value<string>>
    Description?: Value<string>
    Tags?: List<ResourceTag>
}

class PricingPlan extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::BillingConductor::PricingPlan', properties)
    }
}
export { PricingPlan as R }
