"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class HomeDirectoryMapEntry{constructor(properties){Object.assign(this,properties)}}exports.HomeDirectoryMapEntry=HomeDirectoryMapEntry;class PosixProfile{constructor(properties){Object.assign(this,properties)}}exports.PosixProfile=PosixProfile;class User extends resource_1.ResourceBase{constructor(properties){super("AWS::Transfer::User",properties)}}(exports.default=User).HomeDirectoryMapEntry=HomeDirectoryMapEntry,User.PosixProfile=PosixProfile;