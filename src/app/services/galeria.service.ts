import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor() { }
  private videos=[
    {
      nombre:'Agacech 2024',
      descripcion:'entrevista a mariana alejandra letelier en Agacech ',
      link: 'https://www.youtube.com/embed/tDm2caLU44w?si=08no9IZdh_wEebHf',
      fotos:[
        
      ]
    },
    {
      nombre:'Cigsa',
      descripcion:'',
      link: '',
      fotos:[
        'assets/img/fotos-eventos/agacech/cigsa1.webp',
        'assets/img/fotos-eventos/agacech/cigsa2.webp',
        'assets/img/fotos-eventos/agacech/cigsa3.webp',
        'assets/img/fotos-eventos/agacech/cigsa4.webp',        
      ]
    }

  ]

  getVideos(){
    return of(this.videos);
  }
}
