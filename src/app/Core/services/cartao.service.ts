import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartaoAddRequest } from "../models/cartao/cartao-add.model";
import { CartaoGetResponse } from "../models/cartao/cartao-get";
import TipoCartao from "../models/cartao/tipo-cartao.model";
import { HttpClientService, HttpClienteBasic } from "./base/http-client.service";
import { NotificacaoService } from "./base/notificacao.service";

@Injectable({ providedIn: "root" })
export class CartaoService extends HttpClienteBasic{

    constructor(private client: HttpClientService, 
                protected notificador: NotificacaoService){
        super(notificador);
    }
    SolicitarAsync = (cartaoRequest: CartaoAddRequest): Observable<CartaoGetResponse> =>
        this.client.Add<CartaoGetResponse, CartaoAddRequest>("cartao", cartaoRequest);

    MudarStatusAsync = (status: boolean): Observable<boolean> =>
        this.client.Update<boolean, any>(`cartao/status/${status}`, null);

    MudarTipoAsync = (tipo: TipoCartao): Observable<boolean> =>
        this.client.Update<boolean, any>(`cartao/tipo/${tipo}`, null);

    GetByIdAsync = (): Observable<CartaoGetResponse> => 
        this.client.Get<CartaoGetResponse>(`cartao/cliente`);
}