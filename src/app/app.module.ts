import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//MODULO PERSONALIZADO PARA NO ESTAR LLENANDO NO ES NECESARIO PERO ES BUENA PRACTICA 

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//cambiar idioma 

import LocalEs from '@angular/common/locales/es-PE';
import LocalFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(LocalEs);
registerLocaleData(LocalFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    RouterModule,
    BrowserAnimationsModule,
  
  ],
  providers: [
    {
      provide:LOCALE_ID, useValue : 'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
