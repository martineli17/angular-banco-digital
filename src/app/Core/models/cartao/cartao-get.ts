import ClienteGet from "../cliente/cliente-get.model";
import TipoCartao from "./tipo-cartao.model";

export type CartaoGetResponse = {
    idCliente: string;
    tipo: "Debito" | "Credito" | "Debito_Credito";
    numero: string;
    ativo: boolean;
    vencimento: Date;
    cliente: ClienteGet;
}