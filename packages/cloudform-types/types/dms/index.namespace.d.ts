import*as _0 from'./replicationSubnetGroup';import*as _1 from'./eventSubscription';import*as _2 from'./certificate';import*as _3 from'./endpoint';import*as _4 from'./replicationTask';import*as _5 from'./replicationInstance';export declare namespace DMS{const ReplicationSubnetGroup:typeof _0.R;const EventSubscription:typeof _1.R;const Certificate:typeof _2.R;const Endpoint:typeof _3.R;const ReplicationTask:typeof _4.R;const ReplicationInstance:typeof _5.R;type ReplicationSubnetGroup=_0.R;type EventSubscription=_1.R;type Certificate=_2.R;type Endpoint=_3.R;type ReplicationTask=_4.R;type ReplicationInstance=_5.R;namespace Endpoint{type KinesisSettings=_3.KinesisSettings;type S3Settings=_3.S3Settings;type PostgreSqlSettings=_3.PostgreSqlSettings;type MicrosoftSqlServerSettings=_3.MicrosoftSqlServerSettings;type MongoDbSettings=_3.MongoDbSettings;type KafkaSettings=_3.KafkaSettings;type MySqlSettings=_3.MySqlSettings;type NeptuneSettings=_3.NeptuneSettings;type GcpMySQLSettings=_3.GcpMySQLSettings;type IbmDb2Settings=_3.IbmDb2Settings;type ElasticsearchSettings=_3.ElasticsearchSettings;type OracleSettings=_3.OracleSettings;type RedisSettings=_3.RedisSettings;type DynamoDbSettings=_3.DynamoDbSettings;type DocDbSettings=_3.DocDbSettings;type SybaseSettings=_3.SybaseSettings;type RedshiftSettings=_3.RedshiftSettings;}}