import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Resena {
  id: number;
  nombre: string;
  calificacion: number;
  comentario: string;
  fecha: Date;
}

@Component({
  selector: 'app-resena',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resena.component.html',
  styleUrl: './resena.component.css',
})
export class ResenaComponent {
  resenas: Resena[] = [
    {
      id: 1,
      nombre: 'Carla Mendoza',
      calificacion: 5,
      comentario: 'El proceso fue increíblemente rápido y el asesoramiento muy profesional. Resolvieron todas mis dudas.',
      fecha: new Date('2024-10-15')
    },
    {
      id: 2,
      nombre: 'Roberto Jiménez',
      calificacion: 5,
      comentario: 'Excelente servicio, muy atentos y profesionales. Recomiendo totalmente Safincorp.',
      fecha: new Date('2024-10-20')
    },
    {
      id: 3,
      nombre: 'María González',
      calificacion: 4,
      comentario: 'Buen servicio en general. El proceso fue claro y me mantuvieron informada en todo momento.',
      fecha: new Date('2024-11-01')
    }
  ];

  // Formulario
  nombreUsuario: string = '';
  calificacionUsuario: number = 0;
  comentarioUsuario: string = '';
  calificacionHover: number = 0;

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }

  setCalificacion(rating: number): void {
    this.calificacionUsuario = rating;
  }

  setHoverCalificacion(rating: number): void {
    this.calificacionHover = rating;
  }

  clearHoverCalificacion(): void {
    this.calificacionHover = 0;
  }

  enviarResena(): void {
    if (this.nombreUsuario.trim() && this.comentarioUsuario.trim() && this.calificacionUsuario > 0) {
      const nuevaResena: Resena = {
        id: this.resenas.length + 1,
        nombre: this.nombreUsuario,
        calificacion: this.calificacionUsuario,
        comentario: this.comentarioUsuario,
        fecha: new Date()
      };

      this.resenas.unshift(nuevaResena); // Agregar al inicio

      // Limpiar formulario
      this.nombreUsuario = '';
      this.calificacionUsuario = 0;
      this.comentarioUsuario = '';
      this.calificacionHover = 0;

      // Scroll hacia arriba para ver la nueva reseña
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getDisplayCalificacion(): number {
    return this.calificacionHover || this.calificacionUsuario;
  }
}
