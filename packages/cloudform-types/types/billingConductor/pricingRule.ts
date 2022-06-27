/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    Name: Value<string>
    Description?: Value<string>
    Scope: Value<string>
    Type: Value<string>
    ModifierPercentage: Value<number>
    Service?: Value<string>
    Tags?: List<ResourceTag>
}

class PricingRule extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::BillingConductor::PricingRule', properties)
    }
}
export { PricingRule as R }
