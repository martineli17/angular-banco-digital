import { NgModule } from "@angular/core";
import { DadosPage } from "src/app/Pages/dados/dados.page";
import { MaterialModule } from "../base/material.module";
import { CartaoModule } from "../components/cartao.module";
import { ContaModule } from "../components/conta.module";

@NgModule({
    declarations:[DadosPage],
    imports:[
        MaterialModule,
        CartaoModule,
        ContaModule,
    ]
})
export class DadosModule{

}