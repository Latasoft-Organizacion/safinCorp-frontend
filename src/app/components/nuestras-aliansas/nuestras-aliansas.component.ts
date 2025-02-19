import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NuestrasAliansasService } from '../../services/nuestras-aliansas.service';
import { RouterLink } from '@angular/router';
interface Aliansas{
  logoAliansas:string,
  url:string
}
@Component({
  selector: 'app-nuestras-aliansas',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nuestras-aliansas.component.html',
  styleUrl: './nuestras-aliansas.component.css'
})
export class NuestrasAliansasComponent implements OnInit {
  imagenes:Aliansas[]=[];

  private aliansasService= inject(NuestrasAliansasService)

  ngOnInit(): void {
    this.getAliansas();
  }

  getAliansas() {
    this.imagenes = this.aliansasService.getImagenAliansas()
  }

}
