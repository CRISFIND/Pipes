import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower     : string = 'cristhian';
  nombreUpper     : string = 'CRISTHIAN';
  nombreTitle     : string = 'cRisThiAn';

  fecha : Date = new Date();
}
