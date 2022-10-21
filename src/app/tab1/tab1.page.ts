import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
/*
export class Tab1Page {

  constructor() {}

}
*/
/*implementamos el OnInit para controlar 
*la carga inical (cuando se inicia la aplicación)
*/
export class Tab1Page implements OnInit{

  constructor() {}
  
  
  ngOnInit(): void {
    //variable
    let numero = 10;
    /*creamos un debuger temporal
    *Hay que crearlo al principio y luego
    *se pueden poner puntos de ruptura
    */
    debugger;
    numero = 20,
    
    numero = numero + 10;

    numero = 0;

    //muestra el número
    console.log(numero);
  }

}
