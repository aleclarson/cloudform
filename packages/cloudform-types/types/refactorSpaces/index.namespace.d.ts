import*as _0 from'./environment';import*as _1 from'./service';import*as _2 from'./route';import*as _3 from'./application';export declare namespace RefactorSpaces{const Environment:typeof _0.R;const Service:typeof _1.R;const Route:typeof _2.R;const Application:typeof _3.R;type Environment=_0.R;type Service=_1.R;type Route=_2.R;type Application=_3.R;namespace Service{type LambdaEndpointInput=_1.LambdaEndpointInput;type UrlEndpointInput=_1.UrlEndpointInput;}namespace Route{type UriPathRouteInput=_2.UriPathRouteInput;}namespace Application{type ApiGatewayProxyInput=_3.ApiGatewayProxyInput;}}