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
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Endpoint {
    Address?: Value<string>
    Port?: Value<number>

    constructor(properties: Endpoint) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    ClusterName: Value<string>
    Description?: Value<string>
    NodeType: Value<string>
    NumShards?: Value<number>
    NumReplicasPerShard?: Value<number>
    SubnetGroupName?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    MaintenanceWindow?: Value<string>
    ParameterGroupName?: Value<string>
    Port?: Value<number>
    SnapshotRetentionLimit?: Value<number>
    SnapshotWindow?: Value<string>
    ACLName: Value<string>
    SnsTopicArn?: Value<string>
    SnsTopicStatus?: Value<string>
    TLSEnabled?: Value<boolean>
    KmsKeyId?: Value<string>
    SnapshotArns?: List<Value<string>>
    SnapshotName?: Value<string>
    FinalSnapshotName?: Value<string>
    EngineVersion?: Value<string>
    AutoMinorVersionUpgrade?: Value<boolean>
    Tags?: List<ResourceTag>
}

class Cluster extends ResourceBase<Properties> {
    static Endpoint = Endpoint

    constructor(properties: Properties) {
        super('AWS::MemoryDB::Cluster', properties)
    }
}
export { Cluster as R }
