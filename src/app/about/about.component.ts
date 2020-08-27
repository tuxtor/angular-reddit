import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nombre: string;
  
  constructor(private route: ActivatedRoute ) {

    route.params
      .subscribe( params => {
        this.nombre = params['nombre'];
      });

  }

  ngOnInit() {
  }

}
