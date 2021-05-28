import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HandlerErrorModel, HttpParamsQueryString } from "../../models/base/http-client.model";
import { NotificacaoService } from "./notificacao.service";
@Injectable({ providedIn: "root" })
export class HttpClientService{
    private readonly urlBase:string;
    constructor(private client:HttpClient){
        this.urlBase = environment.urlApiV1;
    }

    Get<TReturn>(completeUrl:string, params:HttpParamsQueryString[] = []):Observable<TReturn> {
        return this.client.get<TReturn>(`${this.urlBase}${completeUrl}${HttpParamsQueryString.GetQueryString(params)}`);
    }

    Delete<TReturn>(completeUrl:string):Observable<TReturn> {
        return this.client.delete<TReturn>(`${this.urlBase}${completeUrl}`);
    }

    Add<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.post<TReturn>(`${this.urlBase}${completeUrl}`, data);
    }

    Update<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.put<TReturn>(`${this.urlBase}${completeUrl}`, data);
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