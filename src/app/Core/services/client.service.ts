import { Injectable } from "@angular/core";
import { RegisterClient } from "../models/register-client.model";
import { HttpClientService } from "./base/http-client.service";

@Injectable({
    providedIn: 'root'
})
export class ClientService{

    constructor(private httpClient: HttpClientService){

    }

    Register(model: RegisterClient): void{
        this.httpClient.Add("cliente", model);
    }

    Login(): void{
        var tkoen = "";
        localStorage.setItem("acess_token", tkoen);
        this.httpClient.SetHeaderAuthorizationBearer();
    }
}