import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [//Candidato a inyeccion de dependencias
    AppComponent, ArticleComponent
  ],
  imports: [ //Importar funcionalidad desde bibliotecas
    BrowserModule
  ],
  providers: [], //Servicios, eventos y fabricas de objetos
  bootstrap: [AppComponent] //Sector de arranque
})
export class AppModule { }