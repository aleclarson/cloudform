"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const index_namespace_1=require("./index.namespace"),launchConfiguration_1=(exports.default=index_namespace_1.AutoScaling,Object.defineProperty(exports,"__esModule",{value:!0}),require("./launchConfiguration")),scalingPolicy_1=require("./scalingPolicy"),lifecycleHook_1=require("./lifecycleHook"),warmPool_1=require("./warmPool"),autoScalingGroup_1=require("./autoScalingGroup"),scheduledAction_1=require("./scheduledAction");var AutoScaling;!function(AutoScaling){AutoScaling.LaunchConfiguration=launchConfiguration_1.default,AutoScaling.ScalingPolicy=scalingPolicy_1.default,AutoScaling.LifecycleHook=lifecycleHook_1.default,AutoScaling.WarmPool=warmPool_1.default,AutoScaling.AutoScalingGroup=autoScalingGroup_1.default,AutoScaling.ScheduledAction=scheduledAction_1.default}(AutoScaling=exports.AutoScaling||(exports.AutoScaling={}));