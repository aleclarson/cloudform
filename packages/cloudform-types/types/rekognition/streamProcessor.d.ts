import{ResourceBase,ResourceTag}from'../resource';import{Value,List}from'../dataTypes';export declare class ConnectedHomeSettings{Labels:List<Value<string>>;MinConfidence?:Value<number>;constructor(properties:ConnectedHomeSettings);}export declare class Point{X:Value<number>;Y:Value<number>;constructor(properties:Point);}export declare class KinesisDataStream{Arn:Value<string>;constructor(properties:KinesisDataStream);}export declare class FaceSearchSettings{CollectionId:Value<string>;FaceMatchThreshold?:Value<number>;constructor(properties:FaceSearchSettings);}export declare class S3Destination{BucketName:Value<string>;ObjectKeyPrefix?:Value<string>;constructor(properties:S3Destination);}export declare class DataSharingPreference{OptIn:Value<boolean>;constructor(properties:DataSharingPreference);}export declare class NotificationChannel{Arn:Value<string>;constructor(properties:NotificationChannel);}export declare class KinesisVideoStream{Arn:Value<string>;constructor(properties:KinesisVideoStream);}export declare class BoundingBox{Height:Value<number>;Width:Value<number>;Left:Value<number>;Top:Value<number>;constructor(properties:BoundingBox);}export interface Properties{Name?:Value<string>;KmsKeyId?:Value<string>;RoleArn:Value<string>;KinesisVideoStream:KinesisVideoStream;FaceSearchSettings?:FaceSearchSettings;ConnectedHomeSettings?:ConnectedHomeSettings;KinesisDataStream?:KinesisDataStream;S3Destination?:S3Destination;NotificationChannel?:NotificationChannel;DataSharingPreference?:DataSharingPreference;PolygonRegionsOfInterest?:List<List<any>>;BoundingBoxRegionsOfInterest?:List<BoundingBox>;Tags?:List<ResourceTag>;}declare class StreamProcessor extends ResourceBase<Properties>{static ConnectedHomeSettings:typeof ConnectedHomeSettings;static Point:typeof Point;static KinesisDataStream:typeof KinesisDataStream;static FaceSearchSettings:typeof FaceSearchSettings;static S3Destination:typeof S3Destination;static DataSharingPreference:typeof DataSharingPreference;static NotificationChannel:typeof NotificationChannel;static KinesisVideoStream:typeof KinesisVideoStream;static BoundingBox:typeof BoundingBox;constructor(properties:Properties);}export{StreamProcessor as R};