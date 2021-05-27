import { OperacoesBaseModel } from "../base/operaces-base.mode";

export type DepositoAddResponse = OperacoesBaseModel & {
    numeroBoleto: string;
    credenciador: string;
    idConta: string;
}