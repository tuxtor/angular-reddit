import { Component, OnInit, HostBinding, Input, EventEmitter, Output, Inject } from '@angular/core';
import { Article } from './article.model';
import { HolaService } from '../services/HolaService';
import { ServicioPersonalizadoService } from '../services/servicio-personalizado.service';

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

  constructor(private helloService:HolaService,
    @Inject('ServicioPersonalizado') private servicioPersonalizado: ServicioPersonalizadoService) {
    this.selectEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  upvote() {
    this.article.upvote();
    this.selectEvent.emit(`${this.article.title} y subí el punteo `);
    let saludo = this.helloService.saludar('Victor desde article')
    console.log(this.servicioPersonalizado.crearCadenaPersonalizada(' desde article'));
  }

  downvote() {
    this.article.downvote();
    this.selectEvent.emit(`${this.article.title} bajé el punteo `);
  }

  titleClick() {
    window.alert('Hiciste click en el titulo ' + this.article.title)
  }

}
