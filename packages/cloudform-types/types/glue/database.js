"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.DataLakePrincipal=exports.DatabaseIdentifier=exports.PrincipalPrivileges=exports.DatabaseInput=void 0;const resource_1=require("../resource");class DatabaseInput{constructor(properties){Object.assign(this,properties)}}exports.DatabaseInput=DatabaseInput;class PrincipalPrivileges{constructor(properties){Object.assign(this,properties)}}exports.PrincipalPrivileges=PrincipalPrivileges;class DatabaseIdentifier{constructor(properties){Object.assign(this,properties)}}exports.DatabaseIdentifier=DatabaseIdentifier;class DataLakePrincipal{constructor(properties){Object.assign(this,properties)}}exports.DataLakePrincipal=DataLakePrincipal;class Database extends resource_1.ResourceBase{constructor(properties){super("AWS::Glue::Database",properties)}}(exports.R=Database).DatabaseInput=DatabaseInput,Database.PrincipalPrivileges=PrincipalPrivileges,Database.DatabaseIdentifier=DatabaseIdentifier,Database.DataLakePrincipal=DataLakePrincipal;