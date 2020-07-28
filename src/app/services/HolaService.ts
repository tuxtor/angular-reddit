import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolaService {

  saludar(nombre: string) {
    return `Hola ${nombre}`
  }
}
