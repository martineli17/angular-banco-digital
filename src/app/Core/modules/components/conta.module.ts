import { NgModule } from "@angular/core";
import { ContaComponent } from "src/app/Components/conta/conta.component";
import { BasicModule } from "../base/basic.module";
import { MaterialModule } from "../base/material.module";

@NgModule({
    declarations: [ContaComponent],
    imports: [BasicModule, MaterialModule],
    exports: [ContaComponent],
})
export class ContaModule{

}