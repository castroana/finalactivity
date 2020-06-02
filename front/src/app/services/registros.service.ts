import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from "@angular/common/http";

import {map} from "rxjs/operators";

import {Observable} from "rxjs";
import { type } from 'os';


@Injectable()

export class RegistrosService {
  url = "http://localhost:3001/api/"
  constructor(private _http: HttpClient) {}

  // SERVICIO INSERTAR REGISTRO
  insertarRegistro(registroNuevo){
    let params = JSON.stringify(registroNuevo);
    let options = {
      headers: new HttpHeaders({ "Content-type": "applications/json" }),
      }
    return this._http.post(this.url, params, options).pipe(map((res) => res));
}

// SERVICIO MODIFICAR REGISTRO

modificarRegistro(){
  return this._http.get(this.url).pipe(map((res) => res));

}

// SERVICIO LISTAR REGISTRO

listarRegistro(idRegistro, registroListado){
  let params = JSON.stringify(registroListado);
  let options = {
    headers: new HttpHeaders({"Content-Type": "application/json" }),
  }
  return this._http.put(this.url + idRegistro, params, options).pipe(map((res) => res));
};


// SERVICIO ELIMINAR REGISTRO
    eliminarRegistro(idRegistro){
      let options = {
        headers: new HttpHeaders({"Content-Type": "application/json"}),
      };
      return this._http.delete(this.url + idRegistro,options).pipe(map((res) => res));
  }
}