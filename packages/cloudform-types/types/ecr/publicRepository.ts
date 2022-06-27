/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    RepositoryName?: Value<string>
    RepositoryPolicyText?: {[key: string]: any}
    RepositoryCatalogData?: {[key: string]: any}
    Tags?: List<ResourceTag>
}

class PublicRepository extends ResourceBase<Properties> {


    constructor(properties?: Properties) {
        super('AWS::ECR::PublicRepository', properties || {})
    }
}
export { PublicRepository as R }
