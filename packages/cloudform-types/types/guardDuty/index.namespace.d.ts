import*as _0 from'./threatIntelSet';import*as _1 from'./member';import*as _2 from'./master';import*as _3 from'./filter';import*as _4 from'./detector';import*as _5 from'./ipSet';export declare namespace GuardDuty{const ThreatIntelSet:typeof _0.R;const Member:typeof _1.R;const Master:typeof _2.R;const Filter:typeof _3.R;const Detector:typeof _4.R;const IPSet:typeof _5.R;type ThreatIntelSet=_0.R;type Member=_1.R;type Master=_2.R;type Filter=_3.R;type Detector=_4.R;type IPSet=_5.R;namespace Filter{type FindingCriteria=_3.FindingCriteria;type Condition=_3.Condition;}namespace Detector{type CFNKubernetesAuditLogsConfiguration=_4.CFNKubernetesAuditLogsConfiguration;type CFNDataSourceConfigurations=_4.CFNDataSourceConfigurations;type CFNS3LogsConfiguration=_4.CFNS3LogsConfiguration;type CFNKubernetesConfiguration=_4.CFNKubernetesConfiguration;}}