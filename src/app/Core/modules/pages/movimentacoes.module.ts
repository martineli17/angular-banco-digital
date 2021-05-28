import { NgModule } from "@angular/core";
import { MovimentacoesPage } from "src/app/Pages/movimentacoes/movimentacoes.page";
import { MaterialModule } from "../base/material.module";
import { OperacoesModule } from "../components/operacoes.module";

@NgModule({
    declarations:[MovimentacoesPage],
    imports:[
        MaterialModule,
        OperacoesModule,
    ]
})
export class MovimentacoesModule{

}