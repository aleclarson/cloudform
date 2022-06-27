/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class NotificationConfiguration {
    SnsConfiguration!: SnsConfiguration

    constructor(properties: NotificationConfiguration) {
        Object.assign(this, properties)
    }
}

export class SnsConfiguration {
    TopicArn!: Value<string>

    constructor(properties: SnsConfiguration) {
        Object.assign(this, properties)
    }
}

export class TimestreamConfiguration {
    DatabaseName!: Value<string>
    TableName!: Value<string>
    TimeColumn!: Value<string>
    DimensionMappings!: List<DimensionMapping>
    MultiMeasureMappings?: MultiMeasureMappings
    MixedMeasureMappings?: List<MixedMeasureMapping>
    MeasureNameColumn?: Value<string>

    constructor(properties: TimestreamConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3Configuration {
    BucketName!: Value<string>
    ObjectKeyPrefix?: Value<string>
    EncryptionOption?: Value<string>

    constructor(properties: S3Configuration) {
        Object.assign(this, properties)
    }
}

export class TargetConfiguration {
    TimestreamConfiguration!: TimestreamConfiguration

    constructor(properties: TargetConfiguration) {
        Object.assign(this, properties)
    }
}

export class ScheduleConfiguration {
    ScheduleExpression!: Value<string>

    constructor(properties: ScheduleConfiguration) {
        Object.assign(this, properties)
    }
}

export class ErrorReportConfiguration {
    S3Configuration!: S3Configuration

    constructor(properties: ErrorReportConfiguration) {
        Object.assign(this, properties)
    }
}

export class MultiMeasureMappings {
    TargetMultiMeasureName?: Value<string>
    MultiMeasureAttributeMappings!: List<MultiMeasureAttributeMapping>

    constructor(properties: MultiMeasureMappings) {
        Object.assign(this, properties)
    }
}

export class DimensionMapping {
    Name!: Value<string>
    DimensionValueType!: Value<string>

    constructor(properties: DimensionMapping) {
        Object.assign(this, properties)
    }
}

export class MultiMeasureAttributeMapping {
    SourceColumn!: Value<string>
    MeasureValueType!: Value<string>
    TargetMultiMeasureAttributeName?: Value<string>

    constructor(properties: MultiMeasureAttributeMapping) {
        Object.assign(this, properties)
    }
}

export class MixedMeasureMapping {
    MeasureName?: Value<string>
    SourceColumn?: Value<string>
    TargetMeasureName?: Value<string>
    MeasureValueType!: Value<string>
    MultiMeasureAttributeMappings?: List<MultiMeasureAttributeMapping>

    constructor(properties: MixedMeasureMapping) {
        Object.assign(this, properties)
    }
}

export interface ScheduledQueryProperties {
    ScheduledQueryName?: Value<string>
    QueryString: Value<string>
    ScheduleConfiguration: ScheduleConfiguration
    NotificationConfiguration: NotificationConfiguration
    ClientToken?: Value<string>
    ScheduledQueryExecutionRoleArn: Value<string>
    TargetConfiguration?: TargetConfiguration
    ErrorReportConfiguration: ErrorReportConfiguration
    KmsKeyId?: Value<string>
    Tags?: List<ResourceTag>
}

export default class ScheduledQuery extends ResourceBase<ScheduledQueryProperties> {
    static NotificationConfiguration = NotificationConfiguration
    static SnsConfiguration = SnsConfiguration
    static TimestreamConfiguration = TimestreamConfiguration
    static S3Configuration = S3Configuration
    static TargetConfiguration = TargetConfiguration
    static ScheduleConfiguration = ScheduleConfiguration
    static ErrorReportConfiguration = ErrorReportConfiguration
    static MultiMeasureMappings = MultiMeasureMappings
    static DimensionMapping = DimensionMapping
    static MultiMeasureAttributeMapping = MultiMeasureAttributeMapping
    static MixedMeasureMapping = MixedMeasureMapping

    constructor(properties: ScheduledQueryProperties) {
        super('AWS::Timestream::ScheduledQuery', properties)
    }
}
