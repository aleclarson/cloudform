/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class HoursOfOperationConfig {
    Day!: Value<string>
    StartTime!: HoursOfOperationTimeSlice
    EndTime!: HoursOfOperationTimeSlice

    constructor(properties: HoursOfOperationConfig) {
        Object.assign(this, properties)
    }
}

export class HoursOfOperationTimeSlice {
    Hours!: Value<number>
    Minutes!: Value<number>

    constructor(properties: HoursOfOperationTimeSlice) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    InstanceArn: Value<string>
    Name: Value<string>
    Description?: Value<string>
    TimeZone: Value<string>
    Config: List<HoursOfOperationConfig>
    Tags?: List<ResourceTag>
}

class HoursOfOperation extends ResourceBase<Properties> {
    static HoursOfOperationConfig = HoursOfOperationConfig
    static HoursOfOperationTimeSlice = HoursOfOperationTimeSlice

    constructor(properties: Properties) {
        super('AWS::Connect::HoursOfOperation', properties)
    }
}
export { HoursOfOperation as R }
