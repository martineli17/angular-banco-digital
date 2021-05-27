import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartaoAddRequest } from "../models/cartao/cartao-add.model";
import { CartaoGetResponse } from "../models/cartao/cartao-get";
import TipoCartao from "../models/cartao/tipo-cartao.model";
import { HttpClientService } from "./base/http-client.service";

@Injectable({ providedIn: "root" })
export class CartaoService extends  HttpClientService{

    SolicitarAsync = (cartaoRequest: CartaoAddRequest): Observable<CartaoGetResponse> =>
        this.Add<CartaoGetResponse, CartaoAddRequest>("cartao", cartaoRequest);

    MudarStatusAsync = (status: boolean): Observable<boolean> =>
        this.Update<boolean, any>(`cartao/status/${status}`, null);

    MudarTipoAsync = (tipo: TipoCartao): Observable<boolean> =>
        this.Update<boolean, any>(`cartao/tipo/${tipo}`, null);

    GetByIdAsync = (): Observable<CartaoGetResponse> => 
        this.Get<CartaoGetResponse>(`cartao/cliente`);
}