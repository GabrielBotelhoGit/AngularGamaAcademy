import { Component, OnInit } from '@angular/core';

import {MEMES_AGRUPADOS_POR_CATEGORIA} from "./exercicio-diretivas.constants";

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent implements OnInit {

  deveExibir: boolean = true;
  aumentarFonte: boolean = false;
  corClasse:string = "";

  arrFrutas: string[] = ['Maçã', 'Banana', 'Morango'];

  linkBase: string = "https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images";

  memes: any = MEMES_AGRUPADOS_POR_CATEGORIA;

  constructor() { }

  ngOnInit(): void {
  }

  mudarVisualizacao(){
    this.deveExibir = !this.deveExibir;
  }

  getImagemUrl(meme: any){
    return this.linkBase + meme.imagemURL;
  }

  changeToGreen(){
    this.corClasse="verde";
  }

  changeToBlue(){
    this.corClasse = "azul";
  }

  changeTamanhoFonte(){
    this.aumentarFonte = !this.aumentarFonte;
  }

}
