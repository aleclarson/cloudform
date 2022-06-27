/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CustomLineItemFlatChargeDetails {
    ChargeValue!: Value<number>

    constructor(properties: CustomLineItemFlatChargeDetails) {
        Object.assign(this, properties)
    }
}

export class CustomLineItemPercentageChargeDetails {
    ChildAssociatedResources?: List<Value<string>>
    PercentageValue!: Value<number>

    constructor(properties: CustomLineItemPercentageChargeDetails) {
        Object.assign(this, properties)
    }
}

export class BillingPeriodRange {
    InclusiveStartBillingPeriod?: Value<string>
    ExclusiveEndBillingPeriod?: Value<string>

    constructor(properties: BillingPeriodRange) {
        Object.assign(this, properties)
    }
}

export class CustomLineItemChargeDetails {
    Flat?: CustomLineItemFlatChargeDetails
    Percentage?: CustomLineItemPercentageChargeDetails
    Type!: Value<string>

    constructor(properties: CustomLineItemChargeDetails) {
        Object.assign(this, properties)
    }
}

export interface CustomLineItemProperties {
    Name: Value<string>
    Description?: Value<string>
    CustomLineItemChargeDetails?: CustomLineItemChargeDetails
    BillingGroupArn: Value<string>
    BillingPeriodRange?: BillingPeriodRange
    Tags?: List<ResourceTag>
}

export default class CustomLineItem extends ResourceBase<CustomLineItemProperties> {
    static CustomLineItemFlatChargeDetails = CustomLineItemFlatChargeDetails
    static CustomLineItemPercentageChargeDetails = CustomLineItemPercentageChargeDetails
    static BillingPeriodRange = BillingPeriodRange
    static CustomLineItemChargeDetails = CustomLineItemChargeDetails

    constructor(properties: CustomLineItemProperties) {
        super('AWS::BillingConductor::CustomLineItem', properties)
    }
}
