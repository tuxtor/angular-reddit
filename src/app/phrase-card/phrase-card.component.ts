import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Phrase } from '../phrases/phrase';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-phrase-card',
  templateUrl: './phrase-card.component.html',
  styleUrls: ['./phrase-card.component.css']
})
export class PhraseCardComponent implements OnInit {
  @Input() phrase: Phrase;

  constructor(private messageService: MessageService) {

  }

  ngOnInit() {
  }

  selectPhrase() {
    this.messageService.sendMessage(this.phrase);
  }

}
