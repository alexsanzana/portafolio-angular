import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

   cargarProductos() {
      this.http.get('https://angular-html-1096b.firebaseio.com/productos_idx.json')
        .subscribe( ( resp: Producto[] ) => {
            console.log( resp );
            this.producto = resp;
            this.cargando = false;
        });
   }
}
