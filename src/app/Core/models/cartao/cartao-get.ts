import ClienteGet from "../cliente/cliente-get.model";
import TipoCartao from "./tipo-cartao.model";

export type CartaoGetResponse = {
    id: string;
    idCliente: string;
    tipo: TipoCartao;
    numero: string;
    ativo: boolean;
    vencimento: Date;
    cliente: ClienteGet;
}