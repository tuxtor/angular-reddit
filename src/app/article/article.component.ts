import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  //Binding propiedades desde el html
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    this.article = new Article(0, "Academik", "https://academik.io");
  }

  ngOnInit() {
  }

  upvote() {
    this.article.upvote();
  }

  downvote() {
    this.article.downvote();
  }

}
