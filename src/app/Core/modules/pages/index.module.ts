import { NgModule } from "@angular/core";
import { IndexPage } from "src/app/Pages/index/index.page";
import { LoginModule } from "../components/login.module";

@NgModule({
    declarations:[IndexPage],
    imports:[LoginModule]
})
export class IndexModule{

}