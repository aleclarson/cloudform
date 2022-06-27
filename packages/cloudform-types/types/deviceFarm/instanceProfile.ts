/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    Description?: Value<string>
    ExcludeAppPackagesFromCleanup?: List<Value<string>>
    Name: Value<string>
    PackageCleanup?: Value<boolean>
    RebootAfterUse?: Value<boolean>
    Tags?: List<ResourceTag>
}

class InstanceProfile extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::DeviceFarm::InstanceProfile', properties)
    }
}
export { InstanceProfile as R }
