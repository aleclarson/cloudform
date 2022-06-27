/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface TagProperties {
    CatalogId?: Value<string>
    TagKey: Value<string>
    TagValues: List<Value<string>>
}

export default class Tag extends ResourceBase<TagProperties> {


    constructor(properties: TagProperties) {
        super('AWS::LakeFormation::Tag', properties)
    }
}
