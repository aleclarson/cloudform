/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ComputationPreference {
    PricingPlanArn!: Value<string>

    constructor(properties: ComputationPreference) {
        Object.assign(this, properties)
    }
}

export class AccountGrouping {
    LinkedAccountIds!: List<Value<string>>

    constructor(properties: AccountGrouping) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name: Value<string>
    Description?: Value<string>
    PrimaryAccountId: Value<string>
    ComputationPreference: ComputationPreference
    AccountGrouping: AccountGrouping
    Tags?: List<ResourceTag>
}

class BillingGroup extends ResourceBase<Properties> {
    static ComputationPreference = ComputationPreference
    static AccountGrouping = AccountGrouping

    constructor(properties: Properties) {
        super('AWS::BillingConductor::BillingGroup', properties)
    }
}
export { BillingGroup as R }
