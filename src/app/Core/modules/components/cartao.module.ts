import { NgModule } from "@angular/core";
import { CartaoComponent } from "src/app/Components/cartao/card/cartao.component";
import { CartaoInfoComponent } from "src/app/Components/cartao/info/cartao-info.component";
import { CartaoSimuladorComponent } from "src/app/Components/cartao/simulador/cartao-simulador.component";
import { BasicModule } from "../base/basic.module";
import { MaterialModule } from "../base/material.module";

@NgModule({
    declarations: [CartaoInfoComponent, CartaoSimuladorComponent, CartaoComponent],
    imports: [BasicModule, MaterialModule],
    exports: [CartaoComponent, CartaoInfoComponent, CartaoSimuladorComponent],
})
export class CartaoModule{

}