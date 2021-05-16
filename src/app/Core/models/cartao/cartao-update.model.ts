import TipoCartao from "./tipo-cartao.model";

export type AlteracaoDadosCartao = {
    status: boolean;
    tipoCartao: TipoCartao;
}