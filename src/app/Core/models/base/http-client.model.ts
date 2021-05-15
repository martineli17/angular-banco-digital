export class HttpParamsQueryString{
    name:string = "";
    value:string = "";

    static GetQueryString(params:HttpParamsQueryString[]):string{
        let queryString:string = "?";
        if(!params) return "";
        params.forEach(param => queryString += param.value ? `${param.name}=${param.value}&` : "");
        if(queryString[queryString.length-1] === "?")
            queryString = queryString.slice(0,-1);
        return queryString;
    }
}