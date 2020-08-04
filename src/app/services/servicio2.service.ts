import { Injectable } from '@angular/core';
import { Saludador } from './saludador';


/**
 * Saludar en spanish
 */
@Injectable({
  providedIn: 'root'
})
export class Servicio2Service implements Saludador {

  constructor() { }

  createHello(name: string): string {
    return "Hola desde el servicio 2, encantado de conocerte " + name;
  }
}
