import { NgModule } from "@angular/core";
import { SaqueComponent } from "src/app/Components/operacoes/saque/saque.component";
import { FormsModules } from "../base/form.module";
import { MaterialModule } from "../base/material.module";

@NgModule({
    declarations: [SaqueComponent],
    imports: [FormsModules, MaterialModule],
    exports: [SaqueComponent]
})
export class OperacoesModule{

}