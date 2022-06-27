/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface InstanceProfileProperties {
    Description?: Value<string>
    ExcludeAppPackagesFromCleanup?: List<Value<string>>
    Name: Value<string>
    PackageCleanup?: Value<boolean>
    RebootAfterUse?: Value<boolean>
    Tags?: List<ResourceTag>
}

export default class InstanceProfile extends ResourceBase<InstanceProfileProperties> {


    constructor(properties: InstanceProfileProperties) {
        super('AWS::DeviceFarm::InstanceProfile', properties)
    }
}
