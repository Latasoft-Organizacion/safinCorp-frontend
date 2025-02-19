import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NuestrasAliansasService {

  aliansas=[
    {
      logoAliansas: 'assets/img/aliansas/seguro-bci.webp',
      url: 'https://www.bci.cl'
    },
    {
      logoAliansas: 'assets/img/aliansas/seguro-chubb.webp',
      url: 'https://www.chubb.com'
    },
    {
      logoAliansas: 'assets/img/aliansas/seguro-consorcio.webp',
      url: 'https://www.consorcio.cl'
    },
    {
      logoAliansas:'assets/img/aliansas/seguro-fid.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/aliansas/seguro-hdi.webp',
      url:'https://www.hdi.cl'
    },
    {
      logoAliansas:'assets/img/aliansas/seguro-mapfre.webp',
      url:'https://www.mapfre.com'
    },
    {
      logoAliansas:'assets/img/aliansas/seguro-reale.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/aliansas/seguro-renta.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/aliansas/seguro-southbridge.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/aliansas/seguro.sura.webp',
      url:''
    },
    {
      logoAliansas:'assets/img/aliansas/seguro-unnion.webp',
      url:''
    }
  ]

  getImagenAliansas(){
    return this.aliansas;
  }
}
