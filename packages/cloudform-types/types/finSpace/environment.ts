/* Generated from: 
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class FederationParameters {
    SamlMetadataURL?: Value<string>
    FederationProviderName?: Value<string>
    SamlMetadataDocument?: Value<string>
    ApplicationCallBackURL?: Value<string>
    FederationURN?: Value<string>
    AttributeMap?: {[key: string]: any}

    constructor(properties: FederationParameters) {
        Object.assign(this, properties)
    }
}

export class SuperuserParameters {
    FirstName?: Value<string>
    LastName?: Value<string>
    EmailAddress?: Value<string>

    constructor(properties: SuperuserParameters) {
        Object.assign(this, properties)
    }
}

export interface EnvironmentProperties {
    Name: Value<string>
    Description?: Value<string>
    KmsKeyId?: Value<string>
    FederationMode?: Value<string>
    FederationParameters?: FederationParameters
    SuperuserParameters?: SuperuserParameters
    DataBundles?: List<Value<string>>
}

export default class Environment extends ResourceBase<EnvironmentProperties> {
    static FederationParameters = FederationParameters
    static SuperuserParameters = SuperuserParameters

    constructor(properties: EnvironmentProperties) {
        super('AWS::FinSpace::Environment', properties)
    }
}
