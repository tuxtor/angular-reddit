import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jediform',
  templateUrl: './jediform.component.html',
  styleUrls: ['./jediform.component.css']
})
export class JediformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
