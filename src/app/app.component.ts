import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre: string = 'Cristhian';  //crear la variable
    valor: number = 1000;
    obj = {             //crea las variables
      nombre : 'cristhian'
    }

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }
  

    mostrarNombre(){  //crear el metodo
   console.log(this.nombre)
   console.log(this.valor)
   console.log(this.obj) //llamas a la variable con el this
    }

}
