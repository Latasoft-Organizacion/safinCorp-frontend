import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

// Registra los elementos personalizados de Swiper
register();

@Component({
  selector: 'app-slaider',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slaider.component.html',
  styleUrls: ['./slaider.component.css']  // <-- styleUrls en plural
})
export class SlaiderComponent {

  @ViewChild('swiper') swiper!: ElementRef;
  swiperInstance: any;

  // Array de slides con imagen, título y descripción
  slides = [
    {
      image: 'assets/condominos.webp',
      title: 'Eres administrador o miembro de comité?',
      description: 'Contáctanos y recibe un asesoramiento profesional en seguros.',
      buttonText: 'Ver más'
    },
    {
      image: 'assets/img/seguros/seguro-construccion.webp',
      title: 'Protege tu Comunidad',
      description: 'Obtén un plan de cobertura adaptado a tus necesidades.',
      buttonText: 'Contáctanos'
    },
    {
      image: 'assets/img/seguros/seguro-garantia.webp',
      title: 'Seguridad y Tranquilidad',
      description: 'Asegura el bienestar de los residentes con nuestras pólizas.',
      buttonText: 'Cotizar ahora'
    }
  ];

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
        delay: 3000,           // 3 seg entre slides
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
