import { Component, Input, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CartaoGetResponse } from "src/app/Core/models/cartao/cartao-get";
import { AlteracaoDadosCartao } from "src/app/Core/models/cartao/cartao-update.model";
import TipoCartao from "src/app/Core/models/cartao/tipo-cartao.model";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { CartaoService } from "src/app/Core/services/cartao.service";

@Component({
    templateUrl: "./cartao.component.html",
    selector: "bg-cartao",
})
export class CartaoComponent implements OnInit {
    temCartao: boolean = false;
    dadosCartao: CartaoGetResponse = {} as CartaoGetResponse;
    anoVencimentoCartao: string = "0000";
    mesVencimentoCartao: string = "00";
    constructor(private cartaoService: CartaoService,
                private notificacao: NotificacaoService) {
                 
    }
    ngOnInit(): void {
        this.GetCartaoPorClienteAsync();
    }

    GetTipoCartao = (): string => this.dadosCartao.tipo
        ? this.dadosCartao.tipo.toString() === "Credito"
            ? "Crédito"
            : this.dadosCartao.tipo.toString() === "Debito"
                ? "Débito"
                : "Crédito e Débito"
        : "Não identificado";

    SolicitarCartao = () => {
        this.cartaoService.SolicitarAsync({Tipo: TipoCartao.Debito}).subscribe({
            next: response => {
                this.dadosCartao = response;
                this.temCartao = true;
                this.FormatarDataVencimentoCartao();
                this.notificacao.ExibirNotificacao("Cartão solicitado com sucesso!");
            },
            error: response => {
                this.notificacao.ExibirNotificacao("Erro ao solicitar cartão!");
            }
        })
    }

    AlterarDadosAsync = (dados: AlteracaoDadosCartao) => {
        this.AlterarStatusAsync(dados);
        this.AlterarTipoAsync(dados);
        this.notificacao.ExibirNotificacao("Alterações efetuadas com sucesso!");
        this.dadosCartao.ativo = dados.status;
        this.dadosCartao.tipo = dados.tipoCartao;
    }

    private AlterarStatusAsync = (dados: AlteracaoDadosCartao) => {
        this.cartaoService.MudarStatusAsync(dados.status).subscribe({
            next: response => {},
             error: response => { 
                this.notificacao.ExibirNotificacao("Erro ao alterar o status do cartão!");
            }
        });
    }

    private AlterarTipoAsync = (dados: AlteracaoDadosCartao) => {
        this.cartaoService.MudarTipoAsync(dados.tipoCartao).subscribe({
            next: response => {},
            error: response => { 
                this.notificacao.ExibirNotificacao("Erro ao alterar o tipo do cartão!");
            }
        });
    }

    private GetCartaoPorClienteAsync() {
        this.cartaoService.GetByIdAsync().subscribe({
            next: response => {
                this.dadosCartao = response;
                this.temCartao = this.dadosCartao ? true : false;
                this.dadosCartao = this.dadosCartao ? this.dadosCartao  
                                    : 
                                   {numero: "0000 0000 0000 0000"} as CartaoGetResponse;
                this.FormatarDataVencimentoCartao();
            },
            error: response => {
                this.temCartao = false;
            }
        });
    }

    private FormatarDataVencimentoCartao(){
        this.anoVencimentoCartao = this.dadosCartao.vencimento ?
                                 new Date(this.dadosCartao.vencimento).getFullYear().toString()
                                 : "0000";
        this.mesVencimentoCartao = this.dadosCartao.vencimento ? 
                                new Date(this.dadosCartao.vencimento).getMonth().toString()
                                : "00";
    }
}

