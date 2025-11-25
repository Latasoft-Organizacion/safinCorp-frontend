import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../shared/safe-url.pipe';
import { register } from 'swiper/element/bundle';
import { GaleriaCategoria } from '../../models/galeria';

// Registra los elementos personalizados de Swiper
register();

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './galeria.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements AfterViewInit, OnDestroy {
  categorias: GaleriaCategoria[] = [];
  cargando: boolean = true;
  
  // Modal/Lightbox
  imagenExpandida: string | null = null;
  tituloImagenExpandida: string = '';
  
  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    this.cargarGaleria();
    this.setupKeyboardListener();
  }

  cargarGaleria(): void {
    this.galeriaService.getGaleriaPorCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar galería:', error);
        this.cargando = false;
      }
    });
  }

  /**
   * Configura el listener de teclado para cerrar modal con ESC
   */
  setupKeyboardListener(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.imagenExpandida) {
        this.cerrarModal();
      }
    });
  }

  /**
   * Abre el modal con la imagen expandida
   */
  expandirImagen(imagenUrl: string, titulo: string): void {
    this.imagenExpandida = imagenUrl;
    this.tituloImagenExpandida = titulo;
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }

  /**
   * Cierra el modal de imagen expandida
   */
  cerrarModal(): void {
    this.imagenExpandida = null;
    this.tituloImagenExpandida = '';
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }

  ngAfterViewInit() {
    // Swiper se inicializa automáticamente con los elementos swiper-container
  }

  ngOnDestroy() {
    // Limpieza si es necesaria
    this.cerrarModal();
  }
}
