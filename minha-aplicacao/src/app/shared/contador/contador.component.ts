import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input("valorContador") valorContador: number = 0;
  //@Output("valorAlterado") valorAlterado = new EventEmitter();
  @Output() valorContadorChange = new EventEmitter();
  

  constructor() {     
  }

  ngOnInit(): void {    
  }

  decrementarValor() {
    this.valorContador--;
    this.valorContadorChange.emit(this.valorContador);
  }

  incrementarValor(){
    this.valorContador++;
    this.valorContadorChange.emit(this.valorContador);
  }

}
