/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Rule {
    Attribute?: Value<string>
    Operator?: Value<string>
    Value?: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Description?: Value<string>
    MaxDevices?: Value<number>
    Name: Value<string>
    ProjectArn: Value<string>
    Rules: List<Rule>
    Tags?: List<ResourceTag>
}

class DevicePool extends ResourceBase<Properties> {
    static Rule = Rule

    constructor(properties: Properties) {
        super('AWS::DeviceFarm::DevicePool', properties)
    }
}
export { DevicePool as R }
