export class HttpParamsQueryString{
    name:string = "";
    value:string = "";

    static GetQueryString(params:HttpParamsQueryString[]):string{
        let queryString:string = "?";
        if(!params) return "";
        params.forEach(param => queryString += param.value ? `${param.name}=${param.value}&` : "");
        return queryString;
    }
}