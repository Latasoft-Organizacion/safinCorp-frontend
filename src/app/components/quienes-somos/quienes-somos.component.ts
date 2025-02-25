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
owner = `María Alejandra Letelier, socia del Colegio de Corredores de Seguros de Chile, es profesional en RRPPl y administradora de edificios y condominios, con cinco años de experiencia en Inmobiliaria Maestra. Está certificada por la CMF como corredora de seguros especializada en condominios. Además, es miembro de la ANS y actualmente se encuentra realizando un diplomado en liquidación de siniestros en la Escuela de Seguros.`;


}
