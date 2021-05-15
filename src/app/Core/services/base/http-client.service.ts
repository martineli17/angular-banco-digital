import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpParamsQueryString } from "../../models/base/http-client.model";

@Injectable({ providedIn: "root" })
export class HttpClientService{
    private readonly urlBase:string;
    constructor(private client:HttpClient){
        this.urlBase = environment.urlApiV1;
    }
    Get<TReturn>(completeUrl:string, params:HttpParamsQueryString[] = []):Observable<TReturn> {
        return this.client.get<TReturn>(`${this.urlBase}${completeUrl}${HttpParamsQueryString.GetQueryString(params)}`);
    }

    Delete(completeUrl:string):Observable<any> {
        return this.client.delete<any>(`${this.urlBase}${completeUrl}`);
    }

    Add<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.post<TReturn>(`${this.urlBase}${completeUrl}`, data);
    }

    Update<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.put<TReturn>(`${this.urlBase}${completeUrl}`, data);
    }
}