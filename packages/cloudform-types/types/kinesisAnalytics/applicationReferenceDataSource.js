"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ReferenceDataSource=exports.JSONMappingParameters=exports.MappingParameters=exports.ReferenceSchema=exports.RecordColumn=exports.S3ReferenceDataSource=exports.CSVMappingParameters=exports.RecordFormat=void 0;const resource_1=require("../resource");class RecordFormat{constructor(properties){Object.assign(this,properties)}}exports.RecordFormat=RecordFormat;class CSVMappingParameters{constructor(properties){Object.assign(this,properties)}}exports.CSVMappingParameters=CSVMappingParameters;class S3ReferenceDataSource{constructor(properties){Object.assign(this,properties)}}exports.S3ReferenceDataSource=S3ReferenceDataSource;class RecordColumn{constructor(properties){Object.assign(this,properties)}}exports.RecordColumn=RecordColumn;class ReferenceSchema{constructor(properties){Object.assign(this,properties)}}exports.ReferenceSchema=ReferenceSchema;class MappingParameters{constructor(properties){Object.assign(this,properties)}}exports.MappingParameters=MappingParameters;class JSONMappingParameters{constructor(properties){Object.assign(this,properties)}}exports.JSONMappingParameters=JSONMappingParameters;class ReferenceDataSource{constructor(properties){Object.assign(this,properties)}}exports.ReferenceDataSource=ReferenceDataSource;class ApplicationReferenceDataSource extends resource_1.ResourceBase{constructor(properties){super("AWS::KinesisAnalytics::ApplicationReferenceDataSource",properties)}}(exports.R=ApplicationReferenceDataSource).RecordFormat=RecordFormat,ApplicationReferenceDataSource.CSVMappingParameters=CSVMappingParameters,ApplicationReferenceDataSource.S3ReferenceDataSource=S3ReferenceDataSource,ApplicationReferenceDataSource.RecordColumn=RecordColumn,ApplicationReferenceDataSource.ReferenceSchema=ReferenceSchema,ApplicationReferenceDataSource.MappingParameters=MappingParameters,ApplicationReferenceDataSource.JSONMappingParameters=JSONMappingParameters,ApplicationReferenceDataSource.ReferenceDataSource=ReferenceDataSource;