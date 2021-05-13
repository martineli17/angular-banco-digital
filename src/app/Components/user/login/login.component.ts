import { Component } from "@angular/core";

@Component({
    templateUrl: "./login.component.html",
    selector: "bd-login",
    styleUrls: [
        "../../../Shared/styles/inputs.style.css",
        "./login.component.css",
    ]
})
export class LoginComponent{
    cpfCnpj: string = "";
    senha: string = "";
    constructor() {
    }
}