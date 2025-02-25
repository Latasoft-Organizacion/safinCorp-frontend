import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SegurosCompanyService } from '../../services/seguros-company.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
interface Seguros{
  logoAliansas:string,
  url:string
}
@Component({
  selector: 'app-nuestros-seguros',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nuestros-seguros.component.html',
  styleUrl: './nuestros-seguros.component.css'
})
export class NuestrosSegurosComponent {
  imagenes:Seguros[]=[];
  
    private aliansasService= inject(SegurosCompanyService)
  
    ngOnInit(): void {
      this.getAliansas();
    }
  
    getAliansas() {
      this.imagenes = this.aliansasService.getImagenAliansas()
    }

}
