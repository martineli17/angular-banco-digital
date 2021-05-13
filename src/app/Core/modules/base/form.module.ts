import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BasicModule } from "./basic.module";

@NgModule({
    imports:[
        BasicModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[
        BasicModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class FormsModules{

}