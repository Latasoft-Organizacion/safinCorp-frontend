import { Component } from '@angular/core';

@Component({
  selector: 'app-denunciar-siniestro',
  standalone: true,
  imports: [],
  templateUrl: './denunciar-siniestro.component.html',
  styleUrl: './denunciar-siniestro.component.css'
})
export class DenunciarSiniestroComponent {

  
   scrollSmooth(sectionId:string){
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior:'smooth',block:'start'})
    }

  }

}
