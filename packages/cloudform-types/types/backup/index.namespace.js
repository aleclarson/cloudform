"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const backupPlan_1=require("./backupPlan"),backupVault_1=require("./backupVault"),backupSelection_1=require("./backupSelection");var Backup;!function(Backup){Backup.BackupPlan=backupPlan_1.default,Backup.BackupVault=backupVault_1.default,Backup.BackupSelection=backupSelection_1.default}(Backup=exports.Backup||(exports.Backup={})),Object.defineProperty(exports,"__esModule",{value:!0});const resource_1=require("../resource");class ComputeResources{constructor(properties){Object.assign(this,properties)}}exports.ComputeResources=ComputeResources;class LaunchTemplateSpecification{constructor(properties){Object.assign(this,properties)}}exports.LaunchTemplateSpecification=LaunchTemplateSpecification;class Ec2ConfigurationObject{constructor(properties){Object.assign(this,properties)}}exports.Ec2ConfigurationObject=Ec2ConfigurationObject;class ComputeEnvironment extends resource_1.ResourceBase{constructor(properties){super("AWS::Batch::ComputeEnvironment",properties)}}(exports.default=ComputeEnvironment).ComputeResources=ComputeResources,ComputeEnvironment.LaunchTemplateSpecification=LaunchTemplateSpecification,ComputeEnvironment.Ec2ConfigurationObject=Ec2ConfigurationObject;