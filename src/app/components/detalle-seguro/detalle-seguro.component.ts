import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SegurosService } from '../../services/seguros.service';
import { Seguros } from '../lista-seguros/lista-seguros.component';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-detalle-seguro',
  standalone: true,
  imports: [CommonModule,ContactoComponent],
  templateUrl: './detalle-seguro.component.html',
  styleUrls: ['./detalle-seguro.component.css']
})
export class DetalleSeguroComponent implements OnInit {
  dataSeguro: Seguros | undefined;

  
  private route= inject(ActivatedRoute);
  private seguroService= inject(SegurosService)


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        // Buscar en el servicio por slug
        
        this.dataSeguro = this.seguroService.getSeguroBySlug(slug);
        
      }
    });
  }


  loadSeguroDetail(slug:string){
    this.seguroService.getSeguroBySlug(slug)
  }

  

}
