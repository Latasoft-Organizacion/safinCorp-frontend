import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  title = 'Quiénes Somos';
description = 'En SafinCorp, Corredora de Seguros, nos enorgullece especializarnos en brindar soluciones personalizadas para comunidades, condominios y empresas.';
mission = 'Nuestro compromiso es proporcionar la máxima seguridad y tranquilidad mediante una completa gama de pólizas, diseñadas específicamente para cubrir las necesidades de los espacios comunes y de las unidades individuales en tu comunidad.';
owner = `María Alejandra Letelier Valencia, CEO  de SAFINCORP Corredora de Seguros  , socia del Colegio de Corredores de Seguros de Chile, Profesional Universitaria, Relacionadora Publica con Mencion en Comunicacion y Marketing.-
Ejecutiva Bancaria por 10 años en Banco de Chile y Banco Scotiabank,  Administradora de edificios y condominios, con 5 años de experiencia en Inmobiliaria Maestra.
  Certificada por la CMF ( Comisión Mercado Financiero )  como Corredora de Seguros  desde el año 2020
 Especializada en el área de condominios.  Pertenece a la ANS ( Asociación Nacional de Seguros )  y actualmente se encuentra realizando un diplomado en liquidación de siniestros en la Escuela de Seguros.`;


}
