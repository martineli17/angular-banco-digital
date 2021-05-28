import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { OperacoesService } from "src/app/Core/services/operacoes.service";
import { ValidateErrorsFormService } from "src/app/Shared/form/validador-form";
import { ValidadorErrosKeys, ValidadorKeys } from "src/app/Shared/model/validador-key.model";
import { MovimentacaoResponse } from 'src/app/Core/models/operacoes/movimentacao/movimentacao-response.model'
import { EventoMovimentacao } from "src/app/Core/models/operacoes/movimentacao/evento-movimentacao.model";
import { TipoMovimentacao } from "src/app/Core/models/operacoes/movimentacao/tipo-movimentacao.model";
@Component({
    templateUrl: "./movimentacao.component.html",
    selector: "bd-movimentacao",
    styleUrls: ["../../../Shared/styles/inputs.style.css",]
})
export class MovimentacaoComponent {
    movimentacoes: MovimentacaoResponse[] = [];
    constructor(private notificador: NotificacaoService,
        private operacoesService: OperacoesService) {
    }

    GetMovimentacoes(): void {
        if (this.movimentacoes.length > 0) return;
        this.operacoesService.MovimentacoesAsync().subscribe({
            next: response => this.movimentacoes = response,
            error: (error: HttpErrorResponse) =>
                this.operacoesService.ErrorHandler(error, { mensagem404: "Registro não encontrado" }),
        });
    }

    GetEventoString(evento: EventoMovimentacao) {
        if (evento.toString() == "Deposito")
            return "Depósito";
        if (evento.toString() == "Saque")
            return "Saque";
        if (evento.toString() == "Transferencia")
            return "Transferência";
        return "Não identificado";
    }

    GetTipoString(tipo: TipoMovimentacao) {
        if (tipo.toString() == "Credito")
            return "Crédito";
        else if (tipo.toString() == "Debito")
            return "Débito";
        else return "Não identificado";
    }


    GetTipoBoolean(tipo: TipoMovimentacao) {
        return tipo.toString() == "Credito";
    }
}