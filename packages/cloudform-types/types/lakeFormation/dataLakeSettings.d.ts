import{ResourceBase}from'../resource';import{Value,List}from'../dataTypes';export declare class DataLakePrincipal{DataLakePrincipalIdentifier?:Value<string>;constructor(properties:DataLakePrincipal);}export declare type Admins=List<DataLakePrincipal>;export interface Properties{Admins?:Admins;TrustedResourceOwners?:List<Value<string>>;}declare class DataLakeSettings extends ResourceBase<Properties>{static DataLakePrincipal:typeof DataLakePrincipal;constructor(properties?:Properties);}export{DataLakeSettings as R};