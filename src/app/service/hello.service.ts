import { Injectable } from '@angular/core';
import { Greeter } from './greeter';

@Injectable({
  providedIn: 'root'
})
export class HelloService implements Greeter {

  constructor() { }

  doHello(name: string): string {
    return 'Hello ' + name;
  }
}
