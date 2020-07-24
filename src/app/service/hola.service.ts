import { Injectable } from '@angular/core';
import { Greeter } from './greeter';

@Injectable({
  providedIn: 'root'
})
export class HolaService implements Greeter {

  constructor() { }

  doHello(name: string): string {
    return 'Hola ' + name;
  }
}
