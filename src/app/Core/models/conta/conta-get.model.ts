import { TipoConta } from "./conta-tipo.model";

export type ContaGetModel = {
    id: string;
    idCliente: string;
    numero: string;
    tipo: TipoConta;
    saldo: number;
    ativo: boolean;
}