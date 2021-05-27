import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginComponent } from "src/app/Components/user/login/login.component";
import LoginModel from "../models/cliente/login.model";
import { RegisterClient } from "../models/register-client.model";
import { HttpClientService } from "./base/http-client.service";

@Injectable({
    providedIn: 'root'
})
export class ClientService extends HttpClientService{

    Register(model: RegisterClient): Observable<void>{
        return this.Add("cliente", model);
    }

    async Login(cpfCliente: LoginModel): Promise<boolean>{
        var retorno = true;
        try{
            const token = await this.Add<string, {}>("autenticacao", cpfCliente).toPromise();
            localStorage.setItem("acess_token",  token);
            this.SetHeaderAuthorizationBearer()
            return true;
        }
        catch{
            return false;
        }  
    }
}