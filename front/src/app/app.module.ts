import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegistrosComponent } from './components/registros/registros.component';

import { RegistrosService} from "./services/registros.service"

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegistrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
