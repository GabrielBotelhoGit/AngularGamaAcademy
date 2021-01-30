import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent implements OnInit {

  valorMonetario: number = 3000;
  data: Date = new Date();

  compras = [{
    produto:"Lampadas",
    valor: 299.99,
    quantidade: 2,
    peso: 0,
    data: new Date(2020,1,1, 15,20)
  },{
    produto:"farinha",
    valor: 450.29,
    quantidade: 2,
    peso: 29.3333,
    data: new Date(2020,1,10, 19,30)
  }]

  filme = {
    "titulo":"Matrix Reloaded",
    "avaliacao": 4.6598751,
    "precoAluguel": 12.99,
    "dataLancamento": new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
