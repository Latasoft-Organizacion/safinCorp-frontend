import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SegurosService } from '../../services/seguros.service';
import { Router } from '@angular/router';

export interface Seguros{
  titulo_seguro:string,
  slug:string;
  foto_seguro:string,
  descripcion:string,
  caracteristicas_seguro:string
}

@Component({
  selector: 'app-lista-seguros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-seguros.component.html',
  styleUrl: './lista-seguros.component.css'
})
export class ListaSegurosComponent implements OnInit{

  private segurosService=inject(SegurosService)
  private router= inject(Router)

  // Array donde guardamos la lista de seguros
  public listaSeguros: Seguros[] = [];

  ngOnInit() {
    // Al iniciar, cargamos la lista completa
    this.listaSeguros = this.segurosService.getSeguros();
  }

  goToSegurosDetail(slug: string) {
    this.router.navigate(['detalle-seguro', slug]);
  }

}
