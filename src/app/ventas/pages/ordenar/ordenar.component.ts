import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayusculas : boolean = true;

  ordenarPor:string = '';
  heroes:Heroe[] = [
    {
      nombre: 'superman',
      vuela:true,
      color: Color.azul  
    },
    {
      nombre: 'ironman',
      vuela:true,
      color: Color.negro  
    },
    {
      nombre: 'batichica',
      vuela:true,
      color: Color.rojo  
    },
    {
      nombre: 'robin',
      vuela:false,
      color:Color.verde 
    }
  ]

cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }
  

cambiarOrden(valor:string){
    this.ordenarPor = valor;
}



}
