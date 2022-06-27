/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    CatalogId?: Value<string>
    TagKey: Value<string>
    TagValues: List<Value<string>>
}

class Tag extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::LakeFormation::Tag', properties)
    }
}
export { Tag as R }
