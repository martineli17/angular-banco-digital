import { OperacoesBaseModel } from "../base/operaces-base.mode";

export type SaqueAddResponse = OperacoesBaseModel & {
    identificadorCaixaEletronico: string;
    idConta: string;
}