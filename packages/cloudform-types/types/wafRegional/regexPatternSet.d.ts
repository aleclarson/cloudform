import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export interface Properties{RegexPatternStrings:List<Value<string>>;Name:Value<string>;}declare class RegexPatternSet extends ResourceBase<Properties>{constructor(properties:Properties);}export{RegexPatternSet as R};