import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolaService {

  cuenta: number = 0;

  constructor(){
    console.log("Iniciando instancia de Hola service")
  }

  saludar(nombre: string) {
    return `Hola ${nombre} ${this.cuenta++}`
  }
}
