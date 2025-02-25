import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SegurosCompanyService {

  constructor() { }
  comaniaSeguros=[
    {
      logoAliansas: 'assets/img/seguros-company/seguro-bci.webp',
      url: 'https://www.bci.cl'
    },
    {
      logoAliansas: 'assets/img/seguros-company/seguro-chubb.webp',
      url: 'https://www.chubb.com'
    },
    {
      logoAliansas: 'assets/img/seguros-company/seguro-consorcio.webp',
      url: 'https://www.consorcio.cl'
    },
    {
      logoAliansas:'assets/img/seguros-company/seguro-fid.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/seguros-company/seguro-hdi.webp',
      url:'https://www.hdi.cl'
    },
    {
      logoAliansas:'assets/img/seguros-company/seguro-mapfre.webp',
      url:'https://www.mapfre.com'
    },
    {
      logoAliansas:'assets/img/seguros-company/seguro-reale.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/seguros-company/seguro-renta.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/seguros-company/seguro-southbridge.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/seguros-company/seguro.sura.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/seguros-company/seguro-unnion.webp',
      url:''
    }
  ]

  getImagenAliansas(){
    return this.comaniaSeguros;
  }
}
