import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { ClientService } from "src/app/Core/services/client.service";
import { ValidateErrorsFormService } from "src/app/Shared/form/validador-form";
import { ValidadorErrosKeys, ValidadorKeys } from "src/app/Shared/model/validador-key.model";

@Component({
    templateUrl: "./register.component.html",
    selector: "bd-register",
    styleUrls: [
        "../../../Shared/styles/inputs.style.css",
        "./register.component.css"
    ]
})
export class RegisterComponent implements OnInit{

    public form: FormGroup = {} as FormGroup;
    public errosMsg: ValidadorErrosKeys[] = [];

    constructor(private service: ClientService, 
                private formBuilder: FormBuilder, 
                private notificador: NotificacaoService, 
                public validatorMsg: ValidateErrorsFormService) {
    }

    ngOnInit(){
        this.CreateForm();
    }

    NewClient(): void{
        if(this.form.valid){
            console.log(this.form.value);
            this.service.Register(this.form.value).subscribe({
                next: response => {
                    this.notificador.ExibirNotificacao("Cadastro realizado com sucesso!");
                },
                error: (error: HttpErrorResponse) => {
                    this.service.ErrorHandler(error, {mensagem404: "Cliente não encontrado."});
                }
            });
        }
        else{
            this.errosMsg = this.validatorMsg.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
        }
    }

    private CreateForm(): void{
        this.form = this.formBuilder.group(
            {Nome: ["", [Validators.required, Validators.maxLength(100)]],
            Cpf: ["", [Validators.required, Validators.maxLength(11)]],
            Telefone: ["", [Validators.required, Validators.maxLength(11)]]});
    }

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
        [
            { Label: "Nome", Name: "Nome" },
            { Label: "CPF", Name: "Cpf"},
            { Label: "Telefone", Name: "Telefone"}
        ]
}