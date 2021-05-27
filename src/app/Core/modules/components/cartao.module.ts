import { NgModule } from "@angular/core";
import { CartaoComponent } from "src/app/Components/cartao/card/cartao.component";
import { CartaoInfoComponent } from "src/app/Components/cartao/info/cartao-info.component";
import { CartaoSimuladorComponent } from "src/app/Components/cartao/simulador/cartao-simulador.component";
import { FormsModules } from "../base/form.module";
import { MaterialModule } from "../base/material.module";

@NgModule({
    declarations: [CartaoInfoComponent, CartaoSimuladorComponent, CartaoComponent],
    imports: [FormsModules, MaterialModule],
    exports: [CartaoComponent, CartaoInfoComponent, CartaoSimuladorComponent],
})
export class CartaoModule{

}