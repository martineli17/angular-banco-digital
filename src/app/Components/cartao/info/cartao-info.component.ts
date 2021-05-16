import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AlteracaoDadosCartao } from "src/app/Core/models/cartao/cartao-update.model";
import TipoCartao from "src/app/Core/models/cartao/tipo-cartao.model";

@Component({
    templateUrl: "./cartao-info.component.html",
    selector: "bg-cartao-info",
})
export class CartaoInfoComponent implements OnInit{
    @Input() ativo: boolean = false;
    @Input() tipoCartao: string = "";
    @Input() tipoCartaoValue: TipoCartao = TipoCartao.Debito;
    @Input() idCartao: string = "";
    @Output() alterarStatus = new EventEmitter<AlteracaoDadosCartao>();
    form: FormGroup = {} as FormGroup;
    
    constructor(private formBuilder: FormBuilder){
    }

    ngOnInit(): void {
        this.CreateFormBuilder();
    }

    AlterarDadosAsync = () => 
        this.alterarStatus.emit({status: this.form.value.ativo, tipoCartao: this.form.value.tipoCartaoValue});

    private CreateFormBuilder = () =>
    this.form = this.formBuilder.group({
        ativo: [this.ativo],
        tipoCartaoValue: [this.tipoCartaoValue],
    });
  
}