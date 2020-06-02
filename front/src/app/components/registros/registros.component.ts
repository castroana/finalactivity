import { Component, OnInit } from '@angular/core';

import {Registros} from "../../models/registros"
import {RegistrosService} from "../../services/registros.service"



@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  public RegistrosInsertados: Registros;
  public RegistrosEncontrados: any = [];

  constructor(private RegistrosService: RegistrosService) {
      this.RegistrosInsertados = new Registros ("","","","")
   }

  ngOnInit(): void {
    
  }

}
