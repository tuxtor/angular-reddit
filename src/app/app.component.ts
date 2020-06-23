import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';

  //Callback del evento
  agregarEnlace(newTitle: HTMLInputElement, newLink: HTMLInputElement) {
    console.log(`Agregando el enlace ${newTitle.value} en la url ${newLink.value}`);
    return false;
  }
}
