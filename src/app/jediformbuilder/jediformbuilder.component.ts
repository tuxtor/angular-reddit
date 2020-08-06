import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-jediformbuilder',
  templateUrl: './jediformbuilder.component.html',
  styleUrls: ['./jediformbuilder.component.css']
})
export class JediformbuilderComponent implements OnInit {

  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
        'jedi' : ['Yoda']
    });
  }

  ngOnInit() {

  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
