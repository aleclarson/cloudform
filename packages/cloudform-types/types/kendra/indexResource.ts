/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ServerSideEncryptionConfiguration {
    KmsKeyId?: Value<string>

    constructor(properties: ServerSideEncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class JsonTokenTypeConfiguration {
    UserNameAttributeField!: Value<string>
    GroupAttributeField!: Value<string>

    constructor(properties: JsonTokenTypeConfiguration) {
        Object.assign(this, properties)
    }
}

export class ValueImportanceItem {
    Key?: Value<string>
    Value?: Value<number>

    constructor(properties: ValueImportanceItem) {
        Object.assign(this, properties)
    }
}

export class DocumentMetadataConfiguration {
    Name!: Value<string>
    Type!: Value<string>
    Relevance?: Relevance
    Search?: Search

    constructor(properties: DocumentMetadataConfiguration) {
        Object.assign(this, properties)
    }
}

export class UserTokenConfiguration {
    JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration
    JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration

    constructor(properties: UserTokenConfiguration) {
        Object.assign(this, properties)
    }
}

export class Search {
    Facetable?: Value<boolean>
    Searchable?: Value<boolean>
    Displayable?: Value<boolean>
    Sortable?: Value<boolean>

    constructor(properties: Search) {
        Object.assign(this, properties)
    }
}

export class Relevance {
    Freshness?: Value<boolean>
    Importance?: Value<number>
    Duration?: Value<string>
    RankOrder?: Value<string>
    ValueImportanceItems?: List<ValueImportanceItem>

    constructor(properties: Relevance) {
        Object.assign(this, properties)
    }
}

export class JwtTokenTypeConfiguration {
    KeyLocation!: Value<string>
    URL?: Value<string>
    SecretManagerArn?: Value<string>
    UserNameAttributeField?: Value<string>
    GroupAttributeField?: Value<string>
    Issuer?: Value<string>
    ClaimRegex?: Value<string>

    constructor(properties: JwtTokenTypeConfiguration) {
        Object.assign(this, properties)
    }
}

export class CapacityUnitsConfiguration {
    StorageCapacityUnits!: Value<number>
    QueryCapacityUnits!: Value<number>

    constructor(properties: CapacityUnitsConfiguration) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Description?: Value<string>
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration
    Tags?: List<ResourceTag>
    Name: Value<string>
    RoleArn: Value<string>
    Edition: Value<string>
    DocumentMetadataConfigurations?: List<DocumentMetadataConfiguration>
    CapacityUnits?: CapacityUnitsConfiguration
    UserContextPolicy?: Value<string>
    UserTokenConfigurations?: List<UserTokenConfiguration>
}

class Index extends ResourceBase<Properties> {
    static ServerSideEncryptionConfiguration = ServerSideEncryptionConfiguration
    static JsonTokenTypeConfiguration = JsonTokenTypeConfiguration
    static ValueImportanceItem = ValueImportanceItem
    static DocumentMetadataConfiguration = DocumentMetadataConfiguration
    static UserTokenConfiguration = UserTokenConfiguration
    static Search = Search
    static Relevance = Relevance
    static JwtTokenTypeConfiguration = JwtTokenTypeConfiguration
    static CapacityUnitsConfiguration = CapacityUnitsConfiguration

    constructor(properties: Properties) {
        super('AWS::Kendra::Index', properties)
    }
}
export { Index as R }
