import { NgModule } from "@angular/core";
import { IndexPage } from "src/app/Pages/index/index.page";
import { CartaoModule } from "../components/cartao.module";
import { LoginModule } from "../components/login.module";
import {RegisterModule} from "../components/register.module";

@NgModule({
    declarations:[IndexPage],
<<<<<<< HEAD
    imports:[
        LoginModule,
        RegisterModule
    ]
=======
    imports:[LoginModule, CartaoModule]
>>>>>>> 88ccb382b2b2b69f50bb560e9c07745637b3e6d4
})
export class IndexModule{

}