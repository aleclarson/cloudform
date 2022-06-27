/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
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

export class SimulationSoftwareSuite {
    Name!: Value<string>
    Version?: Value<string>

    constructor(properties: SimulationSoftwareSuite) {
        Object.assign(this, properties)
    }
}

export class RobotSoftwareSuite {
    Name!: Value<string>
    Version?: Value<string>

    constructor(properties: RobotSoftwareSuite) {
        Object.assign(this, properties)
    }
}

export class SourceConfig {
    S3Bucket!: Value<string>
    S3Key!: Value<string>
    Architecture!: Value<string>

    constructor(properties: SourceConfig) {
        Object.assign(this, properties)
    }
}

export class RenderingEngine {
    Name!: Value<string>
    Version!: Value<string>

    constructor(properties: RenderingEngine) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name?: Value<string>
    CurrentRevisionId?: Value<string>
    RenderingEngine?: RenderingEngine
    RobotSoftwareSuite: RobotSoftwareSuite
    SimulationSoftwareSuite: SimulationSoftwareSuite
    Sources?: List<SourceConfig>
    Environment?: Value<string>
    Tags?: {[key: string]: Value<string>}
}

class SimulationApplication extends ResourceBase<Properties> {
    static SimulationSoftwareSuite = SimulationSoftwareSuite
    static RobotSoftwareSuite = RobotSoftwareSuite
    static SourceConfig = SourceConfig
    static RenderingEngine = RenderingEngine

    constructor(properties: Properties) {
        super('AWS::RoboMaker::SimulationApplication', properties)
    }
}
export { SimulationApplication as R }
