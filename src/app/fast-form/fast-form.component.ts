import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast-form',
  templateUrl: './fast-form.component.html',
  styleUrls: ['./fast-form.component.css']
})
export class FastFormComponent implements OnInit {

  personName: string;
  status: string;

  constructor() {

   }

  ngOnInit() {
  }

  //No estoy enviando informacion a la reaccion, solo invoco un evento
  onSubmit() {
    this.status = "Valor actual de person Name es " + this.personName;
    return;
  }


}
