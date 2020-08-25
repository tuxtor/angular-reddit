import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PhraseApiService } from '../service/phrase-api.service';
import { Phrase } from '../phrases/phrase';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-phrase-form',
  templateUrl: './phrase-form.component.html',
  styleUrls: ['./phrase-form.component.css']
})
export class PhraseFormComponent implements OnInit {
  myForm: FormGroup;
  phraseApiService: PhraseApiService;
  status: string;
  constructor(fb: FormBuilder, phraseApiService: PhraseApiService, private messageService: MessageService) {
    this.myForm = fb.group({
        author : [''],
        phrase : [''],
        phraseId: [null]
    });
    this.phraseApiService = phraseApiService;
  }

  ngOnInit() {
    this.messageService.getMessage()
      .subscribe( phrase => {
        if (typeof phrase.phraseId !== 'undefined') {
          this.myForm.patchValue(phrase);
        }
      });

  }

  onSubmit(value: Phrase): void {
    console.log('you submitted value: ', value);

    let operationObservable;

    if (typeof value.phraseId !== 'number') {
      operationObservable = this.phraseApiService.createPhrase(value);
    } else {
      operationObservable = this.phraseApiService.updatePhrase(value);
    }

    operationObservable.subscribe(data => {
      console.log('server response ' + data);
      this.myForm.reset();
      this.messageService.sendMessage('update');
    });
    return;
  }

  delete(value: Phrase){
    if (typeof value.phraseId === 'number') {
      this.phraseApiService.deletePhrase(value.phraseId)
        .subscribe(data => {
          console.log('Server data ' + data);
          this.myForm.reset();
          this.messageService.sendMessage('update');
        } );
    }

  }

}
