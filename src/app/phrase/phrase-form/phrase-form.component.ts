import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Phrase } from '../Phrase';
import { PhraseApiService } from '../phrase-api.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-phrase-form',
  templateUrl: './phrase-form.component.html',
  styleUrls: ['./phrase-form.component.css']
})
export class PhraseFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder,
    private phraseApiService: PhraseApiService,
    private messageService: MessageService) {
    this.myForm = fb.group({
      author: [''],
      phrase: [''],
      phraseId: [null]
    });
   }

  ngOnInit() {
  }

  onSubmit(value: Phrase){
    console.log(JSON.stringify(value));

    this.phraseApiService.createPhrase(value)
      .subscribe(data => {
        console.log('La respuesta de backend es ' + data);
        this.myForm.reset();
        this.messageService.sendMessage('update');
      });

  }

}
