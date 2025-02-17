/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
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

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ResumeClusterMessage {
    ClusterIdentifier!: Value<string>

    constructor(properties: ResumeClusterMessage) {
        Object.assign(this, properties)
    }
}

export class PauseClusterMessage {
    ClusterIdentifier!: Value<string>

    constructor(properties: PauseClusterMessage) {
        Object.assign(this, properties)
    }
}

export class ScheduledActionType {
    ResizeCluster?: ResizeClusterMessage
    PauseCluster?: PauseClusterMessage
    ResumeCluster?: ResumeClusterMessage

    constructor(properties: ScheduledActionType) {
        Object.assign(this, properties)
    }
}

export class ResizeClusterMessage {
    ClusterIdentifier!: Value<string>
    ClusterType?: Value<string>
    NodeType?: Value<string>
    NumberOfNodes?: Value<number>
    Classic?: Value<boolean>

    constructor(properties: ResizeClusterMessage) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    ScheduledActionName: Value<string>
    TargetAction?: ScheduledActionType
    Schedule?: Value<string>
    IamRole?: Value<string>
    ScheduledActionDescription?: Value<string>
    StartTime?: Value<string>
    EndTime?: Value<string>
    Enable?: Value<boolean>
}

class ScheduledAction extends ResourceBase<Properties> {
    static ResumeClusterMessage = ResumeClusterMessage
    static PauseClusterMessage = PauseClusterMessage
    static ScheduledActionType = ScheduledActionType
    static ResizeClusterMessage = ResizeClusterMessage

    constructor(properties: Properties) {
        super('AWS::Redshift::ScheduledAction', properties)
    }
}
export { ScheduledAction as R }
