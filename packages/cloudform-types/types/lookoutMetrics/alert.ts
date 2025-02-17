/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class SNSConfiguration {
    RoleArn!: Value<string>
    SnsTopicArn!: Value<string>

    constructor(properties: SNSConfiguration) {
        Object.assign(this, properties)
    }
}

export class LambdaConfiguration {
    RoleArn!: Value<string>
    LambdaArn!: Value<string>

    constructor(properties: LambdaConfiguration) {
        Object.assign(this, properties)
    }
}

export class Action {
    SNSConfiguration?: SNSConfiguration
    LambdaConfiguration?: LambdaConfiguration

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    AlertName?: Value<string>
    AlertDescription?: Value<string>
    AnomalyDetectorArn: Value<string>
    AlertSensitivityThreshold: Value<number>
    Action: Action
}

class Alert extends ResourceBase<Properties> {
    static SNSConfiguration = SNSConfiguration
    static LambdaConfiguration = LambdaConfiguration
    static Action = Action

    constructor(properties: Properties) {
        super('AWS::LookoutMetrics::Alert', properties)
    }
}
export { Alert as R }
