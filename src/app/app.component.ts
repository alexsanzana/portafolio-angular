import { Component } from '@angular/core';
import { InfopaginaService } from './services/infoPagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public infoPaginaService: InfopaginaService) {

  }
}
