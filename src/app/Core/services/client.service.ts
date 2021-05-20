import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginComponent } from "src/app/Components/user/login/login.component";
import { RegisterClient } from "../models/register-client.model";
import { HttpClientService } from "./base/http-client.service";

@Injectable({
    providedIn: 'root'
})
export class ClientService{

    constructor(private httpClient: HttpClientService){

    }

    Register(model: RegisterClient): void{
        console.log("ok")
        this.httpClient.Add("cliente", model);
    }

    Login(cpfCliente: string): Observable<string>{
        return this.httpClient.Add<string, {}>("autenticacao", {cpf: cpfCliente});
    }
}