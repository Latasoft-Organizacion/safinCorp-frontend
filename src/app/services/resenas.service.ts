import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient) { }

  /**
   * Obtener todas las reseñas aprobadas
   */
  getResenas(): Observable<ResenaResponse> {
    return this.http.get<ResenaResponse>(this.apiUrl);
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
