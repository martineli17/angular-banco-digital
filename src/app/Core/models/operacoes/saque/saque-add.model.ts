import { OperacoesBaseModel } from "../base/operaces-base.mode";

export type SaqueAddRequest = OperacoesBaseModel & {
    identificadorCaixaEletronico: string;
}