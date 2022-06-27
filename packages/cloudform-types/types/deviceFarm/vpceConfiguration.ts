/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface VPCEConfigurationProperties {
    ServiceDnsName: Value<string>
    VpceConfigurationDescription?: Value<string>
    VpceConfigurationName: Value<string>
    VpceServiceName: Value<string>
    Tags?: List<ResourceTag>
}

export default class VPCEConfiguration extends ResourceBase<VPCEConfigurationProperties> {


    constructor(properties: VPCEConfigurationProperties) {
        super('AWS::DeviceFarm::VPCEConfiguration', properties)
    }
}
