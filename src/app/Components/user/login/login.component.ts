import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    
    constructor(private formBuilder: FormBuilder, public validatorMsg: ValidateErrorsFormService) {
    }

    ngOnInit(){
        this.CreateForm();
    }

    private CreateForm(): void{
        this.form = this.formBuilder.group(
           {Cpf: ["", [Validators.required, Validators.maxLength(11)]],
            Senha: ["", [Validators.required]]});
    }

    FazerLogin(): void{
        alert("Ainda não foi implementado!!!")
    }

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
    [
        { Label: "CPF", Name: "Cpf"},
        { Label: "Senha", Name: "Senha"}
    ]
}