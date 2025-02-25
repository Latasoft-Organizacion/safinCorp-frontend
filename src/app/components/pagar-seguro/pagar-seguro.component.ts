import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SegurosCompanyService } from '../../services/seguros-company.service';

interface Seguros{
  logoAliansas:string,
  url:string
}

@Component({
  selector: 'app-pagar-seguro',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './pagar-seguro.component.html',
  styleUrl: './pagar-seguro.component.css'
})
export class PagarSeguroComponent implements OnInit {
  seguros:Seguros[]=[];
  private seguroService= inject(SegurosCompanyService)

 ngOnInit(): void {
   this.getSeguros();
 }

  getSeguros(){
    this.seguros= this.seguroService.getImagenAliansas();
  }

}
