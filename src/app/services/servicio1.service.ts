import { Injectable } from '@angular/core';
import { Saludador } from './saludador';


/**
 * Saludar en ingles
 */
@Injectable({
  providedIn: 'root'
})
export class Servicio1Service implements Saludador {

  constructor() { }

  createHello(name: string): string {
    return "Hello from service 1, nice to meet you " + name;
  }
}
