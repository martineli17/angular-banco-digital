import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientService } from "src/app/Core/services/client.service";

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

    constructor(private service: ClientService, private formBuilder: FormBuilder) {
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

    /*NewClient(){
        this.service.Register()
    }*/
}