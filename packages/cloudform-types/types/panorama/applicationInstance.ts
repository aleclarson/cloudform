/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ManifestPayload {
    PayloadData?: Value<string>

    constructor(properties: ManifestPayload) {
        Object.assign(this, properties)
    }
}

export class ManifestOverridesPayload {
    PayloadData?: Value<string>

    constructor(properties: ManifestOverridesPayload) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name?: Value<string>
    Description?: Value<string>
    ManifestPayload: ManifestPayload
    ManifestOverridesPayload?: ManifestOverridesPayload
    RuntimeRoleArn?: Value<string>
    DefaultRuntimeContextDevice: Value<string>
    ApplicationInstanceIdToReplace?: Value<string>
    DeviceId?: Value<string>
    StatusFilter?: Value<string>
    Tags?: List<ResourceTag>
}

class ApplicationInstance extends ResourceBase<Properties> {
    static ManifestPayload = ManifestPayload
    static ManifestOverridesPayload = ManifestOverridesPayload

    constructor(properties: Properties) {
        super('AWS::Panorama::ApplicationInstance', properties)
    }
}
export { ApplicationInstance as R }
