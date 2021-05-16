import { NgModule } from "@angular/core";
import {RegisterComponent} from "src/app/Components/user/Register/register.component";
import { FormsModules } from "../base/form.module";
import { MaterialModule } from "../base/material.module";

@NgModule({
    declarations:[RegisterComponent],
    imports:[
        FormsModules,
        MaterialModule,
    ],
    exports:[RegisterComponent,]
})
export class RegisterModule{

}