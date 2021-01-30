import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'minha-aplicacao';

  valorInicial: number = 10;  

  somar(numero1: number, numero2: number){
    return numero1 + numero2;
  }

  constructor() {
    this.title = "Outra coisa";

  setTimeout(() => {
      this.title = "Seja bem vindo";
    }, 3000);
  }

  eventoRecebido(novoValor:number){
    console.log(novoValor);
    alert("Evento recebido pelo app component");
  }

  
}
