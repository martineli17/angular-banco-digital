import { OperacoesBaseModel } from "../base/operaces-base.mode";

export type DepositoAddRequest = OperacoesBaseModel & {
    numeroBoleto: string;
    credenciador: string;
}