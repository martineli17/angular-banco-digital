import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HomePage } from "src/app/Pages/home/home.page";
import { IndexPage } from "src/app/Pages/index/index.page";
import { MaterialModule } from "../base/material.module";
import { CartaoModule } from "../components/cartao.module";
import { ContaModule } from "../components/conta.module";
import { LoginModule } from "../components/login.module";
import { OperacoesModule } from "../components/operacoes.module";
import {RegisterModule} from "../components/register.module";
import { DadosModule } from "./dados.module";
import { MovimentacoesModule } from "./movimentacoes.module";

@NgModule({
    declarations:[HomePage],
    imports:[
        MovimentacoesModule,
        DadosModule,
        MaterialModule,
        AppRoutingModule,
    ]
})
export class HomeModule{

}