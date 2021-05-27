import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { OperacoesService } from "src/app/Core/services/operacoes.service";
import { ValidateErrorsFormService } from "src/app/Shared/form/validador-form";
import { ValidadorErrosKeys, ValidadorKeys } from "src/app/Shared/model/validador-key.model";

@Component({
    templateUrl: "./deposito.component.html",
    selector: "bd-deposito",
    styleUrls: ["../../../Shared/styles/inputs.style.css",]
})
export class DepositoComponent implements OnInit {
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

    Depositar(): void {
        if (this.form.valid) {
            this.operacoesService.DepositarAsync(this.form.value).subscribe({
                next: response =>
                    this.notificador.ExibirNotificacao("Depósito realizado com sucesso."),
                error: (error: HttpErrorResponse) =>
                    this.operacoesService.ErrorHandler(error, { mensagem404: "Registro não encontrado" }),
            });
        }
        else
            this.errosForm = this.validatorMsg.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
    }

    private CreateFormBuilder = () =>
        this.form = this.formBuilder.group({
            valor: [0, [Validators.required, Validators.min(2)]],
            numeroBoleto: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
            credenciador: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]],
        });

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
        [
            { Label: "Valor", Name: "valor" },
            { Label: "Número Boleto", Name: "numeroBoleto" },
            { Label: "Credenciador", Name: "credenciador" },
        ]
}