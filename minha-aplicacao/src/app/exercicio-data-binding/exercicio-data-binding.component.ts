import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Output() enviarInformacao = new EventEmitter();

  desabilitado: boolean = false;
  imageUrl: string = 'https://i.pinimg.com/originals/eb/c9/70/ebc970ba95b719dc5495020065393cb2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  clicouNoBotao(event: MouseEvent){
    console.log(event);
    this.enviarInformacao.emit(event);
  }

  passouMouseEmCima(){
    console.log("entrou");
  }
  

}
