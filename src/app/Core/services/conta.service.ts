import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContaAddRequestModel } from "../models/conta/conta-add.model";
import { ContaGetModel } from "../models/conta/conta-get.model";
import { ContaUpdateStatusModel } from "../models/conta/conta-update.mode";
import { HttpClientService } from "./base/http-client.service";

@Injectable({providedIn: "root"})
export class ContaService extends HttpClientService{

    SolicitarAsync = (conta: ContaAddRequestModel):Observable<ContaGetModel> => 
        this.Add<ContaGetModel,ContaAddRequestModel>("conta", conta);

    ExcluirAsync = ():Observable<boolean> => this.Delete<boolean>(`conta`);

    GetAsync = ():Observable<ContaGetModel> => this.Get<ContaGetModel>(`conta/cliente`);

    AtualizarTipoAsync = (conta: ContaAddRequestModel):Observable<ContaGetModel> => 
        this.Update<ContaGetModel,ContaAddRequestModel>("conta/tipo", conta);

    AtualizarStatusAsync = (conta: ContaUpdateStatusModel):Observable<ContaGetModel> => 
        this.Update<ContaGetModel,ContaUpdateStatusModel>("conta/status", conta);
}