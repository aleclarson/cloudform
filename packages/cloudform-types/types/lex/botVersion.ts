/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class BotVersionLocaleDetails {
    SourceBotVersion!: Value<string>

    constructor(properties: BotVersionLocaleDetails) {
        Object.assign(this, properties)
    }
}

export class BotVersionLocaleSpecification {
    LocaleId!: Value<string>
    BotVersionLocaleDetails!: BotVersionLocaleDetails

    constructor(properties: BotVersionLocaleSpecification) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    BotId: Value<string>
    Description?: Value<string>
    BotVersionLocaleSpecification: List<BotVersionLocaleSpecification>
}

class BotVersion extends ResourceBase<Properties> {
    static BotVersionLocaleDetails = BotVersionLocaleDetails
    static BotVersionLocaleSpecification = BotVersionLocaleSpecification

    constructor(properties: Properties) {
        super('AWS::Lex::BotVersion', properties)
    }
}
export { BotVersion as R }
