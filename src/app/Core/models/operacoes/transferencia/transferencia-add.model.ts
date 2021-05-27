import { OperacoesBaseModel } from "../base/operaces-base.mode";

export type TransferenciaAddRequest = OperacoesBaseModel & {
    idContaDestino: string;
}