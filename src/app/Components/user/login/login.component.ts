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

    async FazerLogin(): Promise<void>{
        console.log(this.form.value)
        if(this.form.valid){
            var result = await this.service.Login(this.form.value);
            console.log(result);
            if(result === false){
                this.notificacao.ExibirNotificacao("Usuário não cadastrado!!!")
            }
        }
        else{
            this.errosMsg = this.validatorMsg.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
            this.notificacao.ExibirNotificacao("Usuário não cadastrado!!!");
        }
    }

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
    [
        { Label: "CPF", Name: "Cpf"},
    ]
}