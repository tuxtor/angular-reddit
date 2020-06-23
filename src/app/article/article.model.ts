/**
 * Autosuficiente y responsable de sus propiedades
 */
export class Article {
  votes: number;
  title: string;
  link: string;

  constructor(votes: number, title: string, link: string) {
      this.votes = votes;
      this.title = title;
      this.link = link;
  }

  upvote() {
    this.votes++;
  }

  downvote() {
    this.votes--;
  }
}