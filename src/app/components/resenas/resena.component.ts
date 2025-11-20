import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResenasService, ResenaItem } from '../../services/resenas.service';

@Component({
  selector: 'app-resena',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ResenasService],
  templateUrl: './resena.component.html',
  styleUrl: './resena.component.css',
})
export class ResenaComponent implements OnInit {
  resenas: ResenaItem[] = [];
  cargando: boolean = false;
  error: string = '';
  mensajeExito: string = '';

  // Formulario
  nombreUsuario: string = '';
  calificacionUsuario: number = 0;
  comentarioUsuario: string = '';
  calificacionHover: number = 0;
  enviando: boolean = false;

  constructor(private resenasService: ResenasService) { }

  ngOnInit(): void {
    this.cargarResenas();
  }

  /**
   * Cargar reseñas desde el backend
   */
  cargarResenas(): void {
    this.cargando = true;
    this.error = '';

    this.resenasService.getResenas().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.resenas = response.data;
        }
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar reseñas:', err);
        this.error = 'Error al cargar las reseñas. Por favor, intenta de nuevo.';
        this.cargando = false;
      }
    });
  }

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

  /**
   * Enviar una nueva reseña al backend
   */
  enviarResena(): void {
    if (this.nombreUsuario.trim() && this.comentarioUsuario.trim() && this.calificacionUsuario > 0) {
      this.enviando = true;
      this.error = '';
      this.mensajeExito = '';

      const nuevaResena: ResenaItem = {
        nombre: this.nombreUsuario.trim(),
        calificacion: this.calificacionUsuario,
        comentario: this.comentarioUsuario.trim()
      };

      this.resenasService.createResena(nuevaResena).subscribe({
        next: (response) => {
          if (response.success) {
            this.mensajeExito = 'Gracias por tu reseña. Será publicada después de ser revisada.';
            
            // Limpiar formulario
            this.nombreUsuario = '';
            this.calificacionUsuario = 0;
            this.comentarioUsuario = '';
            this.calificacionHover = 0;

            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
              this.mensajeExito = '';
            }, 5000);

            // Recargar reseñas para mostrar la nueva (si fue auto-aprobada)
            this.cargarResenas();
          }
          this.enviando = false;
        },
        error: (err) => {
          console.error('Error al enviar reseña:', err);
          this.error = err.error?.message || 'Error al enviar la reseña. Por favor, intenta de nuevo.';
          this.enviando = false;
        }
      });
    }
  }

  getDisplayCalificacion(): number {
    return this.calificacionHover || this.calificacionUsuario;
  }
}
