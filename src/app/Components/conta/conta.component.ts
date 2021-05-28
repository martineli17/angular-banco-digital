import { Component, OnInit } from "@angular/core";
import { ContaGetModel } from "src/app/Core/models/conta/conta-get.model";
import { TipoConta } from "src/app/Core/models/conta/conta-tipo.model";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { ContaService } from "src/app/Core/services/conta.service";

@Component({
    templateUrl: "./conta.component.html",
    selector: "bd-conta"
})
export class ContaComponent implements OnInit {
    dadosConta: ContaGetModel = {} as ContaGetModel;
    temConta: boolean = false;
    constructor(private contaService: ContaService,
                private notificador: NotificacaoService) {

    }
    ngOnInit(): void {
        this.GetDadosInit();
    }

    Solicitar() {
        this.contaService.SolicitarAsync({ tipo: TipoConta.Poupanca }).subscribe({
            next: response => {
                this.dadosConta = response;
                this.temConta = true;
                this.notificador.ExibirNotificacao("Sua conta foi criada com sucesso.");
            },
            error: error => {
                this.contaService.ErrorHandler(error, {mensagem404: "Registro não encontrado"});
            }
        });
    }

    GetDados(): void {
        this.contaService.GetAsync().subscribe({
            next: response => {
                this.dadosConta = response;
                this.temConta = true;
              
            },
            error: error => {
                this.contaService.ErrorHandler(error, {mensagem404: "Você ainda não solicitou a criação de uma conta."});
            }
        });
    }

    AtualizarTipo() {
        this.contaService.AtualizarTipoAsync({ tipo: this.dadosConta.tipo }).subscribe({
            next: response => {
                this.dadosConta = response;
                this.notificador.ExibirNotificacao("Sua conta foi atualizada com sucesso.");
            },
            error: error => {
                this.contaService.ErrorHandler(error, {mensagem404: "Você ainda não solicitou a criação de uma conta."});
            }
        });
    }

    AtualizarStatus(ativo: boolean) {
        this.contaService.AtualizarStatusAsync({ ativo }).subscribe({
            next: response => {
                this.dadosConta = response;
                this.notificador.ExibirNotificacao("Sua conta foi atualizada com sucesso.");
            },
            error: error => {
                this.contaService.ErrorHandler(error, {mensagem404: "Você ainda não solicitou a criação de uma conta."});
            }
        });
    }

    private  GetDadosInit(): void {
        this.contaService.GetAsync().subscribe({
            next: response => {
                console.log(response)
                this.dadosConta = response;
                this.temConta = true;
            },
            error: error => {
                this.temConta = false;
            }
        });
    }
}