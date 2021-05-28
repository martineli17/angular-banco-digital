import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HandlerErrorModel, HttpParamsQueryString } from "../../models/base/http-client.model";
import { catchError } from 'rxjs/operators';
import { NotificacaoService } from "./notificacao.service";
import { of } from 'rxjs';
@Injectable({ providedIn: "root" })
export class HttpClientService{
    private readonly urlBase:string;
    private headers:HttpHeaders = new HttpHeaders();
    constructor(private client:HttpClient){
        this.urlBase = environment.urlApiV1;
        this.headers.append("Content-Type", "application/json");
    }

    Get<TReturn>(completeUrl:string, params:HttpParamsQueryString[] = []):Observable<TReturn> {
        return this.client.get<TReturn>(`${this.urlBase}
        ${completeUrl}${HttpParamsQueryString.GetQueryString(params)}`, 
        {headers: this.headers});
    }

    Delete<TReturn>(completeUrl:string):Observable<TReturn> {
        return this.client.delete<TReturn>(`${this.urlBase}${completeUrl}`, 
        {headers: this.headers});
    }

    Add<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.post<TReturn>(`${this.urlBase}${completeUrl}`, 
        data, {headers: this.headers});
    }

    Update<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.put<TReturn>(`${this.urlBase}${completeUrl}`,
        data, {headers: this.headers});
    }
    
    SetHeaderAuthorizationBearer(){
        this.headers.append("Authorization", `Bearer ${localStorage.getItem("acess_token")}`);
    }
}

export class HttpClienteBasic{
    constructor(protected notificador: NotificacaoService){

    }
    public ErrorHandler(error: HttpErrorResponse, handlerModel: HandlerErrorModel) {
        if(error.status === 400)
            this.notificador.ExibirNotificacao(error.error[0].mensagem);
        else if(error.status === 404)
            this.notificador.ExibirNotificacao(handlerModel.mensagem404);
        else
            this.notificador.ExibirNotificacao("Ocorreu um no processamento da operação.");
    }
}