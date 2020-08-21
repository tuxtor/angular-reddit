import { Component, OnInit } from '@angular/core';
import { PhraseApiService } from '../phrase-api.service';
import { Phrase } from '../Phrase';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.css']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];

  constructor(private phraseApiService: PhraseApiService,
      private messageService: MessageService) {
        messageService.getMessage().subscribe(data => {
          if(data === 'update'){
            this.search();
          }
        })
  }

  search(){
    this.phraseApiService.getPhrases('')
    .subscribe( data => {
      console.log('Data from server ' + JSON.stringify(data));
      this.phrases = data.body;
    });
  }

  ngOnInit() {
    this.search();
  }

}
