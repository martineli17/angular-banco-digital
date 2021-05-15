import ClienteGet from "../cliente/cliente-get.model";
import TipoCartao from "./tipo-cartao.model";

export type CartaoAddRequest = {
    IdCliente: string;
    Tipo: TipoCartao;
}