import*as _0 from'./domainName';import*as _1 from'./documentationPart';import*as _2 from'./usagePlan';import*as _3 from'./gatewayResponse';import*as _4 from'./usagePlanKey';import*as _5 from'./requestValidator';import*as _6 from'./apiKey';import*as _7 from'./resource';import*as _8 from'./account';import*as _9 from'./method';import*as _a from'./deployment';import*as _b from'./authorizer';import*as _c from'./model';import*as _d from'./basePathMapping';import*as _e from'./stage';import*as _f from'./clientCertificate';import*as _10 from'./documentationVersion';import*as _11 from'./restApi';import*as _12 from'./vpcLink';export declare namespace ApiGateway{const DomainName:typeof _0.R;const DocumentationPart:typeof _1.R;const UsagePlan:typeof _2.R;const GatewayResponse:typeof _3.R;const UsagePlanKey:typeof _4.R;const RequestValidator:typeof _5.R;const ApiKey:typeof _6.R;const Resource:typeof _7.R;const Account:typeof _8.R;const Method:typeof _9.R;const Deployment:typeof _a.R;const Authorizer:typeof _b.R;const Model:typeof _c.R;const BasePathMapping:typeof _d.R;const Stage:typeof _e.R;const ClientCertificate:typeof _f.R;const DocumentationVersion:typeof _10.R;const RestApi:typeof _11.R;const VpcLink:typeof _12.R;type DomainName=_0.R;type DocumentationPart=_1.R;type UsagePlan=_2.R;type GatewayResponse=_3.R;type UsagePlanKey=_4.R;type RequestValidator=_5.R;type ApiKey=_6.R;type Resource=_7.R;type Account=_8.R;type Method=_9.R;type Deployment=_a.R;type Authorizer=_b.R;type Model=_c.R;type BasePathMapping=_d.R;type Stage=_e.R;type ClientCertificate=_f.R;type DocumentationVersion=_10.R;type RestApi=_11.R;type VpcLink=_12.R;namespace DomainName{type MutualTlsAuthentication=_0.MutualTlsAuthentication;type EndpointConfiguration=_0.EndpointConfiguration;}namespace DocumentationPart{type Location=_1.Location;}namespace UsagePlan{type ApiStage=_2.ApiStage;type ThrottleSettings=_2.ThrottleSettings;type QuotaSettings=_2.QuotaSettings;}namespace ApiKey{type StageKey=_6.StageKey;}namespace Method{type MethodResponse=_9.MethodResponse;type Integration=_9.Integration;type IntegrationResponse=_9.IntegrationResponse;}namespace Deployment{type MethodSetting=_a.MethodSetting;type AccessLogSetting=_a.AccessLogSetting;type DeploymentCanarySettings=_a.DeploymentCanarySettings;type StageDescription=_a.StageDescription;type CanarySetting=_a.CanarySetting;}namespace Stage{type CanarySetting=_e.CanarySetting;type AccessLogSetting=_e.AccessLogSetting;type MethodSetting=_e.MethodSetting;}namespace RestApi{type S3Location=_11.S3Location;type EndpointConfiguration=_11.EndpointConfiguration;}}