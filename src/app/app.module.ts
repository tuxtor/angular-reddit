import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HolaService } from './services/HolaService';
import { Servicio2Service } from './services/servicio2.service';
import { Servicio1Service } from './services/servicio1.service';
import { Saludador } from './services/saludador';
import { ServicioPersonalizadoService } from './services/servicio-personalizado.service';
import { QuickFormComponent } from './quick-form/quick-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { FastFormComponent } from './fast-form/fast-form.component';

@NgModule({
  declarations: [//Candidato a inyeccion de dependencias
    AppComponent, ArticleComponent, QuickFormComponent, AdvancedFormComponent, FastFormComponent
  ],
  imports: [ //Importar funcionalidad desde bibliotecas
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: 'ServicioEnIngles', useClass: Servicio1Service},
    {provide: 'ServicioEnEspanol', useClass: Servicio2Service},
    {provide: 'Titulo', useValue: 'Angular Rocks!'},
    {
      provide: 'ServicioPersonalizado',
      useFactory() {
        let cadena = 'Hola personalizado'//Creando dependencias
        let servicio = new ServicioPersonalizadoService(cadena); //Creo la instancia a inyectar
        console.log('He creado la instancia');
        return servicio;
      }
    }
    //HolaService //Singleton
  ], //Servicios, eventos y fabricas de objetos
  bootstrap: [AppComponent] //Sector de arranque
})
export class AppModule { }
