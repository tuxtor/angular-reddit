import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonalizadoService {

  constructor(@Inject('cadena') private cadena: string) {
    console.log('Generando una instancia de servicio personalizado')
  }

  crearCadena(nombre: string): string {
    return 'Cadena concreta ' + nombre;
  }

  crearCadenaPersonalizada(nombre: string): string {
    return this.cadena + nombre;
  }
}
