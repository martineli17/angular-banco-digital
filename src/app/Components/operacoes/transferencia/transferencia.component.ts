import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContaGetModel } from "src/app/Core/models/conta/conta-get.model";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { ContaService } from "src/app/Core/services/conta.service";
import { OperacoesService } from "src/app/Core/services/operacoes.service";
import { ValidateErrorsFormService } from "src/app/Shared/form/validador-form";
import { ValidadorErrosKeys, ValidadorKeys } from "src/app/Shared/model/validador-key.model";

@Component({
    templateUrl: "./transferencia.component.html",
    selector: "bd-deposito",
    styleUrls: ["../../../Shared/styles/inputs.style.css",]
})
export class TransferenciaComponent implements OnInit {
    form: FormGroup = {} as FormGroup;
    errosForm: ValidadorErrosKeys[] = [];
    contas: ContaGetModel[] = [];
    constructor(private formBuilder: FormBuilder,
        public validatorMsg: ValidateErrorsFormService,
        private notificador: NotificacaoService,
        private contaService: ContaService,
        private operacoesService: OperacoesService) {
    }

    ngOnInit(): void {
        this.CreateFormBuilder();
    }

    Transferir(): void {
        if (this.form.valid) {
            this.operacoesService.TransferirAsync(this.form.value).subscribe({
                next: response =>
                    this.notificador.ExibirNotificacao("Transferência realizada com sucesso."),
                error: (error: HttpErrorResponse) =>
                    this.operacoesService.ErrorHandler(error, { mensagem404: "Registro não encontrado" }),
            });
        }
        else
            this.errosForm = this.validatorMsg.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
    }

    private GetContas = () => {
        this.contaService.GetAllAsync().subscribe({
            next: response => {
                if(response)
                    this.contas = response;
                else
                    this.notificador.ExibirNotificacao("Nenhuma conta disponível para transferência.");
            },
            error: (error: HttpErrorResponse){
                this.contaService.ErrorHandler(error, { mensagem404: "Registro não encontrado."});
            }
        })
    }

    private CreateFormBuilder = () =>
        this.form = this.formBuilder.group({
            valor: [0, [Validators.required, Validators.min(2)]],
            idContaDestino: ['', [Validators.required]],
        });

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
        [
            { Label: "Valor", Name: "valor" },
            { Label: "Conta destino", Name: "idContaDestino" },
        ]
}