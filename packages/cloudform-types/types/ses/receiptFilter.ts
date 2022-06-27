/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Filter {
    IpFilter!: IpFilter
    Name?: Value<string>

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class IpFilter {
    Policy!: Value<string>
    Cidr!: Value<string>

    constructor(properties: IpFilter) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Filter: Filter
}

class ReceiptFilter extends ResourceBase<Properties> {
    static Filter = Filter
    static IpFilter = IpFilter

    constructor(properties: Properties) {
        super('AWS::SES::ReceiptFilter', properties)
    }
}
export { ReceiptFilter as R }
