import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: "root" })
export class NotificacaoService{
    constructor(private snack: MatSnackBar){
    }

    ExibirNotificacao = (mensagem: string, duracao: number = 3000) => {
        this.snack.open(mensagem, "", {
            duration: duracao,
        })
    }
}