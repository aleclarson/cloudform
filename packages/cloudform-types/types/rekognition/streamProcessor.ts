/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ConnectedHomeSettings {
    Labels!: List<Value<string>>
    MinConfidence?: Value<number>

    constructor(properties: ConnectedHomeSettings) {
        Object.assign(this, properties)
    }
}

export class Point {
    X!: Value<number>
    Y!: Value<number>

    constructor(properties: Point) {
        Object.assign(this, properties)
    }
}

export class KinesisDataStream {
    Arn!: Value<string>

    constructor(properties: KinesisDataStream) {
        Object.assign(this, properties)
    }
}

export class FaceSearchSettings {
    CollectionId!: Value<string>
    FaceMatchThreshold?: Value<number>

    constructor(properties: FaceSearchSettings) {
        Object.assign(this, properties)
    }
}

export class S3Destination {
    BucketName!: Value<string>
    ObjectKeyPrefix?: Value<string>

    constructor(properties: S3Destination) {
        Object.assign(this, properties)
    }
}

export class DataSharingPreference {
    OptIn!: Value<boolean>

    constructor(properties: DataSharingPreference) {
        Object.assign(this, properties)
    }
}

export class NotificationChannel {
    Arn!: Value<string>

    constructor(properties: NotificationChannel) {
        Object.assign(this, properties)
    }
}

export class KinesisVideoStream {
    Arn!: Value<string>

    constructor(properties: KinesisVideoStream) {
        Object.assign(this, properties)
    }
}

export class BoundingBox {
    Height!: Value<number>
    Width!: Value<number>
    Left!: Value<number>
    Top!: Value<number>

    constructor(properties: BoundingBox) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name?: Value<string>
    KmsKeyId?: Value<string>
    RoleArn: Value<string>
    KinesisVideoStream: KinesisVideoStream
    FaceSearchSettings?: FaceSearchSettings
    ConnectedHomeSettings?: ConnectedHomeSettings
    KinesisDataStream?: KinesisDataStream
    S3Destination?: S3Destination
    NotificationChannel?: NotificationChannel
    DataSharingPreference?: DataSharingPreference
    PolygonRegionsOfInterest?: List<List<any>>
    BoundingBoxRegionsOfInterest?: List<BoundingBox>
    Tags?: List<ResourceTag>
}

class StreamProcessor extends ResourceBase<Properties> {
    static ConnectedHomeSettings = ConnectedHomeSettings
    static Point = Point
    static KinesisDataStream = KinesisDataStream
    static FaceSearchSettings = FaceSearchSettings
    static S3Destination = S3Destination
    static DataSharingPreference = DataSharingPreference
    static NotificationChannel = NotificationChannel
    static KinesisVideoStream = KinesisVideoStream
    static BoundingBox = BoundingBox

    constructor(properties: Properties) {
        super('AWS::Rekognition::StreamProcessor', properties)
    }
}
export { StreamProcessor as R }
