/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class PropertyDefinition {
    Configurations?: {[key: string]: Value<string>}
    DataType?: DataType
    DefaultValue?: DataValue
    IsExternalId?: Value<boolean>
    IsRequiredInEntity?: Value<boolean>
    IsStoredExternally?: Value<boolean>
    IsTimeSeries?: Value<boolean>

    constructor(properties: PropertyDefinition) {
        Object.assign(this, properties)
    }
}

export class DataType {
    AllowedValues?: List<DataValue>
    NestedType?: DataType
    Relationship?: Relationship
    Type!: Value<string>
    UnitOfMeasure?: Value<string>

    constructor(properties: DataType) {
        Object.assign(this, properties)
    }
}

export class DataConnector {
    IsNative?: Value<boolean>
    Lambda?: LambdaFunction

    constructor(properties: DataConnector) {
        Object.assign(this, properties)
    }
}

export class Relationship {
    RelationshipType?: Value<string>
    TargetComponentTypeId?: Value<string>

    constructor(properties: Relationship) {
        Object.assign(this, properties)
    }
}

export class LambdaFunction {
    Arn!: Value<string>

    constructor(properties: LambdaFunction) {
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

export class Function {
    ImplementedBy?: DataConnector
    RequiredProperties?: List<Value<string>>
    Scope?: Value<string>

    constructor(properties: Function) {
        Object.assign(this, properties)
    }
}

export interface ComponentTypeProperties {
    WorkspaceId: Value<string>
    ComponentTypeId: Value<string>
    Description?: Value<string>
    ExtendsFrom?: List<Value<string>>
    Functions?: {[key: string]: Function}
    IsSingleton?: Value<boolean>
    PropertyDefinitions?: {[key: string]: PropertyDefinition}
    Tags?: {[key: string]: Value<string>}
}

export default class ComponentType extends ResourceBase<ComponentTypeProperties> {
    static PropertyDefinition = PropertyDefinition
    static DataType = DataType
    static DataConnector = DataConnector
    static Relationship = Relationship
    static LambdaFunction = LambdaFunction
    static DataValue = DataValue
    static Function = Function

    constructor(properties: ComponentTypeProperties) {
        super('AWS::IoTTwinMaker::ComponentType', properties)
    }
}
