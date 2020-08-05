import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast-form',
  templateUrl: './fast-form.component.html',
  styleUrls: ['./fast-form.component.css']
})
export class FastFormComponent implements OnInit {

  personName: string;
  submitted: boolean;

  constructor() {
    //this.personName = "Marco Polo";
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log("Actual person name " + this.personName )
  }

  doSubmit() {
    this.personName = 'Andres Manuel Lopez Obrador';
    return;
  }
}
