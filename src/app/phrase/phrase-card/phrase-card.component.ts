import { Component, OnInit, Input } from '@angular/core';
import { Phrase } from '../Phrase';

@Component({
  selector: 'app-phrase-card',
  templateUrl: './phrase-card.component.html',
  styleUrls: ['./phrase-card.component.css']
})
export class PhraseCardComponent implements OnInit {

  @Input() phrase: Phrase;

  constructor() { }

  ngOnInit() {
  }

}
