import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { OperacoesService } from "src/app/Core/services/operacoes.service";
import { MovimentacaoResponse } from 'src/app/Core/models/operacoes/movimentacao/movimentacao-response.model'
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

    GetMovimentacoes(force: boolean = false): void {
        if (this.movimentacoes.length > 0 && !force) return;
        this.operacoesService.MovimentacoesAsync().subscribe({
            next: response => this.movimentacoes = response,
            error: (error: HttpErrorResponse) =>
                this.operacoesService.ErrorHandler(error, { mensagem404: "Registro não encontrado" }),
        });
    }
}