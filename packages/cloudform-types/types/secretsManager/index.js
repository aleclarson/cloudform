"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const index_namespace_1=require("./index.namespace"),rotationSchedule_1=(exports.default=index_namespace_1.SecretsManager,Object.defineProperty(exports,"__esModule",{value:!0}),require("./rotationSchedule")),resourcePolicy_1=require("./resourcePolicy"),secret_1=require("./secret"),secretTargetAttachment_1=require("./secretTargetAttachment");var SecretsManager;!function(SecretsManager){SecretsManager.RotationSchedule=rotationSchedule_1.default,SecretsManager.ResourcePolicy=resourcePolicy_1.default,SecretsManager.Secret=secret_1.default,SecretsManager.SecretTargetAttachment=secretTargetAttachment_1.default}(SecretsManager=exports.SecretsManager||(exports.SecretsManager={}));