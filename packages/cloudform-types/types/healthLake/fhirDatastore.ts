/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class SseConfiguration {
    KmsEncryptionConfig!: KmsEncryptionConfig

    constructor(properties: SseConfiguration) {
        Object.assign(this, properties)
    }
}

export class PreloadDataConfig {
    PreloadDataType!: Value<string>

    constructor(properties: PreloadDataConfig) {
        Object.assign(this, properties)
    }
}

export class KmsEncryptionConfig {
    CmkType!: Value<string>
    KmsKeyId?: Value<string>

    constructor(properties: KmsEncryptionConfig) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    DatastoreName?: Value<string>
    DatastoreTypeVersion: Value<string>
    PreloadDataConfig?: PreloadDataConfig
    SseConfiguration?: SseConfiguration
    Tags?: List<ResourceTag>
}

class FHIRDatastore extends ResourceBase<Properties> {
    static SseConfiguration = SseConfiguration
    static PreloadDataConfig = PreloadDataConfig
    static KmsEncryptionConfig = KmsEncryptionConfig

    constructor(properties: Properties) {
        super('AWS::HealthLake::FHIRDatastore', properties)
    }
}
export { FHIRDatastore as R }
