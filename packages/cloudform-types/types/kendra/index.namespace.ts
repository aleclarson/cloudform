/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 78.0.0
 */

import * as _0 from './dataSource'
import * as _1 from './indexResource'
import * as _2 from './faq'

export namespace Kendra {
  export const DataSource = _0.R
  export const Index = _1.R
  export const Faq = _2.R

  export type DataSource = _0.R
  export type Index = _1.R
  export type Faq = _2.R

  export namespace DataSource {
    export type WebCrawlerBasicAuthentication = _0.WebCrawlerBasicAuthentication
    export type WebCrawlerUrls = _0.WebCrawlerUrls
    export type WebCrawlerSeedUrlConfiguration = _0.WebCrawlerSeedUrlConfiguration
    export type ConfluenceAttachmentToIndexFieldMapping = _0.ConfluenceAttachmentToIndexFieldMapping
    export type SalesforceStandardObjectConfiguration = _0.SalesforceStandardObjectConfiguration
    export type SalesforceChatterFeedConfiguration = _0.SalesforceChatterFeedConfiguration
    export type CustomDocumentEnrichmentConfiguration = _0.CustomDocumentEnrichmentConfiguration
    export type SalesforceConfiguration = _0.SalesforceConfiguration
    export type ColumnConfiguration = _0.ColumnConfiguration
    export type ServiceNowKnowledgeArticleConfiguration = _0.ServiceNowKnowledgeArticleConfiguration
    export type ConfluenceSpaceConfiguration = _0.ConfluenceSpaceConfiguration
    export type GoogleDriveConfiguration = _0.GoogleDriveConfiguration
    export type DocumentAttributeTarget = _0.DocumentAttributeTarget
    export type WorkDocsConfiguration = _0.WorkDocsConfiguration
    export type S3Path = _0.S3Path
    export type ProxyConfiguration = _0.ProxyConfiguration
    export type ServiceNowConfiguration = _0.ServiceNowConfiguration
    export type ConfluenceConfiguration = _0.ConfluenceConfiguration
    export type ConfluencePageToIndexFieldMapping = _0.ConfluencePageToIndexFieldMapping
    export type DatabaseConfiguration = _0.DatabaseConfiguration
    export type DocumentAttributeCondition = _0.DocumentAttributeCondition
    export type SqlConfiguration = _0.SqlConfiguration
    export type S3DataSourceConfiguration = _0.S3DataSourceConfiguration
    export type ConfluenceBlogConfiguration = _0.ConfluenceBlogConfiguration
    export type ConfluencePageConfiguration = _0.ConfluencePageConfiguration
    export type ConnectionConfiguration = _0.ConnectionConfiguration
    export type ServiceNowServiceCatalogConfiguration = _0.ServiceNowServiceCatalogConfiguration
    export type SalesforceStandardObjectAttachmentConfiguration = _0.SalesforceStandardObjectAttachmentConfiguration
    export type SalesforceCustomKnowledgeArticleTypeConfiguration = _0.SalesforceCustomKnowledgeArticleTypeConfiguration
    export type ConfluenceBlogToIndexFieldMapping = _0.ConfluenceBlogToIndexFieldMapping
    export type DocumentAttributeValue = _0.DocumentAttributeValue
    export type InlineCustomDocumentEnrichmentConfiguration = _0.InlineCustomDocumentEnrichmentConfiguration
    export type WebCrawlerSiteMapsConfiguration = _0.WebCrawlerSiteMapsConfiguration
    export type OneDriveUsers = _0.OneDriveUsers
    export type AclConfiguration = _0.AclConfiguration
    export type SalesforceStandardKnowledgeArticleTypeConfiguration = _0.SalesforceStandardKnowledgeArticleTypeConfiguration
    export type WebCrawlerConfiguration = _0.WebCrawlerConfiguration
    export type ConfluenceAttachmentConfiguration = _0.ConfluenceAttachmentConfiguration
    export type DataSourceVpcConfiguration = _0.DataSourceVpcConfiguration
    export type WebCrawlerAuthenticationConfiguration = _0.WebCrawlerAuthenticationConfiguration
    export type SalesforceKnowledgeArticleConfiguration = _0.SalesforceKnowledgeArticleConfiguration
    export type AccessControlListConfiguration = _0.AccessControlListConfiguration
    export type DataSourceToIndexFieldMapping = _0.DataSourceToIndexFieldMapping
    export type ConfluenceSpaceToIndexFieldMapping = _0.ConfluenceSpaceToIndexFieldMapping
    export type OneDriveConfiguration = _0.OneDriveConfiguration
    export type DataSourceConfiguration = _0.DataSourceConfiguration
    export type HookConfiguration = _0.HookConfiguration
    export type SharePointConfiguration = _0.SharePointConfiguration
    export type DocumentsMetadataConfiguration = _0.DocumentsMetadataConfiguration
  }
  export namespace Index {
    export type ServerSideEncryptionConfiguration = _1.ServerSideEncryptionConfiguration
    export type JsonTokenTypeConfiguration = _1.JsonTokenTypeConfiguration
    export type ValueImportanceItem = _1.ValueImportanceItem
    export type DocumentMetadataConfiguration = _1.DocumentMetadataConfiguration
    export type UserTokenConfiguration = _1.UserTokenConfiguration
    export type Search = _1.Search
    export type Relevance = _1.Relevance
    export type JwtTokenTypeConfiguration = _1.JwtTokenTypeConfiguration
    export type CapacityUnitsConfiguration = _1.CapacityUnitsConfiguration
  }
  export namespace Faq {
    export type S3Path = _2.S3Path
  }
}
