import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaService } from '../../services/galeria.service';
import { Charla } from '../../models/galeria';

@Component({
  selector: 'app-charlas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charlas.component.html',
  styleUrl: './charlas.component.css'
})
export class CharlasComponent implements OnInit {
  charlas: Charla[] = [];
  cargando: boolean = true;

  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    this.cargarCharlas();
  }

  cargarCharlas(): void {
    this.galeriaService.getCharlas().subscribe({
      next: (charlas) => {
        this.charlas = charlas;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar charlas:', error);
        this.cargando = false;
      }
    });
  }
}
