import { NgModule } from "@angular/core";
import { IndexPage } from "src/app/Pages/index/index.page";
import { MaterialModule } from "../base/material.module";
import { LoginModule } from "../components/login.module";
import {RegisterModule} from "../components/register.module";
import { HomeModule } from "./home.module";

@NgModule({
    declarations:[IndexPage],
    imports:[
        LoginModule,
        RegisterModule,
        HomeModule,
        MaterialModule,
    ]
})
export class IndexModule{

}