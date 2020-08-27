import { Component, ReflectiveInjector, Inject } from '@angular/core';
import { Article } from './article/article.model';

import { HolaService } from './services/HolaService';
import { Saludador } from './services/saludador';
import { ServicioPersonalizadoService } from './services/servicio-personalizado.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';

  // Inyeccion por constructor
  constructor() {

  }

}
