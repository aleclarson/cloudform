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

export class RegionalConfiguration {
    ReplicationGroupId?: Value<string>
    ReplicationGroupRegion?: Value<string>
    ReshardingConfigurations?: List<ReshardingConfiguration>

    constructor(properties: RegionalConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReshardingConfiguration {
    NodeGroupId?: Value<string>
    PreferredAvailabilityZones?: List<Value<string>>

    constructor(properties: ReshardingConfiguration) {
        Object.assign(this, properties)
    }
}

export class GlobalReplicationGroupMember {
    ReplicationGroupId?: Value<string>
    ReplicationGroupRegion?: Value<string>
    Role?: Value<string>

    constructor(properties: GlobalReplicationGroupMember) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    GlobalReplicationGroupIdSuffix?: Value<string>
    AutomaticFailoverEnabled?: Value<boolean>
    CacheNodeType?: Value<string>
    EngineVersion?: Value<string>
    CacheParameterGroupName?: Value<string>
    GlobalNodeGroupCount?: Value<number>
    GlobalReplicationGroupDescription?: Value<string>
    Members: List<GlobalReplicationGroupMember>
    RegionalConfigurations?: List<RegionalConfiguration>
}

class GlobalReplicationGroup extends ResourceBase<Properties> {
    static RegionalConfiguration = RegionalConfiguration
    static ReshardingConfiguration = ReshardingConfiguration
    static GlobalReplicationGroupMember = GlobalReplicationGroupMember

    constructor(properties: Properties) {
        super('AWS::ElastiCache::GlobalReplicationGroup', properties)
    }
}
export { GlobalReplicationGroup as R }
