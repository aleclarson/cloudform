/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface ProjectProperties {
    DefaultJobTimeoutMinutes?: Value<number>
    Name: Value<string>
    Tags?: List<ResourceTag>
}

export default class Project extends ResourceBase<ProjectProperties> {


    constructor(properties: ProjectProperties) {
        super('AWS::DeviceFarm::Project', properties)
    }
}
