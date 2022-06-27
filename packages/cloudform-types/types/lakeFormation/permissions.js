"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.TableWithColumnsResource=exports.TableResource=exports.DataLakePrincipal=exports.Resource=exports.TableWildcard=exports.DatabaseResource=exports.ColumnWildcard=exports.DataLocationResource=void 0;const resource_1=require("../resource");class DataLocationResource{constructor(properties){Object.assign(this,properties)}}exports.DataLocationResource=DataLocationResource;class ColumnWildcard{constructor(properties){Object.assign(this,properties)}}exports.ColumnWildcard=ColumnWildcard;class DatabaseResource{constructor(properties){Object.assign(this,properties)}}exports.DatabaseResource=DatabaseResource;class TableWildcard{constructor(properties){Object.assign(this,properties)}}exports.TableWildcard=TableWildcard;class Resource{constructor(properties){Object.assign(this,properties)}}exports.Resource=Resource;class DataLakePrincipal{constructor(properties){Object.assign(this,properties)}}exports.DataLakePrincipal=DataLakePrincipal;class TableResource{constructor(properties){Object.assign(this,properties)}}exports.TableResource=TableResource;class TableWithColumnsResource{constructor(properties){Object.assign(this,properties)}}exports.TableWithColumnsResource=TableWithColumnsResource;class Permissions extends resource_1.ResourceBase{constructor(properties){super("AWS::LakeFormation::Permissions",properties)}}(exports.R=Permissions).DataLocationResource=DataLocationResource,Permissions.ColumnWildcard=ColumnWildcard,Permissions.DatabaseResource=DatabaseResource,Permissions.TableWildcard=TableWildcard,Permissions.Resource=Resource,Permissions.DataLakePrincipal=DataLakePrincipal,Permissions.TableResource=TableResource,Permissions.TableWithColumnsResource=TableWithColumnsResource;