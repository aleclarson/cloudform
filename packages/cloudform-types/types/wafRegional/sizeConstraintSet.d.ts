import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class SizeConstraint{ComparisonOperator:Value<string>;Size:Value<number>;TextTransformation:Value<string>;FieldToMatch:FieldToMatch;constructor(properties:SizeConstraint);}export declare class FieldToMatch{Type:Value<string>;Data?:Value<string>;constructor(properties:FieldToMatch);}export interface Properties{SizeConstraints?:List<SizeConstraint>;Name:Value<string>;}declare class SizeConstraintSet extends ResourceBase<Properties>{static SizeConstraint:typeof SizeConstraint;static FieldToMatch:typeof FieldToMatch;constructor(properties:Properties);}export{SizeConstraintSet as R};