import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DepositoAddRequest } from "../models/operacoes/deposito/deposito-add.model";
import { DepositoAddResponse } from "../models/operacoes/deposito/deposito-response.model";
import { MovimentacaoResponse } from "../models/operacoes/movimentacao/movimentacao-response.model";
import { SaqueAddRequest } from "../models/operacoes/saque/saque-add.model";
import { SaqueAddResponse } from "../models/operacoes/saque/saque-response.model";
import { TransferenciaAddRequest } from "../models/operacoes/transferencia/transferencia-add.model";
import { TransferenciaAddResponse } from "../models/operacoes/transferencia/transferencia-response.model";
import { HttpClientService } from "./base/http-client.service";

@Injectable({ providedIn: "root" })
export class OperacoesService extends HttpClientService  {
    
    TransferirAsync = (dados: TransferenciaAddRequest):Observable<TransferenciaAddResponse> =>
        this.Add<TransferenciaAddResponse, TransferenciaAddRequest>("operacao/transferencia", dados);

    DepositarAsync = (dados: DepositoAddRequest):Observable<DepositoAddResponse> =>
        this.Add<DepositoAddResponse, DepositoAddRequest>("operacao/deposito", dados);

    SacarAsync = (dados: SaqueAddRequest):Observable<SaqueAddResponse> =>
        this.Add<SaqueAddResponse, SaqueAddRequest>("operacao/saque", dados);

    MovimentacoesAsync = ():Observable<MovimentacaoResponse[]> =>
        this.Get<MovimentacaoResponse[]>("operacao/movimentacao");
}