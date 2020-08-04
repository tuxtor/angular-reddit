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
  personName: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {
        'personName': ['Java Duke', Validators.required]
      }
    );
    this.personName = this.myForm.controls['personName'];
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value)
    this.status = "Recibi: " + JSON.stringify(value);
    return;
  }

}
