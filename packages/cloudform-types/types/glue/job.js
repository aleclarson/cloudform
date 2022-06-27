"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.R=exports.ExecutionProperty=exports.NotificationProperty=exports.ConnectionsList=exports.JobCommand=void 0;const resource_1=require("../resource");class JobCommand{constructor(properties){Object.assign(this,properties)}}exports.JobCommand=JobCommand;class ConnectionsList{constructor(properties){Object.assign(this,properties)}}exports.ConnectionsList=ConnectionsList;class NotificationProperty{constructor(properties){Object.assign(this,properties)}}exports.NotificationProperty=NotificationProperty;class ExecutionProperty{constructor(properties){Object.assign(this,properties)}}exports.ExecutionProperty=ExecutionProperty;class Job extends resource_1.ResourceBase{constructor(properties){super("AWS::Glue::Job",properties)}}(exports.R=Job).JobCommand=JobCommand,Job.ConnectionsList=ConnectionsList,Job.NotificationProperty=NotificationProperty,Job.ExecutionProperty=ExecutionProperty;