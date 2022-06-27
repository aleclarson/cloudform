/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FilterRule {
    FilterType?: Value<string>
    Value?: Value<string>

    constructor(properties: FilterRule) {
        Object.assign(this, properties)
    }
}

export class Options {
    Atime?: Value<string>
    BytesPerSecond?: Value<number>
    Gid?: Value<string>
    LogLevel?: Value<string>
    Mtime?: Value<string>
    OverwriteMode?: Value<string>
    PosixPermissions?: Value<string>
    PreserveDeletedFiles?: Value<string>
    PreserveDevices?: Value<string>
    SecurityDescriptorCopyFlags?: Value<string>
    TaskQueueing?: Value<string>
    TransferMode?: Value<string>
    Uid?: Value<string>
    VerifyMode?: Value<string>
    ObjectTags?: Value<string>

    constructor(properties: Options) {
        Object.assign(this, properties)
    }
}

export class TaskSchedule {
    ScheduleExpression!: Value<string>

    constructor(properties: TaskSchedule) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Excludes?: List<FilterRule>
    Includes?: List<FilterRule>
    Tags?: List<ResourceTag>
    CloudWatchLogGroupArn?: Value<string>
    DestinationLocationArn: Value<string>
    Name?: Value<string>
    Options?: Options
    Schedule?: TaskSchedule
    SourceLocationArn: Value<string>
}

class Task extends ResourceBase<Properties> {
    static FilterRule = FilterRule
    static Options = Options
    static TaskSchedule = TaskSchedule

    constructor(properties: Properties) {
        super('AWS::DataSync::Task', properties)
    }
}
export { Task as R }
