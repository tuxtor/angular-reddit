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
        'personName': ['Java Duke', Validators.compose([Validators.required, this.linuxValidator])]
      }
    );

    this.myForm.valueChanges.subscribe( (form: any) => {
      console.log('Formulario cambio a', form); }
    );
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value)
    this.status = "Recibi: " + JSON.stringify(value);
    return;
  }

  linuxValidator(control: FormControl) {
    if (!control.value.match('Tux')) {
      return {invalidName: true};
    }
  }
  

}
