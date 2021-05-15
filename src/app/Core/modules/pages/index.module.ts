import { NgModule } from "@angular/core";
import { IndexPage } from "src/app/Pages/index/index.page";
import { CartaoModule } from "../components/cartao.module";
import { LoginModule } from "../components/login.module";

@NgModule({
    declarations:[IndexPage],
    imports:[LoginModule, CartaoModule]
})
export class IndexModule{

}