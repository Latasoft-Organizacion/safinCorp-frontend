import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SafeUrlPipe } from '../../shared/safe-url.pipe';

register();

interface DatosUtilesDocumento {
  nombre: string;
  descripcion: string;
  imagen: string;
}

interface DatosUtilesCategoria {
  id: string;
  nombre: string;
  icono: string;
  documentos: DatosUtilesDocumento[];
}

interface DocumentoConCategoria extends DatosUtilesDocumento {
  categoriaId: string;
}

@Component({
  selector: 'app-datos-utiles',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './datos-utiles.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './datos-utiles.component.css'
})
export class DatosUtilesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  categorias: DatosUtilesCategoria[] = [];
  todosLosDocumentos: DocumentoConCategoria[] = [];
  categoriaActiva: string = 'seguros';
  cargando: boolean = true;
  imagenExpandida: string | null = null;
  tituloImagenExpandida: string = '';
  currentIndex: number = 0;
  private keyboardListener: ((event: KeyboardEvent) => void) | null = null;
  private swiper: any = null;

  // ✅ Guardamos referencia al listener para poder removerlo en ngOnDestroy
  private slideChangeListener: (() => void) | null = null;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.cargarDatos();
    this.setupKeyboardListener();
  }

  ngAfterViewInit(): void {
    this.setupSwiperListeners();
  }

  cargarDatos(): void {
    this.categorias = [
      {
        id: 'seguros',
        nombre: 'Seguros',
        icono: '',
        documentos: [
          {
            nombre: 'Asegura tu Póliza',
            descripcion: 'Conoce cómo asegurar adecuadamente tu póliza',
            imagen: 'assets/img/datos-utiles/asegura_poliza.jpeg'
          },
          {
            nombre: 'Seguro Administrado',
            descripcion: 'Información sobre pólizas administradas',
            imagen: 'assets/img/datos-utiles/seguro_administrado.jpeg'
          },
          {
            nombre: 'Sobre Seguros',
            descripcion: 'Conceptos básicos de seguros',
            imagen: 'assets/img/datos-utiles/sobre_seguros.jpeg'
          }
        ]
      },
      {
        id: 'siniestros',
        nombre: 'Siniestros',
        icono: '',
        documentos: [
          {
            nombre: 'Plazo de Denuncia de Siniestro',
            descripcion: 'Tiempos límites para denunciar un siniestro',
            imagen: 'assets/img/datos-utiles/plazo_denuncia_siniestro.jpeg'
          },
          {
            nombre: 'Checklist Preparación Siniestros',
            descripcion: 'Pasos a seguir para prepararse ante un siniestro',
            imagen: 'assets/img/datos-utiles/checklist_preparacion_siniestros.jpeg'
          }
        ]
      },
      {
        id: 'prevencion',
        nombre: 'Prevención',
        icono: '',
        documentos: [
          {
            nombre: 'Prevención en Condominios',
            descripcion: 'Medidas preventivas para condominios',
            imagen: 'assets/img/datos-utiles/prevencion en condominios.jpeg'
          },
          {
            nombre: 'Infraseguro',
            descripcion: 'Entiende qué es el infraseguro y cómo evitarlo',
            imagen: 'assets/img/datos-utiles/infraseguro.jpeg'
          }
        ]
      },
      {
        id: 'otros',
        nombre: 'Otros',
        icono: '',
        documentos: [
          {
            nombre: 'Día de la Mujer',
            descripcion: 'Información especial',
            imagen: 'assets/img/datos-utiles/dia_mujer.jpeg'
          },
          {
            nombre: 'Qué Hacemos',
            descripcion: 'Conoce nuestros servicios',
            imagen: 'assets/img/datos-utiles/que_hacemos.jpeg'
          }
        ]
      }
    ];

    this.todosLosDocumentos = [];
    this.categorias.forEach(categoria => {
      categoria.documentos.forEach(documento => {
        this.todosLosDocumentos.push({
          ...documento,
          categoriaId: categoria.id
        });
      });
    });

    this.cargando = false;
  }

  cambiarCategoria(categoriaId: string): void {
    this.categoriaActiva = categoriaId;

    const indexPrimerDocumento = this.todosLosDocumentos.findIndex(
      doc => doc.categoriaId === categoriaId
    );

    if (indexPrimerDocumento !== -1 && this.swiper) {
      // slideToLoop respeta los slides clonados del bucle
      this.swiper.slideToLoop(indexPrimerDocumento);
    }
  }

  private setupSwiperListeners(): void {
    setTimeout(() => {
      if (!this.swiperContainer) return;

      const swiperEl = this.swiperContainer.nativeElement;
      this.swiper = swiperEl.swiper;

      if (!this.swiper) return;

      const updateActiveCategory = () => {
        // ✅ Ejecutar dentro de NgZone para que Angular detecte los cambios
        this.ngZone.run(() => {
          // realIndex apunta al índice real ignorando los clones del loop
          const realIndex = this.swiper.realIndex;
          const totalSlides = this.todosLosDocumentos.length;

          if (realIndex >= 0 && realIndex < totalSlides) {
            this.currentIndex = realIndex;
            this.categoriaActiva = this.todosLosDocumentos[realIndex].categoriaId;
          }
        });
      };

      // ✅ El nombre correcto del evento para Swiper Element (web component) es
      //    'swiperslidechange' — todo en minúsculas, sin guión, con prefijo 'swiper'
      this.slideChangeListener = updateActiveCategory;
      swiperEl.addEventListener('swiperslidechange', this.slideChangeListener);

      // Inicializar estado al montar
      updateActiveCategory();
    }, 50);
  }

  expandirImagen(imagen: string, titulo: string): void {
    this.imagenExpandida = imagen;
    this.tituloImagenExpandida = titulo;
    document.body.style.overflow = 'hidden';
  }

  cerrarImagen(): void {
    this.imagenExpandida = null;
    this.tituloImagenExpandida = '';
    document.body.style.overflow = 'auto';
  }

  setupKeyboardListener(): void {
    this.keyboardListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.cerrarImagen();
      }
    };
    window.addEventListener('keydown', this.keyboardListener);
  }

  ngOnDestroy(): void {
    if (this.keyboardListener) {
      window.removeEventListener('keydown', this.keyboardListener);
    }

    // ✅ Limpiar el listener de Swiper al destruir el componente
    if (this.swiperContainer && this.slideChangeListener) {
      this.swiperContainer.nativeElement.removeEventListener(
        'swiperslidechange',
        this.slideChangeListener
      );
    }
  }
}