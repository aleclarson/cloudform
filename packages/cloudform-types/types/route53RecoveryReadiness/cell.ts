/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    CellName: Value<string>
    Cells?: List<Value<string>>
    Tags?: List<ResourceTag>
}

class Cell extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::Route53RecoveryReadiness::Cell', properties)
    }
}
export { Cell as R }
