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

export class WebCrawlerBasicAuthentication {
    Host!: Value<string>
    Port!: Value<number>
    Credentials!: Value<string>

    constructor(properties: WebCrawlerBasicAuthentication) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerUrls {
    SeedUrlConfiguration?: WebCrawlerSeedUrlConfiguration
    SiteMapsConfiguration?: WebCrawlerSiteMapsConfiguration

    constructor(properties: WebCrawlerUrls) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerSeedUrlConfiguration {
    SeedUrls!: List<Value<string>>
    WebCrawlerMode?: Value<string>

    constructor(properties: WebCrawlerSeedUrlConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceAttachmentToIndexFieldMapping {
    DataSourceFieldName!: Value<string>
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>

    constructor(properties: ConfluenceAttachmentToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class SalesforceStandardObjectConfiguration {
    Name!: Value<string>
    DocumentDataFieldName!: Value<string>
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>

    constructor(properties: SalesforceStandardObjectConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceChatterFeedConfiguration {
    DocumentDataFieldName!: Value<string>
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    IncludeFilterTypes?: List<Value<string>>

    constructor(properties: SalesforceChatterFeedConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomDocumentEnrichmentConfiguration {
    InlineConfigurations?: List<InlineCustomDocumentEnrichmentConfiguration>
    PreExtractionHookConfiguration?: HookConfiguration
    PostExtractionHookConfiguration?: HookConfiguration
    RoleArn?: Value<string>

    constructor(properties: CustomDocumentEnrichmentConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceConfiguration {
    ServerUrl!: Value<string>
    SecretArn!: Value<string>
    StandardObjectConfigurations?: List<SalesforceStandardObjectConfiguration>
    KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration
    ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration
    CrawlAttachments?: Value<boolean>
    StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration
    IncludeAttachmentFilePatterns?: List<Value<string>>
    ExcludeAttachmentFilePatterns?: List<Value<string>>

    constructor(properties: SalesforceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ColumnConfiguration {
    DocumentIdColumnName!: Value<string>
    DocumentDataColumnName!: Value<string>
    DocumentTitleColumnName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    ChangeDetectingColumns!: List<Value<string>>

    constructor(properties: ColumnConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceNowKnowledgeArticleConfiguration {
    CrawlAttachments?: Value<boolean>
    IncludeAttachmentFilePatterns?: List<Value<string>>
    ExcludeAttachmentFilePatterns?: List<Value<string>>
    DocumentDataFieldName!: Value<string>
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    FilterQuery?: Value<string>

    constructor(properties: ServiceNowKnowledgeArticleConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceSpaceConfiguration {
    CrawlPersonalSpaces?: Value<boolean>
    CrawlArchivedSpaces?: Value<boolean>
    IncludeSpaces?: List<Value<string>>
    ExcludeSpaces?: List<Value<string>>
    SpaceFieldMappings?: List<ConfluenceSpaceToIndexFieldMapping>

    constructor(properties: ConfluenceSpaceConfiguration) {
        Object.assign(this, properties)
    }
}

export class GoogleDriveConfiguration {
    SecretArn!: Value<string>
    InclusionPatterns?: List<Value<string>>
    ExclusionPatterns?: List<Value<string>>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    ExcludeMimeTypes?: List<Value<string>>
    ExcludeUserAccounts?: List<Value<string>>
    ExcludeSharedDrives?: List<Value<string>>

    constructor(properties: GoogleDriveConfiguration) {
        Object.assign(this, properties)
    }
}

export class DocumentAttributeTarget {
    TargetDocumentAttributeKey!: Value<string>
    TargetDocumentAttributeValueDeletion?: Value<boolean>
    TargetDocumentAttributeValue?: DocumentAttributeValue

    constructor(properties: DocumentAttributeTarget) {
        Object.assign(this, properties)
    }
}

export class WorkDocsConfiguration {
    OrganizationId!: Value<string>
    CrawlComments?: Value<boolean>
    UseChangeLog?: Value<boolean>
    InclusionPatterns?: List<Value<string>>
    ExclusionPatterns?: List<Value<string>>
    FieldMappings?: List<DataSourceToIndexFieldMapping>

    constructor(properties: WorkDocsConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3Path {
    Bucket!: Value<string>
    Key!: Value<string>

    constructor(properties: S3Path) {
        Object.assign(this, properties)
    }
}

export class ProxyConfiguration {
    Host!: Value<string>
    Port!: Value<number>
    Credentials?: Value<string>

    constructor(properties: ProxyConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceNowConfiguration {
    HostUrl!: Value<string>
    SecretArn!: Value<string>
    ServiceNowBuildVersion!: Value<string>
    AuthenticationType?: Value<string>
    KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration
    ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration

    constructor(properties: ServiceNowConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceConfiguration {
    ServerUrl!: Value<string>
    SecretArn!: Value<string>
    Version!: Value<string>
    SpaceConfiguration?: ConfluenceSpaceConfiguration
    PageConfiguration?: ConfluencePageConfiguration
    BlogConfiguration?: ConfluenceBlogConfiguration
    AttachmentConfiguration?: ConfluenceAttachmentConfiguration
    VpcConfiguration?: DataSourceVpcConfiguration
    InclusionPatterns?: List<Value<string>>
    ExclusionPatterns?: List<Value<string>>

    constructor(properties: ConfluenceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluencePageToIndexFieldMapping {
    DataSourceFieldName!: Value<string>
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>

    constructor(properties: ConfluencePageToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class DatabaseConfiguration {
    DatabaseEngineType!: Value<string>
    ConnectionConfiguration!: ConnectionConfiguration
    VpcConfiguration?: DataSourceVpcConfiguration
    ColumnConfiguration!: ColumnConfiguration
    AclConfiguration?: AclConfiguration
    SqlConfiguration?: SqlConfiguration

    constructor(properties: DatabaseConfiguration) {
        Object.assign(this, properties)
    }
}

export class DocumentAttributeCondition {
    ConditionDocumentAttributeKey!: Value<string>
    Operator!: Value<string>
    ConditionOnValue?: DocumentAttributeValue

    constructor(properties: DocumentAttributeCondition) {
        Object.assign(this, properties)
    }
}

export class SqlConfiguration {
    QueryIdentifiersEnclosingOption?: Value<string>

    constructor(properties: SqlConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3DataSourceConfiguration {
    BucketName!: Value<string>
    InclusionPrefixes?: List<Value<string>>
    InclusionPatterns?: List<Value<string>>
    ExclusionPatterns?: List<Value<string>>
    DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration
    AccessControlListConfiguration?: AccessControlListConfiguration

    constructor(properties: S3DataSourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceBlogConfiguration {
    BlogFieldMappings?: List<ConfluenceBlogToIndexFieldMapping>

    constructor(properties: ConfluenceBlogConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluencePageConfiguration {
    PageFieldMappings?: List<ConfluencePageToIndexFieldMapping>

    constructor(properties: ConfluencePageConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConnectionConfiguration {
    DatabaseHost!: Value<string>
    DatabasePort!: Value<number>
    DatabaseName!: Value<string>
    TableName!: Value<string>
    SecretArn!: Value<string>

    constructor(properties: ConnectionConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceNowServiceCatalogConfiguration {
    CrawlAttachments?: Value<boolean>
    IncludeAttachmentFilePatterns?: List<Value<string>>
    ExcludeAttachmentFilePatterns?: List<Value<string>>
    DocumentDataFieldName!: Value<string>
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>

    constructor(properties: ServiceNowServiceCatalogConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceStandardObjectAttachmentConfiguration {
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>

    constructor(properties: SalesforceStandardObjectAttachmentConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceCustomKnowledgeArticleTypeConfiguration {
    Name!: Value<string>
    DocumentDataFieldName!: Value<string>
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>

    constructor(properties: SalesforceCustomKnowledgeArticleTypeConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceBlogToIndexFieldMapping {
    DataSourceFieldName!: Value<string>
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>

    constructor(properties: ConfluenceBlogToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class DocumentAttributeValue {
    StringValue?: Value<string>
    StringListValue?: List<Value<string>>
    LongValue?: Value<number>
    DateValue?: Value<string>

    constructor(properties: DocumentAttributeValue) {
        Object.assign(this, properties)
    }
}

export class InlineCustomDocumentEnrichmentConfiguration {
    Condition?: DocumentAttributeCondition
    Target?: DocumentAttributeTarget
    DocumentContentDeletion?: Value<boolean>

    constructor(properties: InlineCustomDocumentEnrichmentConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerSiteMapsConfiguration {
    SiteMaps!: List<Value<string>>

    constructor(properties: WebCrawlerSiteMapsConfiguration) {
        Object.assign(this, properties)
    }
}

export class OneDriveUsers {
    OneDriveUserList?: List<Value<string>>
    OneDriveUserS3Path?: S3Path

    constructor(properties: OneDriveUsers) {
        Object.assign(this, properties)
    }
}

export class AclConfiguration {
    AllowedGroupsColumnName!: Value<string>

    constructor(properties: AclConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceStandardKnowledgeArticleTypeConfiguration {
    DocumentDataFieldName!: Value<string>
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>

    constructor(properties: SalesforceStandardKnowledgeArticleTypeConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerConfiguration {
    Urls!: WebCrawlerUrls
    CrawlDepth?: Value<number>
    MaxLinksPerPage?: Value<number>
    MaxContentSizePerPageInMegaBytes?: Value<number>
    MaxUrlsPerMinuteCrawlRate?: Value<number>
    UrlInclusionPatterns?: List<Value<string>>
    UrlExclusionPatterns?: List<Value<string>>
    ProxyConfiguration?: ProxyConfiguration
    AuthenticationConfiguration?: WebCrawlerAuthenticationConfiguration

    constructor(properties: WebCrawlerConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceAttachmentConfiguration {
    CrawlAttachments?: Value<boolean>
    AttachmentFieldMappings?: List<ConfluenceAttachmentToIndexFieldMapping>

    constructor(properties: ConfluenceAttachmentConfiguration) {
        Object.assign(this, properties)
    }
}

export class DataSourceVpcConfiguration {
    SubnetIds!: List<Value<string>>
    SecurityGroupIds!: List<Value<string>>

    constructor(properties: DataSourceVpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerAuthenticationConfiguration {
    BasicAuthentication?: List<WebCrawlerBasicAuthentication>

    constructor(properties: WebCrawlerAuthenticationConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceKnowledgeArticleConfiguration {
    IncludedStates!: List<Value<string>>
    StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration
    CustomKnowledgeArticleTypeConfigurations?: List<SalesforceCustomKnowledgeArticleTypeConfiguration>

    constructor(properties: SalesforceKnowledgeArticleConfiguration) {
        Object.assign(this, properties)
    }
}

export class AccessControlListConfiguration {
    KeyPath?: Value<string>

    constructor(properties: AccessControlListConfiguration) {
        Object.assign(this, properties)
    }
}

export class DataSourceToIndexFieldMapping {
    DataSourceFieldName!: Value<string>
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>

    constructor(properties: DataSourceToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class ConfluenceSpaceToIndexFieldMapping {
    DataSourceFieldName!: Value<string>
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>

    constructor(properties: ConfluenceSpaceToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class OneDriveConfiguration {
    TenantDomain!: Value<string>
    SecretArn!: Value<string>
    OneDriveUsers!: OneDriveUsers
    InclusionPatterns?: List<Value<string>>
    ExclusionPatterns?: List<Value<string>>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    DisableLocalGroups?: Value<boolean>

    constructor(properties: OneDriveConfiguration) {
        Object.assign(this, properties)
    }
}

export class DataSourceConfiguration {
    S3Configuration?: S3DataSourceConfiguration
    SharePointConfiguration?: SharePointConfiguration
    SalesforceConfiguration?: SalesforceConfiguration
    OneDriveConfiguration?: OneDriveConfiguration
    ServiceNowConfiguration?: ServiceNowConfiguration
    DatabaseConfiguration?: DatabaseConfiguration
    ConfluenceConfiguration?: ConfluenceConfiguration
    GoogleDriveConfiguration?: GoogleDriveConfiguration
    WebCrawlerConfiguration?: WebCrawlerConfiguration
    WorkDocsConfiguration?: WorkDocsConfiguration

    constructor(properties: DataSourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class HookConfiguration {
    InvocationCondition?: DocumentAttributeCondition
    LambdaArn!: Value<string>
    S3Bucket!: Value<string>

    constructor(properties: HookConfiguration) {
        Object.assign(this, properties)
    }
}

export class SharePointConfiguration {
    SharePointVersion!: Value<string>
    Urls!: List<Value<string>>
    SecretArn!: Value<string>
    CrawlAttachments?: Value<boolean>
    UseChangeLog?: Value<boolean>
    InclusionPatterns?: List<Value<string>>
    ExclusionPatterns?: List<Value<string>>
    VpcConfiguration?: DataSourceVpcConfiguration
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    DocumentTitleFieldName?: Value<string>
    DisableLocalGroups?: Value<boolean>
    SslCertificateS3Path?: S3Path

    constructor(properties: SharePointConfiguration) {
        Object.assign(this, properties)
    }
}

export class DocumentsMetadataConfiguration {
    S3Prefix?: Value<string>

    constructor(properties: DocumentsMetadataConfiguration) {
        Object.assign(this, properties)
    }
}

export interface Properties {
    Name: Value<string>
    IndexId: Value<string>
    Type: Value<string>
    DataSourceConfiguration?: DataSourceConfiguration
    Description?: Value<string>
    Schedule?: Value<string>
    RoleArn?: Value<string>
    Tags?: List<ResourceTag>
    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration
}

class DataSource extends ResourceBase<Properties> {
    static WebCrawlerBasicAuthentication = WebCrawlerBasicAuthentication
    static WebCrawlerUrls = WebCrawlerUrls
    static WebCrawlerSeedUrlConfiguration = WebCrawlerSeedUrlConfiguration
    static ConfluenceAttachmentToIndexFieldMapping = ConfluenceAttachmentToIndexFieldMapping
    static SalesforceStandardObjectConfiguration = SalesforceStandardObjectConfiguration
    static SalesforceChatterFeedConfiguration = SalesforceChatterFeedConfiguration
    static CustomDocumentEnrichmentConfiguration = CustomDocumentEnrichmentConfiguration
    static SalesforceConfiguration = SalesforceConfiguration
    static ColumnConfiguration = ColumnConfiguration
    static ServiceNowKnowledgeArticleConfiguration = ServiceNowKnowledgeArticleConfiguration
    static ConfluenceSpaceConfiguration = ConfluenceSpaceConfiguration
    static GoogleDriveConfiguration = GoogleDriveConfiguration
    static DocumentAttributeTarget = DocumentAttributeTarget
    static WorkDocsConfiguration = WorkDocsConfiguration
    static S3Path = S3Path
    static ProxyConfiguration = ProxyConfiguration
    static ServiceNowConfiguration = ServiceNowConfiguration
    static ConfluenceConfiguration = ConfluenceConfiguration
    static ConfluencePageToIndexFieldMapping = ConfluencePageToIndexFieldMapping
    static DatabaseConfiguration = DatabaseConfiguration
    static DocumentAttributeCondition = DocumentAttributeCondition
    static SqlConfiguration = SqlConfiguration
    static S3DataSourceConfiguration = S3DataSourceConfiguration
    static ConfluenceBlogConfiguration = ConfluenceBlogConfiguration
    static ConfluencePageConfiguration = ConfluencePageConfiguration
    static ConnectionConfiguration = ConnectionConfiguration
    static ServiceNowServiceCatalogConfiguration = ServiceNowServiceCatalogConfiguration
    static SalesforceStandardObjectAttachmentConfiguration = SalesforceStandardObjectAttachmentConfiguration
    static SalesforceCustomKnowledgeArticleTypeConfiguration = SalesforceCustomKnowledgeArticleTypeConfiguration
    static ConfluenceBlogToIndexFieldMapping = ConfluenceBlogToIndexFieldMapping
    static DocumentAttributeValue = DocumentAttributeValue
    static InlineCustomDocumentEnrichmentConfiguration = InlineCustomDocumentEnrichmentConfiguration
    static WebCrawlerSiteMapsConfiguration = WebCrawlerSiteMapsConfiguration
    static OneDriveUsers = OneDriveUsers
    static AclConfiguration = AclConfiguration
    static SalesforceStandardKnowledgeArticleTypeConfiguration = SalesforceStandardKnowledgeArticleTypeConfiguration
    static WebCrawlerConfiguration = WebCrawlerConfiguration
    static ConfluenceAttachmentConfiguration = ConfluenceAttachmentConfiguration
    static DataSourceVpcConfiguration = DataSourceVpcConfiguration
    static WebCrawlerAuthenticationConfiguration = WebCrawlerAuthenticationConfiguration
    static SalesforceKnowledgeArticleConfiguration = SalesforceKnowledgeArticleConfiguration
    static AccessControlListConfiguration = AccessControlListConfiguration
    static DataSourceToIndexFieldMapping = DataSourceToIndexFieldMapping
    static ConfluenceSpaceToIndexFieldMapping = ConfluenceSpaceToIndexFieldMapping
    static OneDriveConfiguration = OneDriveConfiguration
    static DataSourceConfiguration = DataSourceConfiguration
    static HookConfiguration = HookConfiguration
    static SharePointConfiguration = SharePointConfiguration
    static DocumentsMetadataConfiguration = DocumentsMetadataConfiguration

    constructor(properties: Properties) {
        super('AWS::Kendra::DataSource', properties)
    }
}
export { DataSource as R }
