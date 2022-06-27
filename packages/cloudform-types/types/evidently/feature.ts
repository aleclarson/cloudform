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

export class VariationObject {
    VariationName?: Value<string>
    BooleanValue?: Value<boolean>
    StringValue?: Value<string>
    LongValue?: Value<number>
    DoubleValue?: Value<number>

    constructor(properties: VariationObject) {
        Object.assign(this, properties)
    }
}

export class EntityOverride {
    EntityId?: Value<string>
    Variation?: Value<string>

    constructor(properties: EntityOverride) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Project: Value<string>
    Name: Value<string>
    Description?: Value<string>
    EvaluationStrategy?: Value<string>
    Variations: List<VariationObject>
    DefaultVariation?: Value<string>
    EntityOverrides?: List<EntityOverride>
    Tags?: List<ResourceTag>
}

class Feature extends ResourceBase<Properties> {
    static VariationObject = VariationObject
    static EntityOverride = EntityOverride

    constructor(properties: Properties) {
        super('AWS::Evidently::Feature', properties)
    }
}
export { Feature as R }
