/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ClusterEndpoint {
    Endpoint?: Value<string>
    Region?: Value<string>

    constructor(properties: ClusterEndpoint) {
        Object.assign(this, properties)
    }
}

export interface ClusterProperties {
    Name?: Value<string>
    Tags?: List<ResourceTag>
}

export default class Cluster extends ResourceBase<ClusterProperties> {
    static ClusterEndpoint = ClusterEndpoint

    constructor(properties?: ClusterProperties) {
        super('AWS::Route53RecoveryControl::Cluster', properties || {})
    }
}
