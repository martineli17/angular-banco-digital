import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContaAddRequestModel } from "../models/conta/conta-add.model";
import { ContaGetModel } from "../models/conta/conta-get.model";
import { ContaUpdateStatusModel } from "../models/conta/conta-update.mode";
import { HttpClientService, HttpClienteBasic } from "./base/http-client.service";
import { NotificacaoService } from "./base/notificacao.service";

@Injectable({providedIn: "root"})
export class ContaService extends HttpClienteBasic{

    constructor(private client: HttpClientService, 
                protected notificador: NotificacaoService){
        super(notificador);
    }

    SolicitarAsync = (conta: ContaAddRequestModel):Observable<ContaGetModel> => 
        this.client.Add<ContaGetModel,ContaAddRequestModel>("conta", conta);

    GetAsync = ():Observable<ContaGetModel> => this.client.Get<ContaGetModel>("conta/cliente");

    GetAllAsync = ():Observable<ContaGetModel[]> => this.client.Get<ContaGetModel[]>("conta");

    AtualizarTipoAsync = (conta: ContaAddRequestModel):Observable<ContaGetModel> => 
        this.client.Update<ContaGetModel,ContaAddRequestModel>("conta/tipo", conta);

    AtualizarStatusAsync = (conta: ContaUpdateStatusModel):Observable<ContaGetModel> => 
        this.client.Update<ContaGetModel,ContaUpdateStatusModel>("conta/status", conta);
}