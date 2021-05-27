import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpParamsQueryString } from "../../models/base/http-client.model";

@Injectable({ providedIn: "root" })
export class HttpClientService{
    private readonly urlBase:string;
    private headers:HttpHeaders = new HttpHeaders();
    constructor(private client:HttpClient){
        this.urlBase = environment.urlApiV1;
        this.headers.append("Content-Type", "application/json");
    }
    Get<TReturn>(completeUrl:string, params:HttpParamsQueryString[] = []):Observable<TReturn> {
        return this.client.get<TReturn>(`${this.urlBase}${completeUrl}${HttpParamsQueryString.GetQueryString(params)}`, {headers: this.headers});
    }

    Delete<TReturn>(completeUrl:string):Observable<TReturn> {
        return this.client.delete<TReturn>(`${this.urlBase}${completeUrl}`, {headers: this.headers});
    }

    Add<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.post<TReturn>(`${this.urlBase}${completeUrl}`, data, {headers: this.headers});
    }

    Update<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.put<TReturn>(`${this.urlBase}${completeUrl}`, data, {headers: this.headers});
    }
    
    SetHeaderAuthorizationBearer(){
        this.headers.append("Authorization", `Bearer ${localStorage.getItem("acess_token")}`);
    }
}