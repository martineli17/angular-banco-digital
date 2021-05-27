import { OperacoesBaseModel } from "../base/operaces-base.mode";

export type TransferenciaAddResponse = OperacoesBaseModel & {
    idContaDestino: string;
    idConta: string;
}