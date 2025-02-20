import { Component } from '@angular/core';
import { SlaiderComponent } from '../../components/slaider/slaider.component';
import { NuestrasAliansasComponent } from '../../components/nuestras-aliansas/nuestras-aliansas.component';
import { ListaSegurosComponent } from '../../components/lista-seguros/lista-seguros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlaiderComponent,NuestrasAliansasComponent,ListaSegurosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
