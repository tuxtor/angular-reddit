import { Component, OnInit, HostBinding, Input, EventEmitter, Output } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  //Binding propiedades desde el html
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Output() selectEvent: EventEmitter<string>;

  constructor() {
    this.selectEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  upvote() {
    this.article.upvote();
    this.selectEvent.emit(`${this.article.title} y subí el punteo `);
  }

  downvote() {
    this.article.downvote();
    this.selectEvent.emit(`${this.article.title} bajé el punteo `);
  }

  titleClick() {
    window.alert('Hiciste click en el titulo ' + this.article.title)
  }

}
