/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    DefaultJobTimeoutMinutes?: Value<number>
    Name: Value<string>
    Tags?: List<ResourceTag>
}

class Project extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::DeviceFarm::Project', properties)
    }
}
export { Project as R }
