/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class StreamingSessionStorageRoot {
    Linux?: Value<string>
    Windows?: Value<string>

    constructor(properties: StreamingSessionStorageRoot) {
        Object.assign(this, properties)
    }
}

export class StreamConfiguration {
    ClipboardMode!: Value<string>
    Ec2InstanceTypes!: List<Value<string>>
    MaxSessionLengthInMinutes?: Value<number>
    StreamingImageIds!: List<Value<string>>
    MaxStoppedSessionLengthInMinutes?: Value<number>
    SessionStorage?: StreamConfigurationSessionStorage

    constructor(properties: StreamConfiguration) {
        Object.assign(this, properties)
    }
}

export class StreamConfigurationSessionStorage {
    Root?: StreamingSessionStorageRoot
    Mode?: List<Value<string>>

    constructor(properties: StreamConfigurationSessionStorage) {
        Object.assign(this, properties)
    }
}

export interface LaunchProfileProperties {
    Description?: Value<string>
    Ec2SubnetIds: List<Value<string>>
    LaunchProfileProtocolVersions: List<Value<string>>
    Name: Value<string>
    StreamConfiguration: StreamConfiguration
    StudioComponentIds: List<Value<string>>
    StudioId: Value<string>
    Tags?: {[key: string]: Value<string>}
}

export default class LaunchProfile extends ResourceBase<LaunchProfileProperties> {
    static StreamingSessionStorageRoot = StreamingSessionStorageRoot
    static StreamConfiguration = StreamConfiguration
    static StreamConfigurationSessionStorage = StreamConfigurationSessionStorage

    constructor(properties: LaunchProfileProperties) {
        super('AWS::NimbleStudio::LaunchProfile', properties)
    }
}
