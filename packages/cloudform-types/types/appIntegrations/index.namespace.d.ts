import*as _0 from'./eventIntegration';import*as _1 from'./dataIntegration';export declare namespace AppIntegrations{const EventIntegration:typeof _0.R;const DataIntegration:typeof _1.R;type EventIntegration=_0.R;type DataIntegration=_1.R;namespace EventIntegration{type Metadata=_0.Metadata;type EventFilter=_0.EventFilter;type EventIntegrationAssociation=_0.EventIntegrationAssociation;}namespace DataIntegration{type ScheduleConfig=_1.ScheduleConfig;}}