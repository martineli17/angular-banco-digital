import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AutenticacaoService } from "src/app/Core/services/base/autenticacao.service";

@Component({
    templateUrl: "./home.page.html",
    styleUrls: ["./home.page.css"]
})
export class HomePage{
    constructor(private router: Router){

    }
    
    Logout() {
        AutenticacaoService.Logout();
        this.router.navigateByUrl("/");
    }
}