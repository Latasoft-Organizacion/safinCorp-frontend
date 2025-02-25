import { Component } from '@angular/core';
import { SlaiderComponent } from '../../components/slaider/slaider.component';
import { NuestrasAliansasComponent } from '../../components/nuestras-aliansas/nuestras-aliansas.component';
import { ListaSegurosComponent } from '../../components/lista-seguros/lista-seguros.component';
import { NuestrosSegurosComponent } from '../../components/nuestros-seguros/nuestros-seguros.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlaiderComponent,ListaSegurosComponent,NuestrosSegurosComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  scrollToSection(sectionId: string) {
    // Redirigir a inicio y esperar a que cargue antes de hacer el scroll
    
        this.smoothScroll(sectionId);
    
  
}

private smoothScroll(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


}
