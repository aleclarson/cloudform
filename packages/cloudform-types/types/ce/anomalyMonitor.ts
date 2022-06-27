/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ResourceTag {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: ResourceTag) {
        Object.assign(this, properties)
    }
}

export interface AnomalyMonitorProperties {
    MonitorType: Value<string>
    MonitorName: Value<string>
    MonitorDimension?: Value<string>
    MonitorSpecification?: Value<string>
    ResourceTags?: List<ResourceTag>
}

export default class AnomalyMonitor extends ResourceBase<AnomalyMonitorProperties> {
    static ResourceTag = ResourceTag

    constructor(properties: AnomalyMonitorProperties) {
        super('AWS::CE::AnomalyMonitor', properties)
    }
}
