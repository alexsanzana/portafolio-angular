import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para conectarnos a servidores externos
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any;

  constructor( private http: HttpClient ) {
    this.caragarInfo();
    this.cargarEquipo();
  }

  private caragarInfo() {
     this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
     this.http.get('https://angular-html-1096b.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
    });
  }

}
