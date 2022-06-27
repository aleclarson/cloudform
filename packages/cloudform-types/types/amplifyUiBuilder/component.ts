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

export class Predicate {
    Or?: List<Predicate>
    And?: List<Predicate>
    Field?: Value<string>
    Operator?: Value<string>
    Operand?: Value<string>

    constructor(properties: Predicate) {
        Object.assign(this, properties)
    }
}

export type ComponentOverrides = {[key: string]: any}

export type ComponentOverridesValue = {[key: string]: any}

export type ComponentVariantValues = {[key: string]: any}

export type ComponentEvents = {[key: string]: any}

export class ComponentBindingPropertiesValueProperties {
    Model?: Value<string>
    Field?: Value<string>
    Predicates?: List<Predicate>
    UserAttribute?: Value<string>
    Bucket?: Value<string>
    Key?: Value<string>
    DefaultValue?: Value<string>

    constructor(properties: ComponentBindingPropertiesValueProperties) {
        Object.assign(this, properties)
    }
}

export class SortProperty {
    Field!: Value<string>
    Direction!: Value<string>

    constructor(properties: SortProperty) {
        Object.assign(this, properties)
    }
}

export class ComponentDataConfiguration {
    Model!: Value<string>
    Sort?: List<SortProperty>
    Predicate?: Predicate
    Identifiers?: List<Value<string>>

    constructor(properties: ComponentDataConfiguration) {
        Object.assign(this, properties)
    }
}

export class ActionParameters {
    Type?: ComponentProperty
    Url?: ComponentProperty
    Anchor?: ComponentProperty
    Target?: ComponentProperty
    Global?: ComponentProperty
    Model?: Value<string>
    Id?: ComponentProperty
    Fields?: ComponentProperties
    State?: MutationActionSetStateParameter

    constructor(properties: ActionParameters) {
        Object.assign(this, properties)
    }
}

export class ComponentChild {
    ComponentType!: Value<string>
    Name!: Value<string>
    Properties!: ComponentProperties
    Children?: List<ComponentChild>
    Events?: ComponentEvents

    constructor(properties: ComponentChild) {
        Object.assign(this, properties)
    }
}

export class ComponentBindingPropertiesValue {
    Type?: Value<string>
    BindingProperties?: ComponentBindingPropertiesValueProperties
    DefaultValue?: Value<string>

    constructor(properties: ComponentBindingPropertiesValue) {
        Object.assign(this, properties)
    }
}

export class ComponentConditionProperty {
    Property?: Value<string>
    Field?: Value<string>
    Operator?: Value<string>
    Operand?: Value<string>
    Then?: ComponentProperty
    Else?: ComponentProperty
    OperandType?: Value<string>

    constructor(properties: ComponentConditionProperty) {
        Object.assign(this, properties)
    }
}

export class MutationActionSetStateParameter {
    ComponentName!: Value<string>
    Property!: Value<string>
    Set!: ComponentProperty

    constructor(properties: MutationActionSetStateParameter) {
        Object.assign(this, properties)
    }
}

export class ComponentVariant {
    VariantValues?: ComponentVariantValues
    Overrides?: ComponentOverrides

    constructor(properties: ComponentVariant) {
        Object.assign(this, properties)
    }
}

export type ComponentProperties = {[key: string]: any}

export class ComponentProperty {
    Value?: Value<string>
    BindingProperties?: ComponentPropertyBindingProperties
    CollectionBindingProperties?: ComponentPropertyBindingProperties
    DefaultValue?: Value<string>
    Model?: Value<string>
    Bindings?: FormBindings
    Event?: Value<string>
    UserAttribute?: Value<string>
    Concat?: List<ComponentProperty>
    Condition?: ComponentConditionProperty
    Configured?: Value<boolean>
    Type?: Value<string>
    ImportedValue?: Value<string>
    ComponentName?: Value<string>
    Property?: Value<string>

    constructor(properties: ComponentProperty) {
        Object.assign(this, properties)
    }
}

export type FormBindings = {[key: string]: any}

export class ComponentEvent {
    Action?: Value<string>
    Parameters?: ActionParameters

    constructor(properties: ComponentEvent) {
        Object.assign(this, properties)
    }
}

export class ComponentPropertyBindingProperties {
    Property!: Value<string>
    Field?: Value<string>

    constructor(properties: ComponentPropertyBindingProperties) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    BindingProperties: {[key: string]: ComponentBindingPropertiesValue}
    Children?: List<ComponentChild>
    CollectionProperties?: {[key: string]: ComponentDataConfiguration}
    ComponentType: Value<string>
    Events?: {[key: string]: ComponentEvent}
    Name: Value<string>
    Overrides: {[key: string]: ComponentOverridesValue}
    Properties: {[key: string]: ComponentProperty}
    SchemaVersion?: Value<string>
    SourceId?: Value<string>
    Tags?: {[key: string]: Value<string>}
    Variants: List<ComponentVariant>
}

class Component extends ResourceBase<Properties> {
    static Predicate = Predicate
    static ComponentBindingPropertiesValueProperties = ComponentBindingPropertiesValueProperties
    static SortProperty = SortProperty
    static ComponentDataConfiguration = ComponentDataConfiguration
    static ActionParameters = ActionParameters
    static ComponentChild = ComponentChild
    static ComponentBindingPropertiesValue = ComponentBindingPropertiesValue
    static ComponentConditionProperty = ComponentConditionProperty
    static MutationActionSetStateParameter = MutationActionSetStateParameter
    static ComponentVariant = ComponentVariant
    static ComponentProperty = ComponentProperty
    static ComponentEvent = ComponentEvent
    static ComponentPropertyBindingProperties = ComponentPropertyBindingProperties

    constructor(properties: Properties) {
        super('AWS::AmplifyUIBuilder::Component', properties)
    }
}
export { Component as R }
