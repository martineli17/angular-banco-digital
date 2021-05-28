import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DepositoAddRequest } from "../models/operacoes/deposito/deposito-add.model";
import { DepositoAddResponse } from "../models/operacoes/deposito/deposito-response.model";
import { MovimentacaoResponse, MovimentacaoResponseMetodos,  } from "../models/operacoes/movimentacao/movimentacao-response.model";
import { SaqueAddRequest } from "../models/operacoes/saque/saque-add.model";
import { SaqueAddResponse } from "../models/operacoes/saque/saque-response.model";
import { TransferenciaAddRequest } from "../models/operacoes/transferencia/transferencia-add.model";
import { TransferenciaAddResponse } from "../models/operacoes/transferencia/transferencia-response.model";
import { HttpClientService, HttpClienteBasic } from "./base/http-client.service";
import { NotificacaoService } from "./base/notificacao.service";
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({ providedIn: "root" })
export class OperacoesService extends HttpClienteBasic{

    constructor(private client: HttpClientService, 
                protected notificador: NotificacaoService){
        super(notificador);
    }
    
    TransferirAsync = (dados: TransferenciaAddRequest):Observable<TransferenciaAddResponse> =>
        this.client.Add<TransferenciaAddResponse, TransferenciaAddRequest>("operacao/transferencia", dados);

    DepositarAsync = (dados: DepositoAddRequest):Observable<DepositoAddResponse> =>
        this.client.Add<DepositoAddResponse, DepositoAddRequest>("operacao/deposito", dados);

    SacarAsync = (dados: SaqueAddRequest):Observable<SaqueAddResponse> =>
        this.client.Add<SaqueAddResponse, SaqueAddRequest>("operacao/saque", dados);

    MovimentacoesAsync = ():Observable<MovimentacaoResponse[]> =>
        this.client.Get<MovimentacaoResponse[]>("operacao/movimentacao?$orderby=dataCriacao desc")
        .pipe(map(val =>
            val.map(movi => {
                movi.eventoNome = MovimentacaoResponseMetodos.GetEventoString(movi.evento);
                movi.tipoNome = MovimentacaoResponseMetodos.GetTipoString(movi.tipo);
                movi.isCredito = MovimentacaoResponseMetodos.IsCredito(movi.tipo);
                return movi;
            })));
}