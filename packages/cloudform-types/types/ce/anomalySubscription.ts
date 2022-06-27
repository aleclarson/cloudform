/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Subscriber {
    Address!: Value<string>
    Status?: Value<string>
    Type!: Value<string>

    constructor(properties: Subscriber) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    SubscriptionName: Value<string>
    MonitorArnList: List<Value<string>>
    Subscribers: List<Subscriber>
    Threshold: Value<number>
    Frequency: Value<string>
    ResourceTags?: List<ResourceTag>
}

class AnomalySubscription extends ResourceBase<Properties> {
    static Subscriber = Subscriber
    static ResourceTag = ResourceTag

    constructor(properties: Properties) {
        super('AWS::CE::AnomalySubscription', properties)
    }
}
export { AnomalySubscription as R }
