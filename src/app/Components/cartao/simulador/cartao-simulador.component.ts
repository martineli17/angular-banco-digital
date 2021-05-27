import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "./cartao-simulador.component.html",
    styleUrls: ["./cartao-simulador.component.scss"],
    selector: "bd-cartao-simulador"
})
export class CartaoSimuladorComponent{
    @Input() numero:string = "0000 0000 0000 0000";
    @Input() anoValidade: string = "0000";
    @Input() mesValidade: string = "00";
    constructor(){
        console.log(this.numero)
    }
}