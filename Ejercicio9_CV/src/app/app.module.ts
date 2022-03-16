import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { DatosComponent } from './datos/datos.component';
import { PerfilComponent } from './perfil/perfil.component';
import {ConocimientosComponent} from './conocimientos/conocimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DatosComponent,
    PerfilComponent,
    ConocimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
