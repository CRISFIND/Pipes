import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

nombre: string = 'Gimelly';
genero : string = 'femenino';

obj = {
  'masculino' :'invitarlo',
  'femenino'  : 'invitarla',
  
}





 clientes : string[] = ['Maria','jose','carlos','juan','rafael'];

 clientesmap = {
   '=0' :'no tenemos ningun cliente esperando',
   '=1' : 'tenemos un cliente esperando',
   '=2'  : 'tenemos 2 clientes esperando',
   '=3'  : 'tenemos 3 clientes esperando',
   'other' : 'tenemos # clientes esperando'
 }




cambiarcliente()  {
  this.nombre  = 'Aymey';
  this.genero  = 'femenino';
}

borrarcliente(){
  this.clientes.pop();
}




persona  =  {

    nombre : 'Cristhian',
    edad: 20,
    direccion : 'ate, lima'

}


heroes  =  [
  {
    nombre : 'Cristhian',
    edad: 20,
    direccion : 'ate, lima'
  },
  {
    nombre : 'Cristhia',
    edad: 40,
    direccion : 'ates, lima'
  },
  {
    nombre : 'Cristian',
    edad: 10,
    direccion : 'te, lima'
  },
]








miObservable = interval(1000);


valorPromesa = new Promise((resolve,reject) => {

setTimeout(() =>{

resolve('fin de la promesa')
}, 3500);
});
}

