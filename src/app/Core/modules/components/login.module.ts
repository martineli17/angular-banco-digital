import { NgModule } from "@angular/core";
import { LoginComponent } from "src/app/Components/user/login/login.component";
import { FormsModules } from "../base/form.module";
import { MaterialModule } from "../base/material.module";

@NgModule({
    declarations:[LoginComponent],
    imports:[
        FormsModules,
        MaterialModule,
    ],
    exports:[LoginComponent]
})
export class LoginModule{

}