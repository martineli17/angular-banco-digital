import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "./cartao-info.component.html",
    selector: "bg-cartao-info",
})
export class CartaoInfoComponent{
    @Input() ativo: boolean = false;
    @Input() tipoCartao: string = "";
    constructor(){
        
    }
}