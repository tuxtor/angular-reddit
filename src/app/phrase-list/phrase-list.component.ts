import { Component, OnInit } from '@angular/core';
import { Phrase } from '../phrases/phrase';
import { PhraseApiService } from '../service/phrase-api.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.css']
})
export class PhraseListComponent implements OnInit {

  phraseList: Phrase[];
  phraseApiService: PhraseApiService;
  constructor(phraseApiService: PhraseApiService, private messageService: MessageService) {
    this.phraseApiService = phraseApiService;
  }

  ngOnInit() {
    this.actualizar();

    this.messageService.getMessage().subscribe(
      message => {
        console.log('Receiving ' + message);
        if (message === 'update') {
          this.actualizar();
        }
      }
    )
  }

  actualizar() {
    this.phraseApiService.getPhrases('')
      .subscribe( data => {
        this.phraseList = data.body;
      });
  }

  selectPhrase(phrase: Phrase){
    console.log('Listado recibe ' + phrase);
  }

}
