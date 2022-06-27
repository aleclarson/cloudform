/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class HeaderObject {
    HeadersAllowList?: List<Value<string>>
    Option?: Value<string>

    constructor(properties: HeaderObject) {
        Object.assign(this, properties)
    }
}

export class CacheSettings {
    AllowedHTTPMethods?: Value<string>
    CachedHTTPMethods?: Value<string>
    DefaultTTL?: Value<number>
    MaximumTTL?: Value<number>
    MinimumTTL?: Value<number>
    ForwardedCookies?: CookieObject
    ForwardedHeaders?: HeaderObject
    ForwardedQueryStrings?: QueryStringObject

    constructor(properties: CacheSettings) {
        Object.assign(this, properties)
    }
}

export class InputOrigin {
    Name?: Value<string>
    ProtocolPolicy?: Value<string>
    RegionName?: Value<string>

    constructor(properties: InputOrigin) {
        Object.assign(this, properties)
    }
}

export class QueryStringObject {
    QueryStringsAllowList?: List<Value<string>>
    Option?: Value<boolean>

    constructor(properties: QueryStringObject) {
        Object.assign(this, properties)
    }
}

export class CacheBehavior {
    Behavior?: Value<string>

    constructor(properties: CacheBehavior) {
        Object.assign(this, properties)
    }
}

export class CacheBehaviorPerPath {
    Behavior?: Value<string>
    Path?: Value<string>

    constructor(properties: CacheBehaviorPerPath) {
        Object.assign(this, properties)
    }
}

export class CookieObject {
    CookiesAllowList?: List<Value<string>>
    Option?: Value<string>

    constructor(properties: CookieObject) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    DistributionName: Value<string>
    BundleId: Value<string>
    IpAddressType?: Value<string>
    CacheBehaviors?: List<CacheBehaviorPerPath>
    CacheBehaviorSettings?: CacheSettings
    DefaultCacheBehavior: CacheBehavior
    Origin: InputOrigin
    IsEnabled?: Value<boolean>
    CertificateName?: Value<string>
    Tags?: List<ResourceTag>
}

class Distribution extends ResourceBase<Properties> {
    static HeaderObject = HeaderObject
    static CacheSettings = CacheSettings
    static InputOrigin = InputOrigin
    static QueryStringObject = QueryStringObject
    static CacheBehavior = CacheBehavior
    static CacheBehaviorPerPath = CacheBehaviorPerPath
    static CookieObject = CookieObject

    constructor(properties: Properties) {
        super('AWS::Lightsail::Distribution', properties)
    }
}
export { Distribution as R }
