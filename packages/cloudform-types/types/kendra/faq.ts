/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class S3Path {
    Bucket!: Value<string>
    Key!: Value<string>

    constructor(properties: S3Path) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    IndexId: Value<string>
    Name: Value<string>
    Description?: Value<string>
    FileFormat?: Value<string>
    S3Path: S3Path
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
}

class Faq extends ResourceBase<Properties> {
    static S3Path = S3Path

    constructor(properties: Properties) {
        super('AWS::Kendra::Faq', properties)
    }
}
export { Faq as R }
