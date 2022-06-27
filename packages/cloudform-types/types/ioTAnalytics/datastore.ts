/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class IotSiteWiseMultiLayerStorage {
    CustomerManagedS3Storage?: CustomerManagedS3Storage

    constructor(properties: IotSiteWiseMultiLayerStorage) {
        Object.assign(this, properties)
    }
}

export class FileFormatConfiguration {
    JsonConfiguration?: JsonConfiguration
    ParquetConfiguration?: ParquetConfiguration

    constructor(properties: FileFormatConfiguration) {
        Object.assign(this, properties)
    }
}

export type ServiceManagedS3 = {[key: string]: any}

export class RetentionPeriod {
    NumberOfDays?: Value<number>
    Unlimited?: Value<boolean>

    constructor(properties: RetentionPeriod) {
        Object.assign(this, properties)
    }
}

export class CustomerManagedS3 {
    Bucket!: Value<string>
    RoleArn!: Value<string>
    KeyPrefix?: Value<string>

    constructor(properties: CustomerManagedS3) {
        Object.assign(this, properties)
    }
}

export class DatastorePartitions {
    Partitions?: List<DatastorePartition>

    constructor(properties: DatastorePartitions) {
        Object.assign(this, properties)
    }
}

export class SchemaDefinition {
    Columns?: List<Column>

    constructor(properties: SchemaDefinition) {
        Object.assign(this, properties)
    }
}

export class Column {
    Type!: Value<string>
    Name!: Value<string>

    constructor(properties: Column) {
        Object.assign(this, properties)
    }
}

export class ParquetConfiguration {
    SchemaDefinition?: SchemaDefinition

    constructor(properties: ParquetConfiguration) {
        Object.assign(this, properties)
    }
}

export class DatastoreStorage {
    ServiceManagedS3?: ServiceManagedS3
    CustomerManagedS3?: CustomerManagedS3
    IotSiteWiseMultiLayerStorage?: IotSiteWiseMultiLayerStorage

    constructor(properties: DatastoreStorage) {
        Object.assign(this, properties)
    }
}

export class CustomerManagedS3Storage {
    Bucket!: Value<string>
    KeyPrefix?: Value<string>

    constructor(properties: CustomerManagedS3Storage) {
        Object.assign(this, properties)
    }
}

export class Partition {
    AttributeName!: Value<string>

    constructor(properties: Partition) {
        Object.assign(this, properties)
    }
}

export class DatastorePartition {
    Partition?: Partition
    TimestampPartition?: TimestampPartition

    constructor(properties: DatastorePartition) {
        Object.assign(this, properties)
    }
}

export class TimestampPartition {
    AttributeName!: Value<string>
    TimestampFormat?: Value<string>

    constructor(properties: TimestampPartition) {
        Object.assign(this, properties)
    }
}

export type JsonConfiguration = {[key: string]: any}

export interface Properties {
    DatastoreStorage?: DatastoreStorage
    DatastoreName?: Value<string>
    DatastorePartitions?: DatastorePartitions
    FileFormatConfiguration?: FileFormatConfiguration
    RetentionPeriod?: RetentionPeriod
    Tags?: List<ResourceTag>
}

class Datastore extends ResourceBase<Properties> {
    static IotSiteWiseMultiLayerStorage = IotSiteWiseMultiLayerStorage
    static FileFormatConfiguration = FileFormatConfiguration
    static RetentionPeriod = RetentionPeriod
    static CustomerManagedS3 = CustomerManagedS3
    static DatastorePartitions = DatastorePartitions
    static SchemaDefinition = SchemaDefinition
    static Column = Column
    static ParquetConfiguration = ParquetConfiguration
    static DatastoreStorage = DatastoreStorage
    static CustomerManagedS3Storage = CustomerManagedS3Storage
    static Partition = Partition
    static DatastorePartition = DatastorePartition
    static TimestampPartition = TimestampPartition

    constructor(properties?: Properties) {
        super('AWS::IoTAnalytics::Datastore', properties || {})
    }
}
export { Datastore as R }
