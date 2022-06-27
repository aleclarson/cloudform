/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VpcConfig {
    SecurityGroupIds!: List<Value<string>>
    SubnetIds!: List<Value<string>>
    VpcId!: Value<string>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Description?: Value<string>
    Name: Value<string>
    VpcConfig?: VpcConfig
    Tags?: List<ResourceTag>
}

class TestGridProject extends ResourceBase<Properties> {
    static VpcConfig = VpcConfig

    constructor(properties: Properties) {
        super('AWS::DeviceFarm::TestGridProject', properties)
    }
}
export { TestGridProject as R }
