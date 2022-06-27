/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    MonitorType: Value<string>
    MonitorName: Value<string>
    MonitorDimension?: Value<string>
    MonitorSpecification?: Value<string>
    ResourceTags?: List<ResourceTag>
}

class AnomalyMonitor extends ResourceBase<Properties> {
    static ResourceTag = ResourceTag

    constructor(properties: Properties) {
        super('AWS::CE::AnomalyMonitor', properties)
    }
}
export { AnomalyMonitor as R }
