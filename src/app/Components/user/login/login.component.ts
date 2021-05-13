import { Component } from "@angular/core";

@Component({
    templateUrl: "./login.component.html",
    selector: "custom-login",
})
export class LoginComponent{
    cpfCnpj: string = "";
    senha: string = "";
    constructor() {
    }
}