/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AdvancedEventSelector {
    Name?: Value<string>
    FieldSelectors!: List<AdvancedFieldSelector>

    constructor(properties: AdvancedEventSelector) {
        Object.assign(this, properties)
    }
}

export class AdvancedFieldSelector {
    Field!: Value<string>
    Equals?: List<Value<string>>
    StartsWith?: List<Value<string>>
    EndsWith?: List<Value<string>>
    NotEquals?: List<Value<string>>
    NotStartsWith?: List<Value<string>>
    NotEndsWith?: List<Value<string>>

    constructor(properties: AdvancedFieldSelector) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    AdvancedEventSelectors?: List<AdvancedEventSelector>
    MultiRegionEnabled?: Value<boolean>
    Name?: Value<string>
    OrganizationEnabled?: Value<boolean>
    RetentionPeriod?: Value<number>
    TerminationProtectionEnabled?: Value<boolean>
    Tags?: List<ResourceTag>
}

class EventDataStore extends ResourceBase<Properties> {
    static AdvancedEventSelector = AdvancedEventSelector
    static AdvancedFieldSelector = AdvancedFieldSelector

    constructor(properties?: Properties) {
        super('AWS::CloudTrail::EventDataStore', properties || {})
    }
}
export { EventDataStore as R }
