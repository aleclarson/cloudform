import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class CsvClassifier{QuoteSymbol?:Value<string>;ContainsHeader?:Value<string>;Delimiter?:Value<string>;Header?:List<Value<string>>;AllowSingleColumn?:Value<boolean>;DisableValueTrimming?:Value<boolean>;Name?:Value<string>;constructor(properties:CsvClassifier);}export declare class GrokClassifier{CustomPatterns?:Value<string>;GrokPattern:Value<string>;Classification:Value<string>;Name?:Value<string>;constructor(properties:GrokClassifier);}export declare class JsonClassifier{JsonPath:Value<string>;Name?:Value<string>;constructor(properties:JsonClassifier);}export declare class XMLClassifier{RowTag:Value<string>;Classification:Value<string>;Name?:Value<string>;constructor(properties:XMLClassifier);}export interface Properties{XMLClassifier?:XMLClassifier;JsonClassifier?:JsonClassifier;CsvClassifier?:CsvClassifier;GrokClassifier?:GrokClassifier;}declare class Classifier extends ResourceBase<Properties>{static CsvClassifier:typeof CsvClassifier;static GrokClassifier:typeof GrokClassifier;static JsonClassifier:typeof JsonClassifier;static XMLClassifier:typeof XMLClassifier;constructor(properties?:Properties);}export{Classifier as R};