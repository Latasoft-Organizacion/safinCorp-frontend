import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor() { }
  private videos=[
    {
      nombre:'Evento N°22 2024',
      descripcion:'entrevista a mariana alejandra letelier en Agacech ',
      link: 'https://www.youtube.com/embed/tDm2caLU44w?si=08no9IZdh_wEebHf',
      fotos:[
        
      ]
    },
    {
      nombre:'Evento ',
      descripcion:'entrevista a mariana alejandra letelier en Agacech ',
      link: '',
      fotos:[
        'assets/condominos.webp',
        'assets/condominos.webp'
        
      ]
    }

  ]

  getVideos(){
    return of(this.videos);
  }
}
