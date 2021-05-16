import { NgModule } from "@angular/core";
import { IndexPage } from "src/app/Pages/index/index.page";
import { LoginModule } from "../components/login.module";
import {RegisterModule} from "../components/register.module";

@NgModule({
    declarations:[IndexPage],
    imports:[
        LoginModule,
        RegisterModule
    ]
})
export class IndexModule{

}