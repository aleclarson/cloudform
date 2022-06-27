/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class InitialCapacityConfigKeyValuePair {
    Key!: Value<string>
    Value!: InitialCapacityConfig

    constructor(properties: InitialCapacityConfigKeyValuePair) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    SubnetIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class MaximumAllowedResources {
    Cpu!: Value<string>
    Memory!: Value<string>
    Disk?: Value<string>

    constructor(properties: MaximumAllowedResources) {
        Object.assign(this, properties)
    }
}

export class AutoStartConfiguration {
    Enabled?: Value<boolean>

    constructor(properties: AutoStartConfiguration) {
        Object.assign(this, properties)
    }
}

export class WorkerConfiguration {
    Cpu!: Value<string>
    Memory!: Value<string>
    Disk?: Value<string>

    constructor(properties: WorkerConfiguration) {
        Object.assign(this, properties)
    }
}

export class InitialCapacityConfig {
    WorkerCount!: Value<number>
    WorkerConfiguration!: WorkerConfiguration

    constructor(properties: InitialCapacityConfig) {
        Object.assign(this, properties)
    }
}

export class AutoStopConfiguration {
    Enabled?: Value<boolean>
    IdleTimeoutMinutes?: Value<number>

    constructor(properties: AutoStopConfiguration) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name?: Value<string>
    ReleaseLabel: Value<string>
    Type: Value<string>
    InitialCapacity?: List<InitialCapacityConfigKeyValuePair>
    MaximumCapacity?: MaximumAllowedResources
    Tags?: List<ResourceTag>
    AutoStartConfiguration?: AutoStartConfiguration
    AutoStopConfiguration?: AutoStopConfiguration
    NetworkConfiguration?: NetworkConfiguration
}

class Application extends ResourceBase<Properties> {
    static InitialCapacityConfigKeyValuePair = InitialCapacityConfigKeyValuePair
    static NetworkConfiguration = NetworkConfiguration
    static MaximumAllowedResources = MaximumAllowedResources
    static AutoStartConfiguration = AutoStartConfiguration
    static WorkerConfiguration = WorkerConfiguration
    static InitialCapacityConfig = InitialCapacityConfig
    static AutoStopConfiguration = AutoStopConfiguration

    constructor(properties: Properties) {
        super('AWS::EMRServerless::Application', properties)
    }
}
export { Application as R }
