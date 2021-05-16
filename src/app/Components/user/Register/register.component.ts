import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

    constructor(private service: ClientService, private formBuilder: FormBuilder, public validatorMsg: ValidateErrorsFormService) {
    }

    ngOnInit(){
        this.CreateForm();
    }

    private CreateForm(): void{
        this.form = this.formBuilder.group(
            {Nome: ["", [Validators.required, Validators.maxLength(100)]],
            Cpf: ["", [Validators.required, Validators.maxLength(11)]],
            Telefone: ["", [Validators.required, Validators.maxLength(11)]],
            Senha: ["", [Validators.required]]});
    }

    NewClient(): void{
        if(this.form.valid){
            this.service.Register(this.form.value);
        }
        else{
            this.errosMsg = this.validatorMsg.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
            console.log(this.errosMsg.find(x => x.Label === 'Nome')?.Error);
        }
    }

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
        [
            { Label: "Nome", Name: "Nome" },
            { Label: "CPF", Name: "Cpf"},
            { Label: "Telefone", Name: "Telefone"},
            { Label: "Senha", Name: "Senha"}
        ]
}