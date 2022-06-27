/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Component {
    ComponentName?: Value<string>
    ComponentTypeId?: Value<string>
    Description?: Value<string>
    DefinedIn?: Value<string>
    Properties?: {[key: string]: Property}
    Status?: Status

    constructor(properties: Component) {
        Object.assign(this, properties)
    }
}

export class Status {
    State?: Value<string>
    Error?: {[key: string]: any}

    constructor(properties: Status) {
        Object.assign(this, properties)
    }
}

export class Property {
    Definition?: {[key: string]: any}
    Value?: DataValue

    constructor(properties: Property) {
        Object.assign(this, properties)
    }
}

export class DataValue {
    BooleanValue?: Value<boolean>
    DoubleValue?: Value<number>
    Expression?: Value<string>
    IntegerValue?: Value<number>
    ListValue?: List<DataValue>
    LongValue?: Value<number>
    StringValue?: Value<string>
    MapValue?: {[key: string]: DataValue}
    RelationshipValue?: {[key: string]: any}

    constructor(properties: DataValue) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    EntityId?: Value<string>
    EntityName: Value<string>
    ParentEntityId?: Value<string>
    Description?: Value<string>
    Tags?: {[key: string]: Value<string>}
    WorkspaceId: Value<string>
    Components?: {[key: string]: Component}
}

class Entity extends ResourceBase<Properties> {
    static Component = Component
    static Status = Status
    static Property = Property
    static DataValue = DataValue

    constructor(properties: Properties) {
        super('AWS::IoTTwinMaker::Entity', properties)
    }
}
export { Entity as R }
