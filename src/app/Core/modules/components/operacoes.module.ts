import { NgModule } from "@angular/core";
import { DepositoComponent } from "src/app/Components/operacoes/deposito/deposito.componen";
import { SaqueComponent } from "src/app/Components/operacoes/saque/saque.component";
import { FormsModules } from "../base/form.module";
import { MaterialModule } from "../base/material.module";

@NgModule({
    declarations: [SaqueComponent, DepositoComponent],
    imports: [FormsModules, MaterialModule],
    exports: [SaqueComponent, DepositoComponent]
})
export class OperacoesModule{

}