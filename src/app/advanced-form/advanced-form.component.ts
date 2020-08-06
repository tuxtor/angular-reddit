import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.css']
})
export class AdvancedFormComponent implements OnInit {

  myForm: FormGroup;
  status: String = "";

  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {
        'personName': ['', Validators.compose([Validators.required, this.linuxValidator ])]
      }
    );

    this.myForm.controls.personName
      .valueChanges //Observable
      .subscribe( (control: any) => {
        this.status = JSON.stringify(control)
      });

    this.myForm.controls.personName
      .valueChanges //Observable
      .subscribe( (control: any) => {
        console.log('El usuario interactuo')
      });
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value)
    return;
  }

  linuxValidator(control: FormControl) {

    let valido = control.value.match('Tux');

    return { invalidName : !valido};

  }

}
