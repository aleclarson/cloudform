import*as _0 from'./stateMachine';import*as _1 from'./activity';export declare namespace StepFunctions{const StateMachine:typeof _0.R;const Activity:typeof _1.R;type StateMachine=_0.R;type Activity=_1.R;namespace StateMachine{type Definition=_0.Definition;type LogDestination=_0.LogDestination;type TagsEntry=_0.TagsEntry;type LoggingConfiguration=_0.LoggingConfiguration;type S3Location=_0.S3Location;type CloudWatchLogsLogGroup=_0.CloudWatchLogsLogGroup;type TracingConfiguration=_0.TracingConfiguration;}namespace Activity{type TagsEntry=_1.TagsEntry;}}