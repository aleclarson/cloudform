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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AttributeDimension {
    AttributeType?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: AttributeDimension) {
        Object.assign(this, properties)
    }
}

export class Recency {
    Duration!: Value<string>
    RecencyType!: Value<string>

    constructor(properties: Recency) {
        Object.assign(this, properties)
    }
}

export class Groups {
    Type?: Value<string>
    SourceType?: Value<string>
    Dimensions?: List<SegmentDimensions>
    SourceSegments?: List<SourceSegments>

    constructor(properties: Groups) {
        Object.assign(this, properties)
    }
}

export class Location {
    GPSPoint?: GPSPoint
    Country?: SetDimension

    constructor(properties: Location) {
        Object.assign(this, properties)
    }
}

export class SegmentGroups {
    Groups?: List<Groups>
    Include?: Value<string>

    constructor(properties: SegmentGroups) {
        Object.assign(this, properties)
    }
}

export class Coordinates {
    Latitude!: Value<number>
    Longitude!: Value<number>

    constructor(properties: Coordinates) {
        Object.assign(this, properties)
    }
}

export class SegmentDimensions {
    Demographic?: Demographic
    Metrics?: {[key: string]: any}
    Attributes?: {[key: string]: any}
    Behavior?: Behavior
    UserAttributes?: {[key: string]: any}
    Location?: Location

    constructor(properties: SegmentDimensions) {
        Object.assign(this, properties)
    }
}

export class SourceSegments {
    Version?: Value<number>
    Id!: Value<string>

    constructor(properties: SourceSegments) {
        Object.assign(this, properties)
    }
}

export class GPSPoint {
    RangeInKilometers!: Value<number>
    Coordinates!: Coordinates

    constructor(properties: GPSPoint) {
        Object.assign(this, properties)
    }
}

export class Demographic {
    AppVersion?: SetDimension
    DeviceType?: SetDimension
    Platform?: SetDimension
    Channel?: SetDimension
    Model?: SetDimension
    Make?: SetDimension

    constructor(properties: Demographic) {
        Object.assign(this, properties)
    }
}

export class SetDimension {
    DimensionType?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: SetDimension) {
        Object.assign(this, properties)
    }
}

export class Behavior {
    Recency?: Recency

    constructor(properties: Behavior) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    SegmentGroups?: SegmentGroups
    Dimensions?: SegmentDimensions
    ApplicationId: Value<string>
    Tags?: {[key: string]: any}
    Name: Value<string>
}

class Segment extends ResourceBase<Properties> {
    static AttributeDimension = AttributeDimension
    static Recency = Recency
    static Groups = Groups
    static Location = Location
    static SegmentGroups = SegmentGroups
    static Coordinates = Coordinates
    static SegmentDimensions = SegmentDimensions
    static SourceSegments = SourceSegments
    static GPSPoint = GPSPoint
    static Demographic = Demographic
    static SetDimension = SetDimension
    static Behavior = Behavior

    constructor(properties: Properties) {
        super('AWS::Pinpoint::Segment', properties)
    }
}
export { Segment as R }
