import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-form',
  templateUrl: './quick-form.component.html',
  styleUrls: ['./quick-form.component.css']
})
export class QuickFormComponent implements OnInit {

  status: String = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any){
    this.status = "Recibi: " + JSON.stringify(value);
    console.log(value);
    return;
  }


}
