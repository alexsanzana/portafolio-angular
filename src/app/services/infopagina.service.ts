import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para conectarnos a servidores externos
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {

    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });

  }
}
