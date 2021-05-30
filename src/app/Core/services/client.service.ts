import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginComponent } from "src/app/Components/user/login/login.component";
import LoginModel from "../models/cliente/login.model";
import { RegisterClient } from "../models/register-client.model";
import { AutenticacaoService } from "./base/autenticacao.service";
import { HttpClientService, HttpClienteBasic } from "./base/http-client.service";
import { NotificacaoService } from "./base/notificacao.service";

@Injectable({
    providedIn: 'root'
})
export class ClientService extends HttpClienteBasic{

    constructor(private client: HttpClientService, 
                protected notificador: NotificacaoService){
        super(notificador);
    }
    

    Register(model: RegisterClient): Observable<void>{
        return this.client.Add("cliente", model);
    }

    async Login(cpfCliente: LoginModel): Promise<boolean>{
        try{
            const token = await this.client.Add<string, {}>("autenticacao", cpfCliente).toPromise();
            AutenticacaoService.Login(token);
            return true;
        }
        catch{
            return false;
        }  
    }
}