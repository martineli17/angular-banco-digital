import { NgModule } from "@angular/core";
import { DepositoComponent } from "src/app/Components/operacoes/deposito/deposito.componen";
import { MovimentacaoComponent } from "src/app/Components/operacoes/movimentacao/movimentacao.component";
import { SaqueComponent } from "src/app/Components/operacoes/saque/saque.component";
import { TransferenciaComponent } from "src/app/Components/operacoes/transferencia/transferencia.component";
import { FormsModules } from "../base/form.module";
import { MaterialModule } from "../base/material.module";

@NgModule({
    declarations: [SaqueComponent, DepositoComponent, TransferenciaComponent, MovimentacaoComponent],
    imports: [FormsModules, MaterialModule],
    exports: [SaqueComponent, DepositoComponent, TransferenciaComponent, MovimentacaoComponent]
})
export class OperacoesModule{

}