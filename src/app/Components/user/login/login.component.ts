import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificacaoService } from "src/app/Core/services/base/notificacao.service";
import { ClientService } from "src/app/Core/services/client.service";
import { ValidateErrorsFormService } from "src/app/Shared/form/validador-form";
import { ValidadorErrosKeys, ValidadorKeys } from "src/app/Shared/model/validador-key.model";

@Component({
    templateUrl: "./login.component.html",
    selector: "bd-login",
    styleUrls: [
        "../../../Shared/styles/inputs.style.css",
        "./login.component.css",
    ]
})
export class LoginComponent implements OnInit{
    cpfCnpj: string = "";
    senha: string = "";

    public form: FormGroup = {} as FormGroup;
    public errosMsg: ValidadorErrosKeys[] = [];
    
    constructor(
        private service: ClientService, 
        private formBuilder: FormBuilder, 
        public validatorMsg: ValidateErrorsFormService,
        private notificacao: NotificacaoService) {
    }

    ngOnInit(){
        this.CreateForm();
    }

    private CreateForm(): void{
        this.form = this.formBuilder.group(
           {Cpf: ["", [Validators.required, Validators.maxLength(11)]]});
    }

    FazerLogin(): void{
        console.log(this.form.value)
        if(this.form.valid){
            this.service.Login(this.form.value).subscribe({
                next: response => {
                    this.cpfCnpj = response;
                },error: response => {
                    console.log(response);
                    this.notificacao.ExibirNotificacao("Erro ao fazer o login!");
                }
            });
        }
        else{
            this.errosMsg = this.validatorMsg.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
        }
    }

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
    [
        { Label: "CPF", Name: "Cpf"},
    ]
}