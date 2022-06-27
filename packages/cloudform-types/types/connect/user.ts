/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class UserIdentityInfo {
    Email?: Value<string>
    FirstName?: Value<string>
    LastName?: Value<string>

    constructor(properties: UserIdentityInfo) {
        Object.assign(this, properties)
    }
}

export class UserPhoneConfig {
    AfterContactWorkTimeLimit?: Value<number>
    AutoAccept?: Value<boolean>
    DeskPhoneNumber?: Value<string>
    PhoneType!: Value<string>

    constructor(properties: UserPhoneConfig) {
        Object.assign(this, properties)
    }
}

export interface UserProperties {
    InstanceArn: Value<string>
    DirectoryUserId?: Value<string>
    HierarchyGroupArn?: Value<string>
    Username: Value<string>
    Password?: Value<string>
    RoutingProfileArn: Value<string>
    IdentityInfo?: UserIdentityInfo
    PhoneConfig: UserPhoneConfig
    SecurityProfileArns: List<Value<string>>
    Tags?: List<ResourceTag>
}

export default class User extends ResourceBase<UserProperties> {
    static UserIdentityInfo = UserIdentityInfo
    static UserPhoneConfig = UserPhoneConfig

    constructor(properties: UserProperties) {
        super('AWS::Connect::User', properties)
    }
}
