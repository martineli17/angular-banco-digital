import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { OperacoesService } from "src/app/Core/services/operacoes.service";
import { ValidateErrorsFormService } from "src/app/Shared/form/validador-form";
import { ValidadorErrosKeys, ValidadorKeys } from "src/app/Shared/model/validador-key.model";

@Component({
    templateUrl: "./saque.component.html",
    selector: "bd-saque",
    styleUrls: ["../../../Shared/styles/inputs.style.css",]
})
export class SaqueComponent implements OnInit {
    form: FormGroup = {} as FormGroup;
    errosForm: ValidadorErrosKeys[] = [];
    constructor(private formBuilder: FormBuilder,
        public validatorMsg: ValidateErrorsFormService,
        private notificador: NotificacaoService,
        private operacoesService: OperacoesService) {
    }

    ngOnInit(): void {
        this.CreateFormBuilder();
    }

    Sacar(): void {
        if (this.form.valid) {
            this.operacoesService.SacarAsync(this.form.value).subscribe({
                next: response =>
                    this.notificador.ExibirNotificacao("Saque realizado com sucesso."),
                error: (error: HttpErrorResponse) =>
                    this.operacoesService.ErrorHandler(error, { mensagem404: "Você não possui uma conta cadastrada!" }),
            });
        }
        else
            this.errosForm = this.validatorMsg.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
    }

    private CreateFormBuilder = () =>
        this.form = this.formBuilder.group({
            valor: [0, [Validators.required, Validators.min(2)]],
            identificadorCaixaEletronico: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(5)]],
        });

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
        [
            { Label: "Valor", Name: "valor" },
            { Label: "Identificador Caixa Eletrônico", Name: "identificadorCaixaEletronico" },
        ]
}