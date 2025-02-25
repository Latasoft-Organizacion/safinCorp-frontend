import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Alianza {
  
  nombre: string;
  logoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class NuestrasAliansasService {
  constructor() {}


  getAlianzas(): Observable<Alianza[]> {
    const alianzas: Alianza[] = [
      {  nombre: 'Vivo en Condominio Consultores', logoUrl: 'assets/img/aliansas/vivoencondominio.webp'  },
      {  nombre: 'Balloqui Ingenieria SPA', logoUrl: 'assets/img/aliansas/LOGO-BALLOQUI.webp'},
      {  nombre: 'Estudio Juridico ARMIS', logoUrl: 'assets/img/aliansas/armis.webp' },
      {  nombre: 'Asesoria en Prevención  de Riesgos APES', logoUrl: 'assets/img/aliansas/APES.webp' },
      {  nombre: 'SV Qualitas Consultores', logoUrl: 'assets/img/aliansas/svCualitas.webp'},
      {  nombre: 'Cap-Instalmet Constructores', logoUrl: 'assets/img/aliansas/cap-instment.webp' },
      {  nombre: 'Prevención y Emergencias.cl', logoUrl: 'assets/img/aliansas/seguridad.webp' }
    ];
    return of(alianzas)
  }
}
