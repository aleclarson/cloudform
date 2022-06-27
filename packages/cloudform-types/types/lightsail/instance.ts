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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MonthlyTransfer {
    GbPerMonthAllocated?: Value<string>

    constructor(properties: MonthlyTransfer) {
        Object.assign(this, properties)
    }
}

export class Port {
    FromPort?: Value<number>
    ToPort?: Value<number>
    Protocol?: Value<string>
    AccessFrom?: Value<string>
    AccessType?: Value<string>
    CommonName?: Value<string>
    AccessDirection?: Value<string>
    Ipv6Cidrs?: List<Value<string>>
    CidrListAliases?: List<Value<string>>
    Cidrs?: List<Value<string>>

    constructor(properties: Port) {
        Object.assign(this, properties)
    }
}

export class AddOn {
    AddOnType!: Value<string>
    Status?: Value<string>
    AutoSnapshotAddOnRequest?: AutoSnapshotAddOn

    constructor(properties: AddOn) {
        Object.assign(this, properties)
    }
}

export class AutoSnapshotAddOn {
    SnapshotTimeOfDay?: Value<string>

    constructor(properties: AutoSnapshotAddOn) {
        Object.assign(this, properties)
    }
}

export class Disk {
    DiskName!: Value<string>
    SizeInGb?: Value<string>
    IsSystemDisk?: Value<boolean>
    IOPS?: Value<number>
    Path!: Value<string>
    AttachedTo?: Value<string>
    AttachmentState?: Value<string>

    constructor(properties: Disk) {
        Object.assign(this, properties)
    }
}

export class Hardware {
    CpuCount?: Value<number>
    RamSizeInGb?: Value<number>
    Disks?: List<Disk>

    constructor(properties: Hardware) {
        Object.assign(this, properties)
    }
}

export class Location {
    AvailabilityZone?: Value<string>
    RegionName?: Value<string>

    constructor(properties: Location) {
        Object.assign(this, properties)
    }
}

export class Networking {
    Ports!: List<Port>
    MonthlyTransfer?: MonthlyTransfer

    constructor(properties: Networking) {
        Object.assign(this, properties)
    }
}

export class State {
    Code?: Value<number>
    Name?: Value<string>

    constructor(properties: State) {
        Object.assign(this, properties)
    }
}

export interface InstanceProperties {
    Hardware?: Hardware
    Networking?: Networking
    InstanceName: Value<string>
    AvailabilityZone?: Value<string>
    BundleId: Value<string>
    BlueprintId: Value<string>
    AddOns?: List<AddOn>
    UserData?: Value<string>
    KeyPairName?: Value<string>
    Tags?: List<ResourceTag>
}

export default class Instance extends ResourceBase<InstanceProperties> {
    static MonthlyTransfer = MonthlyTransfer
    static Port = Port
    static AddOn = AddOn
    static AutoSnapshotAddOn = AutoSnapshotAddOn
    static Disk = Disk
    static Hardware = Hardware
    static Location = Location
    static Networking = Networking
    static State = State

    constructor(properties: InstanceProperties) {
        super('AWS::Lightsail::Instance', properties)
    }
}
