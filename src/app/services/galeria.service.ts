import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor() { }
  private videos=[
    {
      nombre:'¿QUienes Somos?',
      descripcion:'',
      link: 'https://drive.google.com/file/d/1Hzv2euPzLEz6TTe7c9d_R8VYsu0Ace1O/preview',
      fotos:[
        
      ]
    },
    {
      nombre:'Agacech 2024',
      descripcion:'Entrevista a Maria Alejandra Letelier - Safincorp ',
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
    },
    {
        nombre:'Certificados de Participación',
        descripcion:'',
        link: '',
        fotos:[
          'assets/img/fotos-eventos/capacitacion/certificado-paarticipacion.webp',
          'assets/img/fotos-eventos/capacitacion/certificado-sofofa.webp',                
          'assets/img/fotos-eventos/capacitacion/certificado-cigsa.webp',
          'assets/img/fotos-eventos/capacitacion/certificado-liquidor-siniestros.webp',
          'assets/img/fotos-eventos/capacitacion/certificado-seguro-vida.webp'                
        ]
    },
    
  {
    nombre:'Evento BCI',
    descripcion:'',
    link: '',
    fotos:[
      'assets/img/fotos-eventos/bci/evento-bci-1.webp',
      'assets/img/fotos-eventos/bci/evento-bci-2.webp',
      'assets/img/fotos-eventos/bci/evento-bci-3.webp',
      'assets/img/fotos-eventos/bci/evento-bci-4.webp'        
    ]
  },
  {
    nombre:'Segundo Evento AGACECH',
    descripcion:'',
    link: '',
    fotos:[
      'assets/img/fotos-eventos/agacech-2/segundo-evento-agcech-1.webp',
      'assets/img/fotos-eventos/agacech-2/segundo-evento-agcech-2.webp',
      'assets/img/fotos-eventos/agacech-2/segundo-evento-agcech-3.webp',
      'assets/img/fotos-eventos/agacech-2/segundo-evento-agcech-4.webp'        
    ]
  },
  {
    nombre:'Convención ANS 2023',
    descripcion:'',
    link: '',
    fotos:[
      'assets/img/fotos-eventos/ans/convencion-ans.webp',
      'assets/img/fotos-eventos/ans/convencion-ans2.webp',
      'assets/img/fotos-eventos/ans/convencion-ans3.webp',
      'assets/img/fotos-eventos/ans/convencion-ans4.webp'        
    ]
  },
  {
    nombre:'Evento N° 5 Agacech',
    descripcion:'Quinta versión del evento de Agacech',
    link: 'assets/img/fotos-eventos/agacech-5/video.mp4',
    fotos:[
      'assets/img/fotos-eventos/agacech-5/1.webp',
      'assets/img/fotos-eventos/agacech-5/4.webp',
      'assets/img/fotos-eventos/agacech-5/5.webp'
    ]
  }
  

  ]

  getVideos(){
    return of(this.videos);
  }
}
