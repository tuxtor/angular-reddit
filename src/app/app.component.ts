import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];
  statusMessage: string;

  constructor() {
    this.articles = [new Article(0, 'TypeScript', 'https://www.typescriptlang.org/'),
      new Article(0, 'Angular', 'https://angular.io'),
      new Article(0, 'JavaScript', 'https://developer.mozilla.org/es/docs/Web/JavaScript')];
  }

  //Callback del evento
  agregarEnlace(newTitle: HTMLInputElement, newLink: HTMLInputElement) {

    this.articles.push(
      new Article(0, newTitle.value, newLink.value)
    );
    newLink.value = '';
    newTitle.value = '';
    return false;
  }

  sortedArticles() {
    //Algoritmo que ordene
    // Argumento en forma de funcion
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  receptorDelEvento(info: string) {
    this.statusMessage = info;
  }
}
