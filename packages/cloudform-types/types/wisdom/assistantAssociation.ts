/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AssociationData {
    KnowledgeBaseId!: Value<string>

    constructor(properties: AssociationData) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    AssistantId: Value<string>
    Association: AssociationData
    AssociationType: Value<string>
    Tags?: List<ResourceTag>
}

class AssistantAssociation extends ResourceBase<Properties> {
    static AssociationData = AssociationData

    constructor(properties: Properties) {
        super('AWS::Wisdom::AssistantAssociation', properties)
    }
}
export { AssistantAssociation as R }
