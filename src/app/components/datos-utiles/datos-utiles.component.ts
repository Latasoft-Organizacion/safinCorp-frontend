import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../shared/safe-url.pipe';

interface DatosUtilesDocumento {
  nombre: string;
  descripcion: string;
  imagen: string;
}

interface DatosUtilesCategoria {
  id: string;
  nombre: string;
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
  styleUrl: './datos-utiles.component.css'
})
export class DatosUtilesComponent implements OnInit, OnDestroy {
  categorias: DatosUtilesCategoria[] = [];
  todosLosDocumentos: DocumentoConCategoria[] = [];
  categoriaActiva: string = 'seguros';
  cargando: boolean = true;
  imagenExpandida: string | null = null;
  tituloImagenExpandida: string = '';
  currentIndex: number = 0;
  zoomLevel: number = 1;
  readonly maxZoom: number = 3;
  readonly minZoom: number = 1;
  private keyboardListener: ((event: KeyboardEvent) => void) | null = null;
  private autoplayInterval: any = null;

  ngOnInit(): void {
    this.cargarDatos();
    this.setupKeyboardListener();
  }

  cargarDatos(): void {
    this.categorias = [
      {
        id: 'seguros',
        nombre: 'Seguros',
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
          },

        ]
      },
      {
        id: 'siniestros',
        nombre: 'Siniestros',
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
        id: 'transporte',
        nombre: 'Transporte',
        documentos: [
          {
            nombre: 'Seguro Transporte de Carga',
            descripcion: 'Cobertura para transporte de carga',
            imagen: 'assets/img/datos-utiles/seguro_transporte_carga.jpeg'
          },
          {
            nombre: 'Seguro Transporte de Carga - Parte 2',
            descripcion: 'Más información sobre cobertura de transporte',
            imagen: 'assets/img/datos-utiles/seguro_transporte_carga_parte_2.jpeg'
          }
        ]
      },
      {
        id: 'otros',
        nombre: 'Otros',
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
          },
          {
            nombre: 'Feria Comercial AGACECH 2026',
            descripcion: 'Participación en feria comercial AGACECH',
            imagen: 'assets/img/datos-utiles/feria_comercial_agacech_2026.jpeg'
          },
          {
            nombre: 'Feria Comercial AGACECH 2026 - Parte 2',
            descripcion: 'Más momentos de la feria comercial AGACECH',
            imagen: 'assets/img/datos-utiles/feria_comercial_agacech_2026_parte_2.jpeg'
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
    if (indexPrimerDocumento !== -1) {
      this.irASlide(indexPrimerDocumento);
    }
  }

  irASlide(index: number): void {
    const totalSlides = this.todosLosDocumentos.length;
    this.currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    this.actualizarCategoriaActiva();
  }

  siguienteSlide(): void {
    this.irASlide(this.currentIndex + 1);
  }

  slideAnterior(): void {
    this.irASlide(this.currentIndex - 1);
  }

  irAlPagina(index: number): void {
    this.irASlide(index);
  }

  obtenerDocumentoActual(): DocumentoConCategoria {
    return this.todosLosDocumentos[this.currentIndex];
  }

  private actualizarCategoriaActiva(): void {
    const documentoActual = this.obtenerDocumentoActual();
    this.categoriaActiva = documentoActual.categoriaId;
  }

  expandirImagen(imagen: string, titulo: string): void {
    this.imagenExpandida = imagen;
    this.tituloImagenExpandida = titulo;
    this.zoomLevel = 1;
    document.body.style.overflow = 'hidden';
  }

  cerrarImagen(): void {
    this.imagenExpandida = null;
    this.tituloImagenExpandida = '';
    this.zoomLevel = 1;
    document.body.style.overflow = 'auto';
  }

  aumentarZoom(): void {
    if (this.zoomLevel < this.maxZoom) {
      this.zoomLevel += 0.2;
    }
  }

  disminuirZoom(): void {
    if (this.zoomLevel > this.minZoom) {
      this.zoomLevel -= 0.2;
    }
  }

  resetearZoom(): void {
    this.zoomLevel = 1;
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
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
}