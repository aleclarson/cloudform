import{ResourceBase}from'../resource';import{Value}from'../dataTypes';export interface Properties{Enabled?:Value<boolean>;ApplicationId:Value<string>;}declare class VoiceChannel extends ResourceBase<Properties>{constructor(properties:Properties);}export{VoiceChannel as R};