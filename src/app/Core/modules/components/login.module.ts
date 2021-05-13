import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "src/app/Components/user/login/login.component";
import { FormsModules } from "../base/form.module";

@NgModule({
    declarations:[LoginComponent],
    imports:[
        FormsModules,
    ],
    exports:[LoginComponent]
})
export class LoginModule{

}