import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../shared/safe-url.pipe';
import { register } from 'swiper/element/bundle';

// Registra los elementos personalizados de Swiper
register();

interface Video{
  nombre:string;
  descripcion:string;
  link?:string;
  fotos?:string[]
}
@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule,SafeUrlPipe],
  templateUrl: './galeria.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  @ViewChild('swiper') swiper!: ElementRef;
  swiperInstance: any;
  
  videos:Video[]=[];
  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.galeriaService.getVideos().subscribe((data: any[]) => {
      this.videos = data;
    });
  }

  ngAfterViewInit() {
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true, // ❌ Deshabilita el loop
      navigation: {
        el: '.swiper-button-next, .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      speed: 500, // Velocidad de transición
    };

    // Asigna configuración e inicializa Swiper
    if (this.swiper) {
      Object.assign(this.swiper.nativeElement, swiperParams);
      this.swiper.nativeElement.initialize();
      this.swiperInstance = this.swiper.nativeElement.swiper;
    }
  }

  ngOnDestroy() {
    // Destruir la instancia para evitar fugas de memoria
    if (this.swiperInstance) {
      this.swiperInstance.destroy();
    }
  }
}
