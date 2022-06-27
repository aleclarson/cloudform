/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ResourceCollectionFilter {
    CloudFormation?: CloudFormationCollectionFilter
    Tags?: List<TagCollection>

    constructor(properties: ResourceCollectionFilter) {
        Object.assign(this, properties)
    }
}

export class TagCollection {
    AppBoundaryKey?: Value<string>
    TagValues?: List<Value<string>>

    constructor(properties: TagCollection) {
        Object.assign(this, properties)
    }
}

export class CloudFormationCollectionFilter {
    StackNames?: List<Value<string>>

    constructor(properties: CloudFormationCollectionFilter) {
        Object.assign(this, properties)
    }
}

export interface ResourceCollectionProperties {
    ResourceCollectionFilter: ResourceCollectionFilter
}

export default class ResourceCollection extends ResourceBase<ResourceCollectionProperties> {
    static ResourceCollectionFilter = ResourceCollectionFilter
    static TagCollection = TagCollection
    static CloudFormationCollectionFilter = CloudFormationCollectionFilter

    constructor(properties: ResourceCollectionProperties) {
        super('AWS::DevOpsGuru::ResourceCollection', properties)
    }
}
