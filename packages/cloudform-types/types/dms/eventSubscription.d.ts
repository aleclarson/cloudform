import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EventSubscriptionProperties {
    SourceType?: Value<string>;
    EventCategories?: List<Value<string>>;
    Enabled?: Value<boolean>;
    SubscriptionName?: Value<string>;
    SnsTopicArn: Value<string>;
    SourceIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class EventSubscription extends ResourceBase<EventSubscriptionProperties> {
    constructor(properties: EventSubscriptionProperties);
}
