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
}