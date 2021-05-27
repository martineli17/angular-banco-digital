import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContaAddRequestModel } from "../models/conta/conta-add.model";
import { ContaGetModel } from "../models/conta/conta-get.model";
import { ContaUpdateStatusModel } from "../models/conta/conta-update.mode";
import { HttpClientService } from "./base/http-client.service";

@Injectable({providedIn: "root"})
export class ContaService{
    constructor(private httpClient: HttpClientService){

    }

    SolicitarAsync = (conta: ContaAddRequestModel):Observable<ContaGetModel> => 
        this.httpClient.Add<ContaGetModel,ContaAddRequestModel>("conta", conta);

    ExcluirAsync = ():Observable<boolean> => this.httpClient.Delete<boolean>(`conta`);

    GetAsync = ():Observable<ContaGetModel> => this.httpClient.Get<ContaGetModel>(`conta/cliente`);

    AtualizarTipoAsync = (conta: ContaAddRequestModel):Observable<ContaGetModel> => 
        this.httpClient.Update<ContaGetModel,ContaAddRequestModel>("conta/tipo", conta);

    AtualizarStatusAsync = (conta: ContaUpdateStatusModel):Observable<ContaGetModel> => 
        this.httpClient.Update<ContaGetModel,ContaUpdateStatusModel>("conta/status", conta);
}