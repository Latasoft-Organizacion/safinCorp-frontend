import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GaleriaItem, GaleriaCategoria, Charla } from '../models/galeria';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor() { }
  
  private galeriaItems: GaleriaItem[] = [
    // CATEGORÍA: QUIENES SOMOS
    {
      nombre: '¿Quiénes Somos?',
      descripcion: 'Conoce más sobre Safincorp',
      link: 'https://drive.google.com/file/d/1Hzv2euPzLEz6TTe7c9d_R8VYsu0Ace1O/preview',
      fotos: [],
      categoria: 'quienes-somos'
    },
    
    // CATEGORÍA: EVENTOS (cada carpeta es un slide separado)
    {
      nombre: 'Networking y capacitación para administradores 2026',
      descripcion: '',
      link: '',
      fotos: [
        'assets/img/fotos-eventos/administradoresCondominios/AdminCondominios1.webp',
        'assets/img/fotos-eventos/administradoresCondominios/AdminCondominios2.webp',
        'assets/img/fotos-eventos/administradoresCondominios/AdminCondominios3.webp',
        'assets/img/fotos-eventos/administradoresCondominios/AdminCondominios4.webp',
      ],
      categoria: 'eventos'
    },
    {
      nombre: 'Networking y capacitación para administradores 2026',
      descripcion: 'Video de invitación al evento',
      link: 'assets/img/fotos-eventos/administradoresCondominios/administradoresCondominios.mp4',
      fotos: [],
      categoria: 'eventos'
    },
    {
      nombre: 'Agacech 2025',
      descripcion: 'Video del evento Agacech 2025',
      link: 'assets/img/fotos-eventos/agacech_videos/agacech2025.mp4',
      fotos: [],
      categoria: 'eventos'
    },
    {
      nombre: 'Expo Condominios 2025 - 1',
      descripcion: '',
      link: 'assets/img/fotos-eventos/condominios-videos/expocondominios (1).mp4',
      fotos: [],
      categoria: 'eventos'
    },
    {
      nombre: 'Expo Condominios 2025 - 2',
      descripcion: '',
      link: 'assets/img/fotos-eventos/condominios-videos/expocondominios (2).mp4',
      fotos: [],
      categoria: 'eventos'
    },
    {
      nombre: 'Expo Condominios 2025 - 3',
      descripcion: '',
      link: 'assets/img/fotos-eventos/condominios-videos/expocondominios (3).mp4',
      fotos: [],
      categoria: 'eventos'
    },
    {
      nombre: 'Expo Condominios 2025 - Fotos',
      descripcion: '',
      link: '',
      fotos: [
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios (1).webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios (2).webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios (3).webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios (4).webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios (5).webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios (6).webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios (7).webp',
      ],
      categoria: 'eventos'
    },
        {
      nombre: 'Expo Condominios 2025 - Fotos',
      descripcion: '',
      link: '',
      fotos: [
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios-_8_.webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios-_9_.webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios-_10_.webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios-_11_.webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios-_12_.webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios-_13_.webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios-_14_.webp',
        'assets/img/fotos-eventos/expo-condominios2025/expocondominios-_15_.webp'
      ],
      categoria: 'eventos'
    },
    {
      nombre: 'Agacech 2024',
      descripcion: 'Entrevista a Maria Alejandra Letelier - Safincorp',
      link: 'https://www.youtube.com/embed/tDm2caLU44w?si=08no9IZdh_wEebHf',
      fotos: [],
      categoria: 'eventos'
    },
    {
      nombre: 'Evento Agacech Aniversario',
      descripcion: 'Quinta versión del evento de Agacech',
      link: 'assets/img/fotos-eventos/agacech_videos/aniversario5.mp4',
      fotos: [],
      categoria: 'eventos'
    },
    {
      nombre: 'CIGSA',
      descripcion: '',
      link: '',
      fotos: [
        'assets/img/fotos-eventos/agacech/cigsa1.webp',
        'assets/img/fotos-eventos/agacech/cigsa2.webp',
        'assets/img/fotos-eventos/agacech/cigsa3.webp',
        'assets/img/fotos-eventos/agacech/cigsa4.webp',
        'assets/img/fotos-eventos/agacech/cigsa5.webp'
      ],
      categoria: 'eventos'
    },
    {
      nombre: 'Segundo Evento AGACECH',
      descripcion: '',
      link: '',
      fotos: [
        'assets/img/fotos-eventos/agacech-2/segundo-evento-agcech-1.webp',
        'assets/img/fotos-eventos/agacech-2/segundo-evento-agcech-2.webp',
        'assets/img/fotos-eventos/agacech-2/segundo-evento-agcech-3.webp',
        'assets/img/fotos-eventos/agacech-2/segundo-evento-agcech-4.webp'
      ],
      categoria: 'eventos'
    },
    {
      nombre: 'Evento Agacech - Fotos',
      descripcion: '',
      link: '',
      fotos: [
        'assets/img/fotos-eventos/agacech-5/1.webp',
        'assets/img/fotos-eventos/agacech-5/4.webp',
        'assets/img/fotos-eventos/agacech-5/5.webp'
      ],
      categoria: 'eventos'
    },
    {
      nombre: 'Convención ANS 2023',
      descripcion: '',
      link: '',
      fotos: [
        'assets/img/fotos-eventos/ans/convencion-ans.webp',
        'assets/img/fotos-eventos/ans/convencion-ans2.webp',
        'assets/img/fotos-eventos/ans/convencion-ans3.webp',
        'assets/img/fotos-eventos/ans/convencion-ans4.webp'
      ],
      categoria: 'eventos'
    },
    {
      nombre: 'Evento BCI',
      descripcion: '',
      link: '',
      fotos: [
        'assets/img/fotos-eventos/bci/evento-bci-1.webp',
        'assets/img/fotos-eventos/bci/evento-bci-2.webp',
        'assets/img/fotos-eventos/bci/evento-bci-3.webp',
        'assets/img/fotos-eventos/bci/evento-bci-4.webp'
      ],
      categoria: 'eventos'
    },
    
    // CATEGORÍA: CERTIFICACIONES (cada certificado es un slide)
    {
      nombre: 'Certificado de Participación',
      descripcion: '',
      link: '',
      fotos: ['assets/img/fotos-eventos/certificacion/certificado-paarticipacion.webp'],
      categoria: 'certificaciones'
    },
    {
      nombre: 'Certificado SOFOFA',
      descripcion: '',
      link: '',
      fotos: ['assets/img/fotos-eventos/certificacion/certificado-sofofa.webp'],
      categoria: 'certificaciones'
    },
    {
      nombre: 'Certificado CIGSA',
      descripcion: '',
      link: '',
      fotos: ['assets/img/fotos-eventos/certificacion/certificado-cigsa.webp'],
      categoria: 'certificaciones'
    },
    {
      nombre: 'Certificado Liquidador de Siniestros',
      descripcion: '',
      link: '',
      fotos: ['assets/img/fotos-eventos/certificacion/certificado-liquidor-siniestros.webp'],
      categoria: 'certificaciones'
    },
    {
      nombre: 'Certificado Seguro de Vida',
      descripcion: '',
      link: '',
      fotos: ['assets/img/fotos-eventos/certificacion/certificado-seguro-vida.webp'],
      categoria: 'certificaciones'
    }
  ];

  private charlas: Charla[] = [
    {
      titulo: 'Seguros, Cómo prevenir el infraseguro y el siniestro',
      descripcion: 'Charla sobre prevención de infraseguro y gestión de siniestros',
      url: 'https://www.youtube.com/watch?v=hvZr3cpeOoM',
      thumbnail: 'https://img.youtube.com/vi/hvZr3cpeOoM/hqdefault.jpg'
    }
  ];

  /**
   * Obtiene todos los items de galería
   */
  getGaleriaItems(): Observable<GaleriaItem[]> {
    return of(this.galeriaItems);
  }

  /**
   * Obtiene items agrupados por categoría
   */
  getGaleriaPorCategorias(): Observable<GaleriaCategoria[]> {
    const categorias: GaleriaCategoria[] = [
      {
        id: 'quienes-somos',
        nombre: '¿Quiénes Somos?',
        items: this.galeriaItems.filter(item => item.categoria === 'quienes-somos')
      },
      {
        id: 'eventos',
        nombre: 'Eventos',
        items: this.galeriaItems.filter(item => item.categoria === 'eventos')
      },
      {
        id: 'certificaciones',
        nombre: 'Certificaciones',
        items: this.galeriaItems.filter(item => item.categoria === 'certificaciones')
      }
    ].filter(cat => cat.items.length > 0); // Solo devolver categorías con contenido

    return of(categorias);
  }

  /**
   * Obtiene todas las charlas
   */
  getCharlas(): Observable<Charla[]> {
    return of(this.charlas);
  }

  /**
   * @deprecated Usar getGaleriaItems() en su lugar
   */
  getVideos(): Observable<GaleriaItem[]> {
    return this.getGaleriaItems();
  }
}
