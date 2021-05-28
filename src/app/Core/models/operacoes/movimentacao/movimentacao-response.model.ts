import { ContaGetModel } from "../../conta/conta-get.model";
import { EventoMovimentacao } from "./evento-movimentacao.model";
import { TipoMovimentacao } from "./tipo-movimentacao.model";

export type MovimentacaoResponse = {
    dataCriacao: Date;
    id: string;
    idConta: string;
    evento: EventoMovimentacao;
    tipo: TipoMovimentacao;
    valor: number;
    conta: ContaGetModel;
    eventoNome: string;
    tipoNome: string;
    isCredito: boolean;
}
export class MovimentacaoResponseMetodos{
    static GetEventoString(evento: EventoMovimentacao):string {
        if (evento.toString() == "Deposito")
            return "Depósito";
        if (evento.toString() == "Saque")
            return "Saque";
        if (evento.toString() == "Transferencia")
            return "Transferência";
        return "Não identificado";
    }

    static GetTipoString(tipo: TipoMovimentacao):string {
        if (tipo.toString() == "Credito")
            return "Crédito";
        else if (tipo.toString() == "Debito")
            return "Débito";
        else return "Não identificado";
    }


    static IsCredito(tipo: TipoMovimentacao):boolean {
        return tipo.toString() == "Credito";
    }
}