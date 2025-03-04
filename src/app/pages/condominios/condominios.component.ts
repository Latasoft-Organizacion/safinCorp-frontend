import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';

// Registra los elementos personalizados de Swiper
register();

@Component({
  selector: 'app-condominios',
  standalone: true,
  imports: [ContactoComponent,CommonModule],
  templateUrl: './condominios.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './condominios.component.css'
})
export class CondominiosComponent {
  fotos=[
    'assets/img/condominios/condominio.webp',
    'assets/img/condominios/condominio2.webp'  
  ]
   @ViewChild('swiper') swiper!: ElementRef;
    swiperInstance: any;

    ngAfterViewInit() {
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        
        autoplay: {
          
          disableOnInteraction: false
        },
        speed: 800,             // Velocidad de la transición
      };
  
      // Asigna configuración e inicializa Swiper
      Object.assign(this.swiper.nativeElement, swiperParams);
      this.swiper.nativeElement.initialize();
  
      // Guarda la instancia
      this.swiperInstance = this.swiper.nativeElement.swiper;
  
      // Forzar inicio del autoplay (a veces necesario en los Custom Elements)
      if (this.swiperInstance?.autoplay) {
        this.swiperInstance.autoplay.start();
      }
  
      // Evento para asignar clases de animación manual
      this.swiperInstance.on('slideChangeTransitionStart', () => {
        const slides = document.querySelectorAll('.slide-item');
  
        slides.forEach((slide: Element, index: number) => {
          if (index === this.swiperInstance.activeIndex) {
            slide.classList.add('slide-active');
            slide.classList.remove('slide-inactive');
          } else {
            slide.classList.remove('slide-active');
            slide.classList.add('slide-inactive');
          }
        });
      });
  
      // Forzar el primer slide a "activo" al inicio
      setTimeout(() => {
        const firstSlide = document.querySelector('.slide-item');
        if (firstSlide) {
          firstSlide.classList.add('slide-active');
        }
      }, 0);
    }
  
    ngOnDestroy() {
      // Destruir la instancia para evitar fugas de memoria
      if (this.swiperInstance) {
        this.swiperInstance.destroy();
      }
    }

}
