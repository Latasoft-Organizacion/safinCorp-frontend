import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ResenaItem {
  id?: string;
  nombre: string;
  calificacion: number;
  comentario: string;
  fecha?: string;
  aprobada?: boolean;
}

export interface ResenaResponse {
  success: boolean;
  data?: ResenaItem[];
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResenasService {
  private apiUrl = `${environment.apiUrl}/resenas`;
  private resenasCache$: Observable<ResenaResponse> | null = null;

  constructor(private http: HttpClient) { }

  /**
   * Obtener todas las reseñas aprobadas (con caché)
   */
  getResenas(): Observable<ResenaResponse> {
    if (!this.resenasCache$) {
      this.resenasCache$ = this.http.get<ResenaResponse>(this.apiUrl).pipe(
        shareReplay(1) // Cachea el resultado y lo comparte entre subscriptores
      );
    }
    return this.resenasCache$;
  }

  /**
   * Limpiar caché de reseñas (útil después de crear una nueva)
   */
  clearCache(): void {
    this.resenasCache$ = null;
  }

  /**
   * Crear una nueva reseña
   */
  createResena(resena: ResenaItem): Observable<ResenaResponse> {
    return this.http.post<ResenaResponse>(this.apiUrl, resena);
  }

  /**
   * Obtener todas las reseñas (incluyendo no aprobadas) - Solo admin
   */
  getAllResenas(): Observable<ResenaResponse> {
    return this.http.get<ResenaResponse>(`${this.apiUrl}/todas`);
  }

  /**
   * Aprobar una reseña - Solo admin
   */
  aprobarResena(id: string): Observable<ResenaResponse> {
    return this.http.patch<ResenaResponse>(`${this.apiUrl}/${id}/aprobar`, {});
  }

  /**
   * Eliminar una reseña - Solo admin
   */
  deleteResena(id: string): Observable<ResenaResponse> {
    return this.http.delete<ResenaResponse>(`${this.apiUrl}/${id}`);
  }
}
