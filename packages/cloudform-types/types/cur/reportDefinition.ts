/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface Properties {
    ReportName: Value<string>
    TimeUnit: Value<string>
    Format: Value<string>
    Compression: Value<string>
    AdditionalSchemaElements?: List<Value<string>>
    S3Bucket: Value<string>
    S3Prefix: Value<string>
    S3Region: Value<string>
    AdditionalArtifacts?: List<Value<string>>
    RefreshClosedReports: Value<boolean>
    ReportVersioning: Value<string>
    BillingViewArn?: Value<string>
}

class ReportDefinition extends ResourceBase<Properties> {


    constructor(properties: Properties) {
        super('AWS::CUR::ReportDefinition', properties)
    }
}
export { ReportDefinition as R }
