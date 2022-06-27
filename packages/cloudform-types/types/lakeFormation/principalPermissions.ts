/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DataLocationResource {
    CatalogId!: Value<string>
    ResourceArn!: Value<string>

    constructor(properties: DataLocationResource) {
        Object.assign(this, properties)
    }
}

export class LFTagKeyResource {
    CatalogId!: Value<string>
    TagKey!: Value<string>
    TagValues!: List<Value<string>>

    constructor(properties: LFTagKeyResource) {
        Object.assign(this, properties)
    }
}

export type CatalogResource = {[key: string]: any}

export class TableResource {
    CatalogId!: Value<string>
    DatabaseName!: Value<string>
    Name?: Value<string>
    TableWildcard?: TableWildcard

    constructor(properties: TableResource) {
        Object.assign(this, properties)
    }
}

export type TableWildcard = {[key: string]: any}

export class ColumnWildcard {
    ExcludedColumnNames?: List<Value<string>>

    constructor(properties: ColumnWildcard) {
        Object.assign(this, properties)
    }
}

export class DatabaseResource {
    CatalogId!: Value<string>
    Name!: Value<string>

    constructor(properties: DatabaseResource) {
        Object.assign(this, properties)
    }
}

export class TableWithColumnsResource {
    CatalogId!: Value<string>
    DatabaseName!: Value<string>
    Name!: Value<string>
    ColumnNames?: List<Value<string>>
    ColumnWildcard?: ColumnWildcard

    constructor(properties: TableWithColumnsResource) {
        Object.assign(this, properties)
    }
}

export class Resource {
    Catalog?: CatalogResource
    Database?: DatabaseResource
    Table?: TableResource
    TableWithColumns?: TableWithColumnsResource
    DataLocation?: DataLocationResource
    DataCellsFilter?: DataCellsFilterResource
    LFTag?: LFTagKeyResource
    LFTagPolicy?: LFTagPolicyResource

    constructor(properties: Resource) {
        Object.assign(this, properties)
    }
}

export class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>

    constructor(properties: DataLakePrincipal) {
        Object.assign(this, properties)
    }
}

export class LFTag {
    TagKey?: Value<string>
    TagValues?: List<Value<string>>

    constructor(properties: LFTag) {
        Object.assign(this, properties)
    }
}

export class LFTagPolicyResource {
    CatalogId!: Value<string>
    ResourceType!: Value<string>
    Expression!: List<LFTag>

    constructor(properties: LFTagPolicyResource) {
        Object.assign(this, properties)
    }
}

export class DataCellsFilterResource {
    TableCatalogId!: Value<string>
    DatabaseName!: Value<string>
    TableName!: Value<string>
    Name!: Value<string>

    constructor(properties: DataCellsFilterResource) {
        Object.assign(this, properties)
    }
}

export interface PrincipalPermissionsProperties {
    Catalog?: Value<string>
    Principal: DataLakePrincipal
    Resource: Resource
    Permissions: List<Value<string>>
    PermissionsWithGrantOption: List<Value<string>>
}

export default class PrincipalPermissions extends ResourceBase<PrincipalPermissionsProperties> {
    static DataLocationResource = DataLocationResource
    static LFTagKeyResource = LFTagKeyResource
    static TableResource = TableResource
    static ColumnWildcard = ColumnWildcard
    static DatabaseResource = DatabaseResource
    static TableWithColumnsResource = TableWithColumnsResource
    static Resource = Resource
    static DataLakePrincipal = DataLakePrincipal
    static LFTag = LFTag
    static LFTagPolicyResource = LFTagPolicyResource
    static DataCellsFilterResource = DataCellsFilterResource

    constructor(properties: PrincipalPermissionsProperties) {
        super('AWS::LakeFormation::PrincipalPermissions', properties)
    }
}
